import { Avatar } from "@/components/Avatar";
import { SocialLinks } from "@/components/SocialLinks";
import { BackgroundMusic } from "@/components/BackgroundMusic";
import { Crown, Code, Palette, Gamepad } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-red-950 to-black p-4 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('/lovable-uploads/11a8b27f-ceb0-48bf-b56f-5c3090d7ca0c.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(4px)',
          animation: 'pulse 8s ease-in-out infinite'
        }}
      />
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(0, 0, 0, 0.8) 70%)',
          animation: 'pulse 4s ease-in-out infinite'
        }}
      />
      <BackgroundMusic />
      <div className="glass-card p-8 max-w-2xl w-full mx-auto space-y-8 relative">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="relative">
            <Avatar
              src="/lovable-uploads/29ae0bf3-ef96-4b9c-a983-ff10498c750a.png"
              alt="Sam"
              className="transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="flex items-center justify-center gap-3">
            <Crown 
              className="w-8 h-8 text-yellow-500 animate-pulse"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(234, 207, 56, 0.5))'
              }}
            />
            <h1 
              className="text-4xl font-bold text-white tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-red-700"
              style={{
                textShadow: '0 0 20px rgba(234, 56, 76, 0.5), 0 0 40px rgba(234, 56, 76, 0.3)'
              }}
            >
              Sam
            </h1>
            <Crown 
              className="w-8 h-8 text-yellow-500 animate-pulse"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(234, 207, 56, 0.5))'
              }}
            />
          </div>
          <p className="text-lg text-red-300/80 animate-fade-in font-semibold">
            UI/UX Designer & Full-Stack Developer
          </p>
        </div>

        <div className="space-y-6 animate-fade-in">
          <div className="flex flex-wrap justify-center gap-4 text-white/80">
            <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300 cursor-pointer bg-black/30 p-2 rounded-lg backdrop-blur-sm border border-red-500/20 hover:border-red-500/40">
              <Palette className="w-5 h-5 text-red-500" />
              <span>UI/UX Design</span>
            </div>
            <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300 cursor-pointer bg-black/30 p-2 rounded-lg backdrop-blur-sm border border-red-500/20 hover:border-red-500/40">
              <Code className="w-5 h-5 text-red-500" />
              <span>Web & App Dev</span>
            </div>
            <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300 cursor-pointer bg-black/30 p-2 rounded-lg backdrop-blur-sm border border-red-500/20 hover:border-red-500/40">
              <Gamepad className="w-5 h-5 text-red-500" />
              <span>Game Seller</span>
            </div>
          </div>
          
          <p className="text-white/80 leading-relaxed bg-black/30 p-6 rounded-lg backdrop-blur-sm border border-red-500/20 hover:border-red-500/40 transition-colors duration-300">
            I'm a passionate developer and designer who brings creative visions to life. 
            With expertise in UI/UX design, web and app development, I create seamless 
            digital experiences that users love. I also have a keen interest in the gaming 
            industry, where I work as a game seller.
          </p>
        </div>

        <div className="flex justify-center animate-fade-in">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

export default Index;