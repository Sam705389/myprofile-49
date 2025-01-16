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
    <Dialog open={open} modal={true}>
      <DialogContent 
        className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[90vw] max-w-[450px] rounded-lg bg-black border border-red-500/20 shadow-xl"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader className="p-6">
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-red-500 via-red-400 to-red-500 bg-clip-text text-transparent mb-4">
            Disclaimer
          </DialogTitle>
          <DialogDescription className="space-y-6">
            <div className="text-sm text-white/90 leading-relaxed">
              This website is for informational purposes only. We are not responsible for any consequences that may arise from using the provided information.
            </div>
            
            <div className="relative p-4 bg-red-950/20 rounded-lg border border-red-500/20">
              <span className="font-bold text-red-500 text-lg mb-2 block">WARNING!</span>
              <span className="text-sm text-white/80 leading-relaxed block">
                If you see someone claiming to be me anywhere on other social media, <span className="font-bold text-red-400">THAT'S NOT ME!</span> They are likely trying to SCAM you.
                For your safety, do not deal with these people.
              </span>
            </div>
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 flex justify-end p-6 pt-2">
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