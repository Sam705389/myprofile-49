import { useState, useEffect, useRef } from "react";
import { Play, Pause, SkipForward } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "./ui/use-toast";

const SONGS = [
  {
    url: "https://p320.djpunjab.is/data/48/56690/306239/DONALI%20-%20Harkirat%20Sangha.mp3",
    name: "Donali - Harkirat Sangha"
  },
  {
    url: "/lovable-uploads/background-music.mp3",
    name: "Song 1"
  },
  {
    url: "/lovable-uploads/background-music-2.mp3",
    name: "Song 2"
  }
];

export function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const switchSong = async () => {
    const nextIndex = (currentSongIndex + 1) % SONGS.length;
    setCurrentSongIndex(nextIndex);
    
    if (audioRef.current) {
      audioRef.current.src = SONGS[nextIndex].url;
      if (isPlaying) {
        try {
          await audioRef.current.play();
          toast({
            title: "Now Playing",
            description: SONGS[nextIndex].name,
            duration: 2000,
          });
        } catch (error) {
          console.error("Failed to play next song:", error);
          toast({
            title: "Playback Error",
            description: "Unable to play the next song. Please try again.",
            duration: 3000,
          });
        }
      }
    }
  };

  useEffect(() => {
    const audio = new Audio(SONGS[currentSongIndex].url);
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    // Attempt to autoplay
    const attemptAutoplay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        toast({
          title: "Now Playing",
          description: SONGS[currentSongIndex].name,
          duration: 2000,
        });
      } catch (error) {
        console.error("Autoplay failed:", error);
        toast({
          title: "Music Ready",
          description: "Click play to start the music",
          duration: 3000,
        });
      }
    };

    attemptAutoplay();

    // Clean up function
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [currentSongIndex]);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    try {
      if (!isPlaying) {
        await audioRef.current.play();
        setIsPlaying(true);
        toast({
          title: "Now Playing",
          description: SONGS[currentSongIndex].name,
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

  return (
    <div className="fixed bottom-4 right-4 flex gap-2 z-50">
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
      <Button
        variant="ghost"
        size="icon"
        className="bg-black/50 hover:bg-black/70 backdrop-blur-sm"
        onClick={switchSong}
      >
        <SkipForward className="h-6 w-6 text-red-500" />
      </Button>
    </div>
  );
}