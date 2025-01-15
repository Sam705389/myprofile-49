import { Avatar } from "./Avatar";
import { SocialLinks } from "./SocialLinks";
import { BackgroundMusic } from "./BackgroundMusic";
import { Crown, Code, Palette, Gamepad, User, Instagram, Globe, UserCheck } from "lucide-react";

interface MemberPageProps {
  member: {
    codeName: string;
    role: string;
    image: string;
    description: string;
    responsibilities: string[];
    icons: JSX.Element[];
    music?: {
      url: string;
      name: string;
    };
  };
}

export function MemberPage({ member }: MemberPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-red-950 to-black p-4 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('${member.image}')`,
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
      
      {member.music && <BackgroundMusic song={member.music} />}
      
      <div className="glass-card p-6 sm:p-8 max-w-2xl w-full mx-auto space-y-6 sm:space-y-8 relative">
        <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
          <Avatar
            src={member.image}
            alt={member.codeName}
            className="transition-transform duration-500 hover:scale-105"
          />
          
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <div className="flex gap-1.5">
              {member.icons.map((icon, index) => (
                <div 
                  key={index}
                  className="transition-transform duration-300 hover:scale-110"
                >
                  {icon}
                </div>
              ))}
            </div>
            <h1 
              className="text-3xl sm:text-4xl font-bold text-white tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-red-700"
              style={{
                textShadow: '0 0 20px rgba(234, 56, 76, 0.5), 0 0 40px rgba(234, 56, 76, 0.3)'
              }}
            >
              {member.codeName}
            </h1>
          </div>
          
          <p className="text-base sm:text-lg text-red-300/90 animate-fade-in font-semibold tracking-wide">
            {member.role}
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6 animate-fade-in">
          <p className="text-sm sm:text-base text-white/90 leading-relaxed bg-black/40 p-4 sm:p-6 rounded-lg backdrop-blur-sm border border-red-500/30 hover:border-red-500/60 transition-all duration-300 hover:bg-black/50">
            {member.description}
          </p>
          
          <div className="bg-black/40 p-4 sm:p-6 rounded-lg backdrop-blur-sm border border-red-500/30">
            <h5 className="text-red-400 font-semibold mb-2">Responsibilities:</h5>
            <ul className="list-disc list-inside space-y-1">
              {member.responsibilities.map((responsibility, index) => (
                <li key={index} className="text-red-300/80">
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-center animate-fade-in pt-2">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}