import { cn } from "@/lib/utils";

interface AvatarProps {
  src: string;
  alt: string;
  className?: string;
}

export function Avatar({ src, alt, className }: AvatarProps) {
  return (
    <div className={cn("relative", className)}>
      <img
        src={src}
        alt={alt}
        className="rounded-full border-4 border-red-500/50"
      />
    </div>
  );
}