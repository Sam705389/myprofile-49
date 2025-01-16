import { useState, useEffect, useRef } from "react";
import { Play, Pause, Music2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";

export function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [songUrl, setSongUrl] = useState("");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const togglePlay = async () => {
    if (!audioRef.current || !songUrl) {
      toast.error("Please enter a valid song URL first");
      return;
    }

    try {
      if (!isPlaying) {
        await audioRef.current.play();
        setIsPlaying(true);
        toast.success("Now Playing");
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
        toast("Paused", {
          description: "Music playback paused"
        });
      }
    } catch (error) {
      console.error("Playback error:", error);
      toast.error("Unable to play this audio. Please check the URL and try again.");
    }
  };

  useEffect(() => {
    if (songUrl) {
      if (audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
      const audio = new Audio(songUrl);
      audio.loop = true;
      audio.volume = 0.5;
      audioRef.current = audio;

      // Add error handling for invalid URLs
      audio.onerror = () => {
        toast.error("Invalid audio URL. Please check the link and try again.");
        setSongUrl("");
      };
    }
  }, [songUrl]);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2">
      {showInput && (
        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-2 flex gap-2">
          <Input
            type="text"
            placeholder="Enter song URL..."
            value={songUrl}
            onChange={(e) => setSongUrl(e.target.value)}
            className="w-64 text-sm bg-transparent border-white/20"
          />
        </div>
      )}
      <Button
        variant="ghost"
        size="icon"
        className="bg-black/50 hover:bg-black/70 backdrop-blur-sm"
        onClick={() => setShowInput(!showInput)}
      >
        <Music2 className="h-6 w-6 text-red-500" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="bg-black/50 hover:bg-black/70 backdrop-blur-sm"
        onClick={togglePlay}
        disabled={!songUrl}
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