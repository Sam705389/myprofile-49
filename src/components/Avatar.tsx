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
        className="w-32 h-32 rounded-full border-4 border-red-500/50 shadow-2xl"
        style={{
          boxShadow: '0 0 30px rgba(234, 56, 76, 0.3), inset 0 0 20px rgba(234, 56, 76, 0.3)',
          filter: 'drop-shadow(0 0 10px rgba(234, 56, 76, 0.2))'
        }}
      />
    </div>
  );
}