import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "./ui/use-toast";

export function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  useEffect(() => {
    // Create audio element with the audio source
    audioRef.current = new Audio("https://stream.mux.com/VZtzUzGRv01JXM6bZ3KxpVoXCZg4q01Pj5Eim2LaLuJE8.m4a");
    audioRef.current.loop = true;

    // Try to autoplay immediately
    const attemptAutoplay = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
          console.log("Autoplay successful");
        } catch (error) {
          console.log("Autoplay failed, waiting for user interaction:", error);
          toast({
            title: "Click to Enable Music",
            description: "Browser requires user interaction to play audio. Click anywhere to start the music.",
            duration: 5000,
          });

          // Add click listener for user interaction
          const handleClick = () => {
            if (audioRef.current && !isPlaying) {
              const playPromise = audioRef.current.play();
              if (playPromise !== undefined) {
                playPromise
                  .then(() => {
                    setIsPlaying(true);
                    console.log("Audio playback started after user interaction");
                  })
                  .catch(error => {
                    console.error("Audio playback failed:", error);
                    toast({
                      title: "Playback Error",
                      description: "There was an issue playing the music. Please try again.",
                      duration: 3000,
                    });
                  });
              }
            }
          };

          document.addEventListener('click', handleClick, { once: true });
        }
      }
    };

    attemptAutoplay();
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (!isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
              console.log("Audio playback toggled on");
            })
            .catch(error => {
              console.error("Toggle playback failed:", error);
              toast({
                title: "Playback Error",
                description: "Failed to play audio. Please try again.",
                duration: 3000,
              });
            });
        }
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
        console.log("Audio playback toggled off");
      }
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="fixed bottom-4 right-4 bg-black/50 hover:bg-black/70 backdrop-blur-sm z-50 animate-pulse"
      onClick={togglePlay}
    >
      {isPlaying ? (
        <Volume2 className="h-6 w-6 text-red-500" />
      ) : (
        <VolumeX className="h-6 w-6 text-red-500" />
      )}
    </Button>
  );
}