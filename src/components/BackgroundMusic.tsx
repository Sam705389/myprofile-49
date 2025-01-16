import { useState, useEffect, useRef } from "react";
import { Play, Pause, Music2, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";

// Predefined list of songs (you can add more)
const SONGS = [
  {
    title: "Sample Song 1",
    artist: "Artist 1",
    url: "https://example.com/song1.mp3"
  },
  {
    title: "Sample Song 2",
    artist: "Artist 2",
    url: "https://example.com/song2.mp3"
  },
  // Add more sample songs here
];

export function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSongs, setFilteredSongs] = useState(SONGS);
  const [selectedSong, setSelectedSong] = useState<typeof SONGS[0] | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const togglePlay = async () => {
    if (!audioRef.current || !selectedSong) {
      toast.error("Please select a song first");
      return;
    }

    try {
      if (!isPlaying) {
        await audioRef.current.play();
        setIsPlaying(true);
        toast.success(`Now Playing: ${selectedSong.title} - ${selectedSong.artist}`);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
        toast("Paused", {
          description: "Music playback paused"
        });
      }
    } catch (error) {
      console.error("Playback error:", error);
      toast.error("Unable to play this audio. Please try another song.");
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = SONGS.filter(song => 
      song.title.toLowerCase().includes(query.toLowerCase()) ||
      song.artist.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredSongs(filtered);
  };

  const selectSong = (song: typeof SONGS[0]) => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
    setSelectedSong(song);
    setShowSearch(false);
    toast.success(`Selected: ${song.title} - ${song.artist}`);
  };

  useEffect(() => {
    if (selectedSong) {
      if (audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
      const audio = new Audio(selectedSong.url);
      audio.loop = true;
      audio.volume = 0.5;
      audioRef.current = audio;

      audio.onerror = () => {
        toast.error("Error loading audio. Please try another song.");
        setSelectedSong(null);
      };
    }
  }, [selectedSong]);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2">
      {showSearch && (
        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-2 flex flex-col gap-2">
          <Input
            type="text"
            placeholder="Search songs..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-64 text-sm bg-transparent border-white/20"
          />
          {searchQuery && (
            <div className="max-h-40 overflow-y-auto bg-black/70 rounded-lg">
              {filteredSongs.map((song, index) => (
                <button
                  key={index}
                  onClick={() => selectSong(song)}
                  className="w-full px-3 py-2 text-left hover:bg-white/10 text-sm text-white transition-colors"
                >
                  {song.title} - {song.artist}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
      <Button
        variant="ghost"
        size="icon"
        className="bg-black/50 hover:bg-black/70 backdrop-blur-sm"
        onClick={() => setShowSearch(!showSearch)}
      >
        {showSearch ? (
          <Search className="h-6 w-6 text-red-500" />
        ) : (
          <Music2 className="h-6 w-6 text-red-500" />
        )}
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="bg-black/50 hover:bg-black/70 backdrop-blur-sm"
        onClick={togglePlay}
        disabled={!selectedSong}
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