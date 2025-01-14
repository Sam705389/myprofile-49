import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Users, Crown, Gamepad, User, Instagram, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const members = [
  {
    codeName: "NameLess",
    role: "My Right Hand",
    image: "/lovable-uploads/17d10083-51a7-4d74-986c-6b73a5950f5f.png",
    initials: "NL",
    icons: [<Crown key="crown" className="h-5 w-5 text-yellow-500" />]
  },
  {
    codeName: "k2jGaming",
    role: "k2j Co-Owner",
    image: "/lovable-uploads/2e43b7a7-baeb-44d4-b2a0-b3507edcb1c7.png",
    initials: "K2J",
    icons: [<Crown key="crown" className="h-5 w-5 text-yellow-500" />]
  },
  {
    codeName: "Yashveer",
    role: "Steam Game Handler and Insta Handler",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    initials: "YV",
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
            <div
              key={index}
              className="group flex items-start gap-4 p-4 rounded-lg bg-black/50 border border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:bg-black/60"
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
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}