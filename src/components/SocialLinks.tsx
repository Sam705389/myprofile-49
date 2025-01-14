import { Github, Instagram, Link, Gamepad } from "lucide-react";
import { 
  AlertDialog, 
  AlertDialogContent, 
  AlertDialogHeader, 
  AlertDialogTitle, 
  AlertDialogTrigger,
  AlertDialogFooter,
  AlertDialogAction
} from "@/components/ui/alert-dialog";

interface SocialLink {
  icon: JSX.Element;
  href: string;
  label: string;
  comingSoon?: boolean;
  message?: string;
}

export function SocialLinks() {
  const links: SocialLink[] = [
    {
      icon: <Github className="w-6 h-6" />,
      href: "#",
      label: "GitHub",
      comingSoon: true,
      message: "I will be creating my GitHub account soon to showcase my projects!"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      href: "https://www.instagram.com/gamer_addaz/",
      label: "Instagram"
    },
    {
      icon: <Gamepad className="w-6 h-6" />,
      href: "#",
      label: "Game Store",
      comingSoon: true,
      message: "My game store is under development. Check back soon to explore amazing games!"
    },
    {
      icon: <Link className="w-6 h-6" />,
      href: "#",
      label: "Portfolio",
      comingSoon: true,
      message: "My portfolio website is currently being built. Stay tuned for an amazing showcase of my work!"
    },
  ];

  return (
    <div className="flex gap-6 mt-6">
      {links.map((link) => (
        link.comingSoon ? (
          <AlertDialog key={link.label}>
            <AlertDialogTrigger asChild>
              <button className="social-link text-white/80 hover:text-white">
                {link.icon}
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-black/90 border border-red-500/30">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-xl text-red-500">{link.label} - Coming Soon!</AlertDialogTitle>
                <p className="text-sm text-white/80">
                  {link.message}
                </p>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction className="bg-red-500 hover:bg-red-600 text-white">
                  Back
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        ) : (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link text-white/80 hover:text-white"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        )
      ))}
    </div>
  );
}