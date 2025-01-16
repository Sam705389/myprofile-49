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
      
      <div className="glass-card p-6 sm:p-8 max-w-2xl w-full mx-auto space-y-6 sm:space-y-8 relative">
        <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-red-700"
            style={{
              textShadow: '0 0 20px rgba(234, 56, 76, 0.5), 0 0 40px rgba(234, 56, 76, 0.3)'
            }}>
            Manifest & Lua Generator
          </h1>
          
          <p className="text-sm text-red-300/90">
            bug inquiries? question? jangan lupa baca informasi dibawah.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Enter your APP ID / URL"
              value={appId}
              onChange={(e) => setAppId(e.target.value)}
              className="bg-black/50 border-red-500/30 focus:border-red-500/60"
            />
            <Button 
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white"
            >
              Submit
            </Button>
          </div>
        </form>

        <div className="bg-black/50 rounded-lg p-4 h-[200px] overflow-y-auto custom-scrollbar">
          <pre className="text-left font-mono text-sm text-green-400">
            {logs.map((log, index) => (
              <div key={index}>{log}</div>
            ))}
          </pre>
        </div>

        <div className="text-center text-sm text-red-300/90">
          Need DLC? Achievement? Go check out{" "}
          <a 
            href="https://vteam.store" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-red-400 hover:text-red-300 underline"
          >
            VTeam Manifest App / Modded Steam
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;