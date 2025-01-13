import { Avatar } from "@/components/Avatar";
import { SocialLinks } from "@/components/SocialLinks";
import { Sword } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-red-950 to-black p-4 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, transparent 0%, #000 70%)',
          backgroundSize: '100px 100px'
        }}
      />
      <div className="glass-card p-8 max-w-2xl w-full mx-auto space-y-8 relative">
        <div className="flex flex-col items-center text-center space-y-4">
          <Avatar
            src="https://images.unsplash.com/photo-1494891848038-7bd202a2afeb"
            alt="Your Name"
          />
          <div className="flex items-center gap-2">
            <Sword className="w-6 h-6 text-red-500" />
            <h1 className="text-4xl font-bold text-white mt-4 tracking-wider" style={{
              textShadow: '0 0 20px rgba(234, 56, 76, 0.5)'
            }}>
              Your Name
            </h1>
            <Sword className="w-6 h-6 text-red-500 transform scale-x-[-1]" />
          </div>
          <p className="text-lg text-red-300/80">
            Frontend Developer & UI/UX Enthusiast
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-white/80 leading-relaxed">
            I'm a passionate developer who loves creating beautiful and functional web experiences. 
            With expertise in React, TypeScript, and modern web technologies, I bring ideas to life 
            through clean code and intuitive design.
          </p>
        </div>

        <div className="flex justify-center">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

export default Index;