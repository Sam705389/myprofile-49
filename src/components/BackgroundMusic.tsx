import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "./ui/use-toast";

export function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  useEffect(() => {
    audioRef.current = new Audio("https://stream.mux.com/VZtzUzGRv01JXM6bZ3KxpVoXCZg4q01Pj5Eim2LaLuJE8.m4a");
    audioRef.current.loop = true;
    
    if (audioRef.current) {
      audioRef.current.currentTime = 49; // Start from 49 seconds
      
      if (isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.log("Audio autoplay failed:", error);
            toast({
              title: "Audio Playback",
              description: "Click anywhere to enable background music",
              duration: 3000,
            });
          });
        }
      }
    }
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (audioRef.current) {
      if (!isPlaying) {
        audioRef.current.currentTime = 49;
        audioRef.current.play();
      } else {
        audioRef.current.pause();
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