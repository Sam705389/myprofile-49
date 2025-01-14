import { Github, Instagram, Link, Gamepad } from "lucide-react";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

interface SocialLink {
  icon: JSX.Element;
  href: string;
  label: string;
  comingSoon?: boolean;
}

export function SocialLinks() {
  const links: SocialLink[] = [
    {
      icon: <Github className="w-6 h-6" />,
      href: "#",
      label: "GitHub",
      comingSoon: true
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
      comingSoon: true
    },
    {
      icon: <Link className="w-6 h-6" />,
      href: "#",
      label: "Portfolio",
      comingSoon: true
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
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Coming Soon!</AlertDialogTitle>
                <p className="text-sm text-muted-foreground">
                  This feature is currently under development. Please check back later!
                </p>
              </AlertDialogHeader>
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