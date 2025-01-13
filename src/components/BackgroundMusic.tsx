import { useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "./ui/button";

export function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(true);
  
  useEffect(() => {
    const audio = new Audio("/lovable-uploads/anime-theme.mp3"); // You'll need to add your music file
    audio.loop = true;
    
    if (isPlaying) {
      audio.play().catch(error => console.log("Audio autoplay failed:", error));
    }
    
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [isPlaying]);

  return (
    <Button
      variant="ghost"
      size="icon"
      className="fixed bottom-4 right-4 bg-black/50 hover:bg-black/70 backdrop-blur-sm z-50"
      onClick={() => setIsPlaying(!isPlaying)}
    >
      {isPlaying ? (
        <Volume2 className="h-6 w-6 text-red-500" />
      ) : (
        <VolumeX className="h-6 w-6 text-red-500" />
      )}
    </Button>
  );
}