import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "./ui/use-toast";

export function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  useEffect(() => {
    // Create audio element with the new audio source
    audioRef.current = new Audio("https://stream.mux.com/VZtzUzGRv01JXM6bZ3KxpVoXCZg4q01Pj5Eim2LaLuJE8.m4a");
    audioRef.current.loop = true;
    
    // Add click event listener to document for initial playback
    const handleClick = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.currentTime = 0; // Start from beginning for this song
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
              console.log("Audio playback started successfully");
            })
            .catch(error => {
              console.error("Audio playback failed:", error);
              toast({
                title: "Click to Play",
                description: "Click anywhere to start the background music",
                duration: 5000,
              });
            });
        }
      }
    };

    // Show initial toast to inform user
    toast({
      title: "Background Music",
      description: "Click anywhere to enable background music",
      duration: 5000,
    });

    document.addEventListener('click', handleClick, { once: true });
    
    return () => {
      document.removeEventListener('click', handleClick);
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
                title: "Click to Play",
                description: "Click anywhere to start the background music",
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