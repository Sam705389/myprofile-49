import { Github, Instagram, Link } from "lucide-react";

interface SocialLink {
  icon: JSX.Element;
  href: string;
  label: string;
}

export function SocialLinks() {
  const links: SocialLink[] = [
    {
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com/yourusername",
      label: "GitHub",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      href: "https://instagram.com/yourusername",
      label: "Instagram",
    },
    {
      icon: <Link className="w-6 h-6" />,
      href: "https://yourwebsite.com",
      label: "Website",
    },
  ];

  return (
    <div className="flex gap-6 mt-6">
      {links.map((link) => (
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
      ))}
    </div>
  );
}