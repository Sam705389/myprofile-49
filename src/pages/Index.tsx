import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import VisitorCounter from "@/components/VisitorCounter";
import { MemberList } from "@/components/MemberList";

const Index = () => {
  const [appId, setAppId] = useState("");
  const [logs, setLogs] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const timestamp = new Date().toLocaleString();
    setLogs(prev => [`${timestamp} [ Information ] Finding APP ID: ${appId}`, ...prev]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-red-950 to-black p-4 overflow-hidden">
      <VisitorCounter />
      <div className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('/lovable-uploads/11a8b27f-ceb0-48bf-b56f-5c3090d7ca0c.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(4px)',
          animation: 'pulse 8s ease-in-out infinite'
        }}
      />
      <div className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(234, 56, 76, 0.1) 0%, rgba(0, 0, 0, 0.8) 70%)',
          animation: 'pulse 4s ease-in-out infinite'
        }}
      />
      
      <MemberList />
      
      <div className="glass-card p-6 sm:p-8 max-w-2xl w-full mx-auto space-y-6 sm:space-y-8 relative transform hover:scale-[1.02] transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-red-900/10 rounded-xl pointer-events-none"></div>
        <div className="absolute inset-0 backdrop-blur-sm bg-black/40 rounded-xl border border-red-500/20 shadow-[0_0_15px_rgba(234,56,76,0.2)] pointer-events-none"></div>
        
        <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6 relative">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-red-700 transform hover:scale-105 transition-transform duration-300"
            style={{
              textShadow: '0 0 20px rgba(234, 56, 76, 0.5), 0 0 40px rgba(234, 56, 76, 0.3)'
            }}>
            Manifest & Lua Generator
          </h1>
          
          <p className="text-sm text-red-300/90">
            bug inquiries? question? jangan lupa baca informasi dibawah.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 relative">
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Enter your APP ID / URL"
              value={appId}
              onChange={(e) => setAppId(e.target.value)}
              className="bg-black/50 border-red-500/30 focus:border-red-500/60 transform hover:translate-y-[-2px] transition-all duration-300"
            />
            <Button 
              type="submit"
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white transform hover:translate-y-[-2px] hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300"
            >
              Submit
            </Button>
          </div>
        </form>

        <div className="bg-black/50 rounded-lg p-4 h-[200px] overflow-y-auto custom-scrollbar relative transform hover:translate-y-[-2px] transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent pointer-events-none rounded-lg"></div>
          <pre className="text-left font-mono text-sm text-green-400">
            {logs.map((log, index) => (
              <div key={index} className="hover:text-green-300 transition-colors duration-200">{log}</div>
            ))}
          </pre>
        </div>

        <div className="text-center text-sm text-red-300/90">
          Need DLC? Achievement? Go check out{" "}
          <a 
            href="https://vteam.store" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-red-400 hover:text-red-300 underline transform hover:scale-105 transition-transform duration-300"
          >
            VTeam Manifest App / Modded Steam
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;