import { cn } from "@/lib/utils";

interface AvatarProps {
  src: string;
  alt: string;
  className?: string;
}

export function Avatar({ src, alt, className }: AvatarProps) {
  return (
    <div className={cn("avatar-container", className)}>
      <img
        src={src}
        alt={alt}
        className="w-32 h-32 rounded-full border-4 border-white shadow-xl"
      />
    </div>
  );
}