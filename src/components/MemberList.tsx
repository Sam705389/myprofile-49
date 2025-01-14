import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Users } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const members = [
  {
    codeName: "NameLess",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    initials: "NL"
  },
  {
    codeName: "k2jGaming",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    initials: "K2J"
  },
  {
    codeName: "Yashveer",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    initials: "YV"
  },
  {
    codeName: "MD Ham",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
    initials: "MDH"
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
              className="flex items-center gap-4 p-3 rounded-lg bg-black/50 border border-red-500/20 hover:border-red-500/40 transition-all duration-300"
            >
              <Avatar className="h-12 w-12 border-2 border-red-500/30">
                <AvatarImage src={member.image} alt={member.codeName} />
                <AvatarFallback className="bg-red-950 text-red-500">{member.initials}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold text-red-500">{member.codeName}</h3>
                <p className="text-sm text-red-300/70">Team Member</p>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}