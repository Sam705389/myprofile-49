import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, SkipForward } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "./ui/use-toast";

const SONGS = [
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
        }
      }
    }
  };

  useEffect(() => {
    audioRef.current = new Audio(SONGS[currentSongIndex].url);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

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
    <div className="fixed bottom-4 right-4 flex gap-2 z-50">
      <Button
        variant="ghost"
        size="icon"
        className="bg-black/50 hover:bg-black/70 backdrop-blur-sm animate-pulse"
        onClick={togglePlay}
      >
        {isPlaying ? (
          <Volume2 className="h-6 w-6 text-red-500" />
        ) : (
          <VolumeX className="h-6 w-6 text-red-500" />
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