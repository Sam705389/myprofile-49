import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Users, Crown, Gamepad, User, Instagram, Globe, UserCheck } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Link } from "react-router-dom";

export const members = [
  {
    codeName: "NameLess",
    role: "My Right Hand",
    image: "/lovable-uploads/17d10083-51a7-4d74-986c-6b73a5950f5f.png",
    initials: "NL",
    description: "As the right hand of the team, I handle crucial decisions and support the team's vision. My role involves strategic planning and ensuring smooth operations across all our platforms.",
    responsibilities: ["Team Management", "Strategic Planning", "Decision Making"],
    icons: [<Crown key="crown" className="h-5 w-5 text-yellow-500" />]
  },
  {
    codeName: "k2jGaming",
    role: "k2j Co-Owner",
    image: "/lovable-uploads/2e43b7a7-baeb-44d4-b2a0-b3507edcb1c7.png",
    initials: "K2J",
    description: "As co-owner of k2j, I work alongside the team to drive our gaming community forward. I focus on community engagement and growth strategies.",
    responsibilities: ["Community Management", "Business Development", "Content Strategy"],
    icons: [<UserCheck key="co-owner" className="h-5 w-5 text-blue-500" />],
    music: {
      url: "https://s320.djpunjab.is/data/48/55537/304551/Winning%20Speech%20-%20Karan%20Aujla.mp3",
      name: "Winning Speech - Karan Aujla"
    }
  },
  {
    codeName: "Yashveer",
    role: "Steam Game Handler and Insta Handler",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    initials: "YV",
    description: "Managing our Steam game distribution and Instagram presence, I ensure our gaming community stays engaged and updated with the latest content and releases.",
    responsibilities: ["Steam Game Management", "Instagram Content Creation", "Community Engagement"],
    icons: [
      <Globe key="steam" className="h-5 w-5 text-blue-500" />,
      <Instagram key="instagram" className="h-5 w-5 text-pink-500" />
    ]
  },
  {
    codeName: "MD Ham",
    role: "Xbox Account Manager",
    image: "/lovable-uploads/e6b775d4-a167-4024-ae6b-96b1a2aebe6d.png",
    initials: "MDH",
    description: "Specializing in Xbox platform management, I handle our Xbox gaming accounts and ensure seamless gaming experiences for our Xbox community members.",
    responsibilities: ["Xbox Account Management", "Platform Support", "Gaming Community Support"],
    icons: [<Gamepad key="gamepad" className="h-5 w-5 text-green-500" />]
  }
];

export function MemberList() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="bg-black/50 hover:bg-black/70 backdrop-blur-sm fixed bottom-4 left-4 z-50"
        >
          <Users className="h-6 w-6 text-red-500" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-black/90 backdrop-blur-xl border border-red-500/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-red-500">Team Members</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          {members.map((member, index) => (
            <Link 
              to={`/member/${member.codeName.toLowerCase()}`} 
              key={index}
            >
              <div
                className="group flex items-start gap-4 p-4 rounded-lg bg-black/50 border border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:bg-black/60 cursor-pointer"
              >
                <Avatar className="h-16 w-16 border-2 border-red-500/30 group-hover:border-red-500/50 transition-all duration-300">
                  <AvatarImage src={member.image} alt={member.codeName} className="object-cover" />
                  <AvatarFallback className="bg-red-950 text-red-500">{member.initials}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg font-semibold text-red-500 group-hover:text-red-400 transition-colors">
                      {member.codeName}
                    </h3>
                    <div className="flex gap-1.5">
                      {member.icons.map((icon, iconIndex) => (
                        <div 
                          key={iconIndex}
                          className="transition-transform duration-300 hover:scale-110"
                        >
                          {icon}
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-red-300/70 mt-1">{member.role}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}