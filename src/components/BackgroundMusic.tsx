import { useState, useEffect, useRef } from "react";
import { Play, Pause, List } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";

const SONGS = [
  {
    title: "Wavy - Karan Aujla",
    url: "https://s320.djpunjab.is/data/48/56545/306006/Wavy%20-%20Karan%20Aujla.mp3"
  },
  {
    title: "No Love - Shubh",
    url: "https://s320.djpunjab.is/data/48/50470/297756/No%20Love%20-%20Shubh.mp3"
  },
  {
    title: "295 - Sidhu Moose Wala",
    url: "https://s320.djpunjab.is/data/48/50470/297757/295%20-%20Sidhu%20Moose%20Wala.mp3"
  },
  {
    title: "G.O.A.T. - Sidhu Moose Wala",
    url: "https://cdnsongs.com/music/data/Single_Track/202007/G_O_A_T/128/G_O_A_T_1.mp3"
  },
  {
    title: "MATUSHKA ULTRAFUNK (Slowed + Reverb) Radio",
    url: "https://djpunjab.app/upload/mp3/25241-1737018253.mp3"
  }
];

export function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showSongList, setShowSongList] = useState(false);
  const [songUrl, setSongUrl] = useState("");
  const [currentSong, setCurrentSong] = useState("");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleSongSelect = (song: typeof SONGS[0]) => {
    setSongUrl(song.url);
    setCurrentSong(song.title);
    setShowSongList(false);
    console.log("Selected song:", song.title);
  };
  
  const togglePlay = async () => {
    if (!audioRef.current || !songUrl) {
      toast.error("Please select a song first", {
        duration: 3000
      });
      return;
    }

    try {
      if (!isPlaying) {
        await audioRef.current.play();
        setIsPlaying(true);
        toast.success(currentSong ? `Now Playing: ${currentSong}` : "Now Playing", {
          duration: 2500
        });
        console.log("Started playing:", currentSong || songUrl);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
        toast("Paused", {
          description: "Music playback paused",
          duration: 2000
        });
        console.log("Paused playback");
      }
    } catch (error) {
      console.error("Playback error:", error);
      toast.error("Unable to play this audio. Please try another song.", {
        duration: 3000
      });
    }
  };

  useEffect(() => {
    if (songUrl) {
      console.log("Setting up new audio source:", songUrl);
      if (audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
      const audio = new Audio(songUrl);
      audio.loop = true;
      audio.volume = 0.5;
      audioRef.current = audio;

      audio.onerror = (e) => {
        console.error("Audio error:", e);
        toast.error("Unable to play this song. Please try another one.", {
          duration: 3000
        });
        setSongUrl("");
        setCurrentSong("");
      };
    }
  }, [songUrl]);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2">
      {showSongList && (
        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-2 absolute bottom-full right-0 mb-2 w-64">
          <div className="space-y-2">
            {SONGS.map((song, index) => (
              <button
                key={index}
                onClick={() => handleSongSelect(song)}
                className="w-full text-left px-3 py-2 text-sm text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                {song.title}
              </button>
            ))}
          </div>
        </div>
      )}
      <Button
        variant="ghost"
        size="icon"
        className="bg-black/50 hover:bg-black/70 backdrop-blur-sm"
        onClick={() => setShowSongList(!showSongList)}
      >
        <List className="h-6 w-6 text-red-500" />
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