import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import VisitorCounter from "@/components/VisitorCounter";
import { MemberList } from "@/components/MemberList";
import { Search, GamepadIcon } from "lucide-react";
import { toast } from "sonner";
import { Avatar } from "@/components/Avatar";
import { BackgroundMusic } from "@/components/BackgroundMusic";
import { DisclaimerDialog } from "@/components/DisclaimerDialog";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Index = () => {
  const [appId, setAppId] = useState("");
  const [logs, setLogs] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!appId.trim()) return;

    setIsSearching(true);
    const timestamp = new Date().toLocaleString();
    
    setLogs(prev => [`${timestamp} [ Information ] Finding APP ID: ${appId}`, ...prev]);

    setTimeout(() => {
      if (appId.trim()) {
        toast.success("Download should have started!", {
          duration: 2500,
        });
        window.location.href = `https://cysaw.top/uploads/${appId}.zip`;
      } else {
        toast.error("Game not available! Please check the game list.", {
          duration: 2500,
        });
      }
      
      setAppId("");
      setIsSearching(false);
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-red-950 to-black p-4 overflow-hidden">
      <DisclaimerDialog />
      <VisitorCounter />
      <BackgroundMusic />
      
      <div className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `url('/lovable-uploads/11a8b27f-ceb0-48bf-b56f-5c3090d7ca0c.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(4px)',
          animation: 'pulse 8s ease-in-out infinite'
        }}
      />
      
      <div className="fixed left-4 top-4 sm:left-8 sm:top-8">
        <Avatar 
          src="/lovable-uploads/8a303788-b4cf-48d3-a2fc-0f03bfef1b2b.png" 
          alt="Profile Avatar"
          className="w-16 h-16 sm:w-32 sm:h-32"
        />
      </div>

      <MemberList />
      
      <div className="glass-card p-4 sm:p-8 max-w-2xl w-full mx-auto space-y-6 sm:space-y-8 relative z-10 mt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/70 rounded-xl backdrop-blur-sm" />
        
        <div className="relative space-y-4 sm:space-y-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="relative">
              <h1 
                className="text-3xl sm:text-5xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-400 to-red-500 animate-text-shimmer"
                style={{
                  textShadow: '0 0 30px rgba(234, 56, 76, 0.3)',
                  letterSpacing: '0.05em'
                }}
              >
                SamVibes Manifest Gen
              </h1>
              <div className="absolute -inset-1 bg-red-500/20 blur-xl -z-10 rounded-full" />
            </div>
            
            <p className="text-xs sm:text-sm text-red-300/90 font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-black/30 border border-red-500/10 tracking-wide shadow-lg shadow-red-500/5">
              If There Are Bugs Please Report Us On Our Discord
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="text"
                placeholder="Enter your APP ID / URL"
                value={appId}
                onChange={(e) => setAppId(e.target.value)}
                className="flex-1 h-10 sm:h-12 bg-black/40 border-red-500/30 focus:border-red-500/50 rounded-xl text-sm sm:text-base placeholder:text-gray-400 transform hover:translate-y-[-2px] transition-all duration-300 focus:ring-2 focus:ring-red-500/30"
                disabled={isSearching}
              />
              <Button 
                type="submit"
                className="h-10 sm:h-12 px-4 sm:px-8 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-medium rounded-xl transform hover:translate-y-[-2px] hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 border border-red-500/30 flex items-center gap-2 text-sm sm:text-base"
                disabled={isSearching}
              >
                <Search className={`w-4 h-4 sm:w-5 sm:h-5 ${isSearching ? 'animate-spin' : ''}`} />
                Submit
              </Button>
            </div>
          </form>

          <div className="relative mt-4 sm:mt-6">
            <div className="bg-black/40 rounded-xl p-3 sm:p-5 h-[150px] sm:h-[200px] overflow-y-auto custom-scrollbar border border-red-500/20 shadow-inner shadow-red-500/5">
              <pre className="text-left font-mono text-xs sm:text-sm text-green-400">
                {logs.map((log, index) => (
                  <div key={index} className="py-1 sm:py-1.5 px-2 sm:px-3 rounded hover:bg-white/5 transition-all duration-200">
                    {log}
                  </div>
                ))}
              </pre>
            </div>
          </div>

          <div className="text-center text-xs sm:text-sm bg-black/20 p-3 sm:p-4 rounded-xl border border-red-500/10 flex flex-col items-center justify-center gap-3 sm:gap-4">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button 
                  className="h-9 sm:h-10 px-4 sm:px-6 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-medium rounded-xl transform hover:translate-y-[-2px] hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 border border-red-500/30 flex items-center gap-2 text-sm"
                >
                  <GamepadIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  Game List
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-black/90 border border-red-500/30">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-xl text-red-500">Coming Soon!</AlertDialogTitle>
                  <p className="text-sm text-white/80">
                    The game list feature is currently under development. Check back soon to see all available games!
                  </p>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction className="bg-red-500 hover:bg-red-600 text-white">
                    Got it!
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <div className="flex items-center gap-2 bg-black/30 px-3 sm:px-4 py-2 rounded-lg border border-red-500/20">
              <span className="text-red-300/90 text-xs sm:text-sm font-medium tracking-wide">
                This Web Was Made By
              </span>
              <a 
                href="https://samvibes.shop/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300 font-bold transform hover:scale-105 transition-transform duration-300 text-sm sm:text-base relative"
                style={{
                  textShadow: '0 0 15px rgba(234, 56, 76, 0.8)',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  letterSpacing: '0.05em'
                }}
              >
                Sam
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;