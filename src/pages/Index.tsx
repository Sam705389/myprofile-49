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
      
      <div className="glass-card p-8 max-w-2xl w-full mx-auto space-y-8 relative transform hover:scale-[1.01] transition-all duration-500">
        {/* Enhanced layered background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-black/40 to-red-900/5 rounded-xl"></div>
        <div className="absolute inset-0 backdrop-blur-xl bg-black/50 rounded-xl border border-red-500/10 shadow-[0_8px_32px_rgba(234,56,76,0.15)] pointer-events-none"></div>
        
        <div className="flex flex-col items-center text-center space-y-6 relative">
          <h1 className="text-4xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-400 to-red-500 animate-text-shimmer transform hover:scale-105 transition-transform duration-300"
            style={{
              textShadow: '0 0 30px rgba(234, 56, 76, 0.3), 0 0 50px rgba(234, 56, 76, 0.2)'
            }}>
            Manifest & Lua Generator
          </h1>
          
          <p className="text-sm text-red-300/80 font-medium">
            bug inquiries? question? jangan lupa baca informasi dibawah.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 relative">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="text"
              placeholder="Enter your APP ID / URL"
              value={appId}
              onChange={(e) => setAppId(e.target.value)}
              className="flex-1 h-12 bg-black/40 border-red-500/20 focus:border-red-500/40 rounded-xl text-base placeholder:text-gray-400 transform hover:translate-y-[-2px] transition-all duration-300 shadow-sm shadow-red-500/10"
            />
            <Button 
              type="submit"
              className="h-12 px-8 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium rounded-xl transform hover:translate-y-[-2px] hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300"
            >
              Submit
            </Button>
          </div>
        </form>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent rounded-xl pointer-events-none"></div>
          <div className="bg-black/40 rounded-xl p-5 h-[200px] overflow-y-auto custom-scrollbar transform hover:translate-y-[-2px] transition-all duration-300 border border-red-500/10">
            <pre className="text-left font-mono text-sm text-green-400/90">
              {logs.map((log, index) => (
                <div key={index} className="py-1 px-2 rounded hover:bg-white/5 hover:text-green-300 transition-all duration-200">
                  {log}
                </div>
              ))}
            </pre>
          </div>
        </div>

        <div className="text-center text-sm text-red-300/80">
          Need DLC? Achievement? Go check out{" "}
          <a 
            href="https://vteam.store" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-red-400 hover:text-red-300 underline transform hover:scale-105 transition-transform duration-300 font-medium"
          >
            VTeam Manifest App / Modded Steam
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;