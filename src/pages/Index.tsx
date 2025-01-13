import { Avatar } from "@/components/Avatar";
import { SocialLinks } from "@/components/SocialLinks";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/90 to-purple-800 p-4">
      <div className="glass-card p-8 max-w-2xl w-full mx-auto space-y-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <Avatar
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            alt="Your Name"
          />
          <h1 className="text-4xl font-bold text-white mt-4">Your Name</h1>
          <p className="text-lg text-white/80">
            Frontend Developer & UI/UX Enthusiast
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-white/90 leading-relaxed">
            I'm a passionate developer who loves creating beautiful and functional web experiences. 
            With expertise in React, TypeScript, and modern web technologies, I bring ideas to life 
            through clean code and intuitive design.
          </p>
        </div>

        <div className="flex justify-center">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

export default Index;