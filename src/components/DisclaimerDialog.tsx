import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "./ui/button";
import { AlertTriangle } from "lucide-react";

export const DisclaimerDialog = () => {
  const [open, setOpen] = useState(true);

  const handleAccept = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} modal={true}>
      <DialogContent 
        className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[90vw] max-w-[500px] rounded-xl bg-gradient-to-b from-black via-black to-black/95 border border-red-500/20 shadow-2xl backdrop-blur-xl"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-xl opacity-50" />
        
        <DialogHeader className="p-8 relative">          
          <DialogTitle className="text-3xl font-bold text-center bg-gradient-to-r from-red-500 via-orange-400 to-red-500 bg-clip-text text-transparent mb-6">
            Disclaimer
          </DialogTitle>
          
          <DialogDescription className="space-y-8">
            <div className="text-base text-white/90 leading-relaxed bg-white/5 p-6 rounded-lg border border-white/10">
              This website is for informational purposes only. We are not responsible for any consequences that may arise from using the provided information.
            </div>
            
            <div className="relative p-6 bg-red-950/30 rounded-lg border border-red-500/30 shadow-lg">
              <div className="absolute -top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full flex items-center gap-2 text-sm font-semibold">
                <AlertTriangle className="w-4 h-4" />
                WARNING
              </div>
              
              <div className="space-y-4 mt-2">
                <span className="text-base text-white/90 leading-relaxed block">
                  If you see someone claiming to be me anywhere on other social media, 
                  <span className="font-bold text-red-400 mx-1">THAT'S NOT ME!</span> 
                  They are likely trying to SCAM you.
                </span>
                <span className="text-sm text-white/80 block italic">
                  For your safety, do not deal with these people.
                </span>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        
        <div className="p-8 pt-0 flex justify-end relative">
          <Button 
            onClick={handleAccept}
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-6 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/20 text-lg font-medium"
          >
            I Understand
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};