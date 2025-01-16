import { useEffect, useState } from 'react';
import { Users } from 'lucide-react';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Simulate a random number of visitors between 10 and 100
    const randomVisitors = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
    setVisitorCount(randomVisitors);

    // Update the count every 30 seconds
    const interval = setInterval(() => {
      const change = Math.floor(Math.random() * 5) - 2; // Random change between -2 and +2
      setVisitorCount(prev => Math.max(10, prev + change));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-black/60 backdrop-blur-lg px-4 py-2 rounded-full border border-red-500/30 hover:border-red-500/60 transition-all duration-300">
      <Users className="w-4 h-4 text-red-500" />
      <span className="text-sm font-medium text-white">
        {visitorCount} online
      </span>
    </div>
  );
};

export default VisitorCounter;