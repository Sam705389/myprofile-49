import { Avatar } from "@/components/Avatar";
import { SocialLinks } from "@/components/SocialLinks";
import { BackgroundMusic } from "@/components/BackgroundMusic";
import { MemberList } from "@/components/MemberList";
import { Crown, Code, Palette, Gamepad } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-red-950 to-black p-4 overflow-hidden">
      {/* Enhanced background with multiple layers */}
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
          background: 'radial-gradient(circle at 50% 50%, rgba(234, 56, 76, 0.1) 0%, rgba(0, 0, 0, 0.8) 70%)',
          animation: 'pulse 4s ease-in-out infinite'
        }}
      />
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(45deg, rgba(234, 56, 76, 0.05) 25%, transparent 25%, transparent 75%, rgba(234, 56, 76, 0.05) 75%, rgba(234, 56, 76, 0.05)), linear-gradient(45deg, rgba(234, 56, 76, 0.05) 25%, transparent 25%, transparent 75%, rgba(234, 56, 76, 0.05) 75%, rgba(234, 56, 76, 0.05))',
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 10px 10px',
          opacity: 0.5
        }}
      />
      
      <BackgroundMusic />
      <MemberList />
      
      <div className="glass-card p-6 sm:p-8 max-w-2xl w-full mx-auto space-y-6 sm:space-y-8 relative">
        <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
          <div className="avatar-container">
            <Avatar
              src="/lovable-uploads/29ae0bf3-ef96-4b9c-a983-ff10498c750a.png"
              alt="Sam"
              className="transition-transform duration-500 hover:scale-105"
            />
          </div>
          
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <Crown 
              className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500 animate-pulse"
              style={{
                filter: 'drop-shadow(0 0 15px rgba(234, 207, 56, 0.7))'
              }}
            />
            <h1 
              className="text-3xl sm:text-4xl font-bold text-white tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-red-700"
              style={{
                textShadow: '0 0 20px rgba(234, 56, 76, 0.5), 0 0 40px rgba(234, 56, 76, 0.3)'
              }}
            >
              Sam
            </h1>
            <Crown 
              className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500 animate-pulse"
              style={{
                filter: 'drop-shadow(0 0 15px rgba(234, 207, 56, 0.7))'
              }}
            />
          </div>
          
          <p className="text-base sm:text-lg text-red-300/90 animate-fade-in font-semibold tracking-wide">
            UI/UX Designer & Full-Stack Developer
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6 animate-fade-in">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-white/90">
            <div className="flex items-center gap-2 hover:scale-110 transition-all duration-300 cursor-pointer bg-black/40 p-2 sm:p-3 rounded-lg backdrop-blur-sm border border-red-500/30 hover:border-red-500/60 hover:bg-black/50 group">
              <Palette className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 group-hover:text-red-400 transition-colors" />
              <span className="text-sm sm:text-base group-hover:text-red-200 transition-colors">UI/UX Design</span>
            </div>
            <div className="flex items-center gap-2 hover:scale-110 transition-all duration-300 cursor-pointer bg-black/40 p-2 sm:p-3 rounded-lg backdrop-blur-sm border border-red-500/30 hover:border-red-500/60 hover:bg-black/50 group">
              <Code className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 group-hover:text-red-400 transition-colors" />
              <span className="text-sm sm:text-base group-hover:text-red-200 transition-colors">Web & App Dev</span>
            </div>
            <div className="flex items-center gap-2 hover:scale-110 transition-all duration-300 cursor-pointer bg-black/40 p-2 sm:p-3 rounded-lg backdrop-blur-sm border border-red-500/30 hover:border-red-500/60 hover:bg-black/50 group">
              <Gamepad className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 group-hover:text-red-400 transition-colors" />
              <span className="text-sm sm:text-base group-hover:text-red-200 transition-colors">Game Seller</span>
            </div>
          </div>
          
          <p className="text-sm sm:text-base text-white/90 leading-relaxed bg-black/40 p-4 sm:p-6 rounded-lg backdrop-blur-sm border border-red-500/30 hover:border-red-500/60 transition-all duration-300 hover:bg-black/50">
            I'm a passionate developer and designer who brings creative visions to life. 
            With expertise in UI/UX design, web and app development, I create seamless 
            digital experiences that users love. I also have a keen interest in the gaming 
            industry, where I work as a game seller.
          </p>
        </div>

        <div className="flex justify-center animate-fade-in pt-2">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

export default Index;