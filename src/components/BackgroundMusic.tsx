import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "./ui/use-toast";

export function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  useEffect(() => {
    // Create audio element with a more reliable audio source and format
    audioRef.current = new Audio("/lovable-uploads/background-music.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

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
            title: "Music Playback",
            description: "Click anywhere to start the background music",
            duration: 5000,
          });
          
          // Add click listener for user interaction
          const handleClick = async () => {
            if (audioRef.current && !isPlaying) {
              try {
                await audioRef.current.play();
                setIsPlaying(true);
                console.log("Audio playback started after user interaction");
              } catch (error) {
                console.error("Audio playback failed:", error);
                toast({
                  title: "Playback Error",
                  description: "Please ensure your browser supports audio playback and try again.",
                  duration: 3000,
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

  const togglePlay = async () => {
    if (audioRef.current) {
      try {
        if (!isPlaying) {
          await audioRef.current.play();
          setIsPlaying(true);
          console.log("Audio playback toggled on");
        } else {
          audioRef.current.pause();
          setIsPlaying(false);
          console.log("Audio playback toggled off");
        }
      } catch (error) {
        console.error("Toggle playback failed:", error);
        toast({
          title: "Playback Error",
          description: "Unable to play audio. Please check your browser settings.",
          duration: 3000,
        });
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