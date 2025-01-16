import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import VisitorCounter from "@/components/VisitorCounter";
import { MemberList } from "@/components/MemberList";
import { Search, GamepadIcon, AlertOctagon } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [appId, setAppId] = useState("");
  const [logs, setLogs] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!appId.trim()) {
      toast.error("PLEASE put App ID so I can find page Pookie =[ ", {
        icon: <AlertOctagon className="text-red-500" />,
      });
      return;
    }

    setIsSearching(true);
    const timestamp = new Date().toLocaleString();
    toast.promise(
      new Promise((resolve) => {
        setTimeout(resolve, 2000);
      }),
      {
        loading: 'Finding the game...',
        success: 'Game found!',
        error: 'Error finding game',
      }
    );

    setLogs(prev => [`${timestamp} [ Information ] Finding APP ID: ${appId}`, ...prev]);
    
    setTimeout(() => {
      setIsSearching(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-red-950 to-black p-4 overflow-hidden">
      <VisitorCounter />
      <div 
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `url('/lovable-uploads/11a8b27f-ceb0-48bf-b56f-5c3090d7ca0c.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(4px)',
          animation: 'pulse 8s ease-in-out infinite'
        }}
      />
      
      <MemberList />
      
      <div className="glass-card p-8 max-w-2xl w-full mx-auto space-y-8 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/70 rounded-xl backdrop-blur-sm" />
        
        <div className="relative space-y-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="relative">
              <h1 
                className="text-5xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-400 to-red-500 animate-text-shimmer"
                style={{
                  textShadow: '0 0 30px rgba(234, 56, 76, 0.3)',
                  letterSpacing: '0.05em'
                }}
              >
                SamVibes Manifest Gen
              </h1>
              <div className="absolute -inset-1 bg-red-500/20 blur-xl -z-10 rounded-full" />
            </div>
            
            <p className="text-sm text-red-300/90 font-medium px-6 py-3 rounded-lg bg-black/30 border border-red-500/10 tracking-wide shadow-lg shadow-red-500/5">
              If There Are Bugs Please Report Us On Our Discord
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="text"
                placeholder="Enter your APP ID / URL"
                value={appId}
                onChange={(e) => setAppId(e.target.value)}
                className="flex-1 h-12 bg-black/40 border-red-500/30 focus:border-red-500/50 rounded-xl text-base placeholder:text-gray-400 transform hover:translate-y-[-2px] transition-all duration-300 focus:ring-2 focus:ring-red-500/30"
                disabled={isSearching}
              />
              <Button 
                type="submit"
                className="h-12 px-8 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-medium rounded-xl transform hover:translate-y-[-2px] hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 border border-red-500/30 flex items-center gap-2"
                disabled={isSearching}
              >
                <Search className={`w-5 h-5 ${isSearching ? 'animate-spin' : ''}`} />
                Submit
              </Button>
            </div>
          </form>

          <div className="relative mt-6">
            <div className="bg-black/40 rounded-xl p-5 h-[200px] overflow-y-auto custom-scrollbar border border-red-500/20 shadow-inner shadow-red-500/5">
              <pre className="text-left font-mono text-sm text-green-400">
                {logs.map((log, index) => (
                  <div key={index} className="py-1.5 px-3 rounded hover:bg-white/5 transition-all duration-200">
                    {log}
                  </div>
                ))}
              </pre>
            </div>
          </div>

          <div className="text-center text-sm bg-black/20 p-4 rounded-xl border border-red-500/10 flex flex-col items-center justify-center gap-4">
            <Button 
              className="h-10 px-6 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-medium rounded-xl transform hover:translate-y-[-2px] hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 border border-red-500/30 flex items-center gap-2"
            >
              <GamepadIcon className="w-5 h-5" />
              Game List
            </Button>
            <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-lg border border-red-500/20">
              <span className="text-red-300/90 text-sm font-medium tracking-wide">
                This Web Was Made By
              </span>
              <a 
                href="https://samvibes.shop/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300 font-bold transform hover:scale-105 transition-transform duration-300 text-base relative"
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