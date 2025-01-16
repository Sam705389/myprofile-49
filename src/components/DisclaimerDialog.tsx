import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export const DisclaimerDialog = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Check if the disclaimer has been shown before
    const hasSeenDisclaimer = localStorage.getItem("hasSeenDisclaimer");
    if (!hasSeenDisclaimer) {
      setOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("hasSeenDisclaimer", "true");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-red-500 mb-4">Disclaimer</DialogTitle>
          <DialogDescription className="space-y-4">
            <p className="text-sm text-foreground">
              This website is for informational purposes only. We are not responsible for any consequences that may arise from using the provided information.
            </p>
            <div className="bg-red-100 border-l-4 border-red-500 p-4 mt-4">
              <p className="font-bold text-red-500">WARNING!</p>
              <p className="text-sm text-red-700 mt-2">
                If you see someone claiming to be me anywhere on other social media, THAT'S NOT ME! They are likely trying to SCAM you.
                For your safety, do not deal with these people.
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>
        <div className="mt-6 flex justify-end">
          <Button onClick={handleAccept}>I Understand</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};