import { useParams } from 'react-router-dom';
import { Avatar } from "@/components/Avatar";
import { SocialLinks } from "@/components/SocialLinks";
import { BackgroundMusic } from "@/components/BackgroundMusic";
import { MemberList } from "@/components/MemberList";
import { Crown, Code, Palette, Gamepad } from "lucide-react";

const memberData = {
  sam: {
    name: "Sam",
    role: "UI/UX Designer & Full-Stack Developer",
    avatar: "/lovable-uploads/29ae0bf3-ef96-4b9c-a983-ff10498c750a.png",
    music: "https://p320.djpunjab.is/data/48/56690/306239/DONALI%20-%20Harkirat%20Sangha.mp3",
    skills: ["UI/UX Design", "Web & App Dev", "Game Seller"]
  },
  k2jgaming: {
    name: "k2jGaming",
    role: "k2j Co-Owner",
    avatar: "/lovable-uploads/2e43b7a7-baeb-44d4-b2a0-b3507edcb1c7.png",
    music: "https://s320.djpunjab.is/data/48/55537/304551/Winning%20Speech%20-%20Karan%20Aujla.mp3",
    skills: ["Community Management", "Business Development", "Content Strategy"]
  },
  // ... Add other members here
};

const MemberPage = () => {
  const { memberId } = useParams();
  const member = memberData[memberId as keyof typeof memberData] || memberData.sam;

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
      
      <BackgroundMusic songUrl={member.music} />
      <MemberList />
      
      <div className="glass-card p-6 sm:p-8 max-w-2xl w-full mx-auto space-y-6 sm:space-y-8 relative">
        <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
          <div className="avatar-container">
            <Avatar
              src={member.avatar}
              alt={member.name}
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
              {member.name}
            </h1>
            <Crown 
              className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500 animate-pulse"
              style={{
                filter: 'drop-shadow(0 0 15px rgba(234, 207, 56, 0.7))'
              }}
            />
          </div>
          
          <p className="text-base sm:text-lg text-red-300/90 animate-fade-in font-semibold tracking-wide">
            {member.role}
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6 animate-fade-in">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-white/90">
            {member.skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-2 hover:scale-110 transition-all duration-300 cursor-pointer bg-black/40 p-2 sm:p-3 rounded-lg backdrop-blur-sm border border-red-500/30 hover:border-red-500/60 hover:bg-black/50 group">
                {index === 0 && <Palette className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 group-hover:text-red-400 transition-colors" />}
                {index === 1 && <Code className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 group-hover:text-red-400 transition-colors" />}
                {index === 2 && <Gamepad className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 group-hover:text-red-400 transition-colors" />}
                <span className="text-sm sm:text-base group-hover:text-red-200 transition-colors">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center animate-fade-in pt-2">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default MemberPage;