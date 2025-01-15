import { useState, useEffect, useRef } from "react";
import { Play, Pause } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "./ui/use-toast";

interface BackgroundMusicProps {
  songUrl?: string;
}

export function BackgroundMusic({ songUrl }: BackgroundMusicProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  useEffect(() => {
    if (!songUrl) return;
    
    const audio = new Audio(songUrl);
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    audio.addEventListener('canplaythrough', () => {
      audio.play()
        .then(() => {
          setIsPlaying(true);
          toast({
            title: "Now Playing",
            description: "Music started",
            duration: 2000,
          });
        })
        .catch((error) => {
          console.error("Autoplay failed:", error);
          toast({
            title: "Music Ready",
            description: "Click play to start the music",
            duration: 3000,
          });
        });
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [songUrl]);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    try {
      if (!isPlaying) {
        await audioRef.current.play();
        setIsPlaying(true);
        toast({
          title: "Now Playing",
          description: "Music started",
          duration: 2000,
        });
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
        toast({
          title: "Paused",
          description: "Music playback paused",
          duration: 2000,
        });
      }
    } catch (error) {
      console.error("Playback error:", error);
      toast({
        title: "Playback Error",
        description: "Please click the play button to start the music",
        duration: 3000,
      });
    }
  };

  if (!songUrl) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        variant="ghost"
        size="icon"
        className="bg-black/50 hover:bg-black/70 backdrop-blur-sm"
        onClick={togglePlay}
      >
        {isPlaying ? (
          <Pause className="h-6 w-6 text-red-500" />
        ) : (
          <Play className="h-6 w-6 text-red-500" />
        )}
      </Button>
    </div>
  );
}