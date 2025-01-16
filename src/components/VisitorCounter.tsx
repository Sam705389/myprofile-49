import { useState, useEffect } from "react";
import { Users } from "lucide-react";

const VisitorCounter = () => {
  const [liveCount, setLiveCount] = useState(0);

  useEffect(() => {
    // Initial count between 2-5 members
    const initialCount = Math.floor(Math.random() * 4) + 2;
    setLiveCount(initialCount);

    // Update live count every 30 seconds
    const interval = setInterval(() => {
      // Randomly add or remove 1 member, keeping count between 1-5
      setLiveCount((prevCount) => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const newCount = prevCount + change;
        return Math.min(Math.max(newCount, 1), 5); // Keep between 1 and 5
      });
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50 bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-lg px-4 py-2 flex items-center gap-2">
      <Users className="h-5 w-5 text-red-500" />
      <span className="text-red-400 font-medium">
        {liveCount} {liveCount === 1 ? 'member' : 'members'} online
      </span>
    </div>
  );
};

export default VisitorCounter;
