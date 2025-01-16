import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "./ui/button";

export const DisclaimerDialog = () => {
  const [open, setOpen] = useState(true);

  const handleAccept = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="glass-card sm:max-w-[425px] border-none">
        <DialogHeader className="relative p-6 bg-gradient-to-br from-black/90 via-black/80 to-black/90 backdrop-blur-xl">
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-red-500 via-red-400 to-red-500 bg-clip-text text-transparent animate-text-shimmer mb-4">
            Disclaimer
          </DialogTitle>
          <DialogDescription className="space-y-6">
            <div className="transform hover:scale-[1.02] transition-transform duration-300">
              <span className="text-sm text-white/90 leading-relaxed block">
                This website is for informational purposes only. We are not responsible for any consequences that may arise from using the provided information.
              </span>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-red-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative p-5 bg-black/50 ring-1 ring-red-500/20 rounded-lg">
                <span className="font-bold text-red-500 text-lg mb-2 block animate-pulse">WARNING!</span>
                <span className="text-sm text-white/80 leading-relaxed block">
                  If you see someone claiming to be me anywhere on other social media, <span className="font-bold text-red-400">THAT'S NOT ME!</span> They are likely trying to SCAM you.
                  For your safety, do not deal with these people.
                </span>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <div className="mt-8 flex justify-end p-6 bg-gradient-to-br from-black/90 via-black/80 to-black/90">
          <Button 
            onClick={handleAccept}
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-2.5 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/20"
          >
            I Understand
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};