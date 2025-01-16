import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Index = () => {
  const [appId, setAppId] = useState("");
  const [logs, setLogs] = useState<string[]>([
    "11/4/2024, 8:52:58 PM [ Information ] Finding APP ID: 2429540",
    "11/4/2024, 8:53:01 PM [ Result ] APP ID 2429540 is not yet available.",
    "11/4/2024, 8:53:20 PM [ Information ] Finding APP ID: 2668510",
    "11/4/2024, 8:53:23 PM [ Result ] APP ID 2668510 is not yet available.",
    "11/4/2024, 8:54:45 PM [ Information ] Finding APP ID: 812140",
    "11/4/2024, 8:54:49 PM [ Result ] Successfully generated APP ID: 812140",
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const timestamp = new Date().toLocaleString();
    setLogs(prev => [...prev, `${timestamp} [ Information ] Processing APP ID: ${appId}`]);
    // Simulate processing
    setTimeout(() => {
      setLogs(prev => [...prev, `${timestamp} [ Result ] Successfully processed APP ID: ${appId}`]);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-black via-gray-900 to-black p-4">
      {/* Title Section */}
      <div className="w-full max-w-3xl text-center mb-8 mt-16">
        <h1 className="text-4xl font-bold text-white mb-2">Manifest & Lua Generator</h1>
        <p className="text-gray-400 text-sm">
          bug inquiries? question? jangan lupa baca informasi dibawah.
        </p>
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-3xl flex gap-2 mb-4">
        <Input
          type="text"
          placeholder="Enter your APP ID / URL"
          value={appId}
          onChange={(e) => setAppId(e.target.value)}
          className="flex-1 bg-gray-800/50 border-gray-700 text-white"
        />
        <Button type="submit" className="bg-gray-700 hover:bg-gray-600">
          Submit
        </Button>
      </form>

      {/* Logs Section */}
      <div className="w-full max-w-3xl bg-black/50 border border-gray-800 rounded-lg p-4 h-[400px] overflow-y-auto">
        {logs.map((log, index) => (
          <div
            key={index}
            className="text-sm font-mono text-gray-300 mb-1 hover:bg-gray-800/30 p-1 rounded"
          >
            {log}
          </div>
        ))}
      </div>

      {/* Footer Link */}
      <div className="mt-8 text-center text-gray-400">
        Need DLC? Achievement? Go check out{" "}
        <a
          href="https://vteam.com"
          className="text-blue-400 hover:text-blue-300 hover:underline"
        >
          VTeam Manifest App / Modded Steam
        </a>
      </div>
    </div>
  );
};

export default Index;