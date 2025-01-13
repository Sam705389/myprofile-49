import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "./ui/use-toast";

export function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio("/lovable-uploads/background-music.mp3");
    audioRef.current.loop = true;
    
    // Add click event listener to document for initial playback
    const handleClick = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.currentTime = 49;
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
                title: "Audio Playback Error",
                description: "There was an issue playing the background music. Please try again.",
                duration: 3000,
              });
            });
        }
      }
    };

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
        audioRef.current.currentTime = 49;
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