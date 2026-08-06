import { LucideIcon, ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  label: string;
  icon?: LucideIcon;
  aspectRatio?: string;
  className?: string;
}

export function ImagePlaceholder({
  label,
  icon: Icon = ImageIcon,
  aspectRatio = "aspect-video",
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "relative flex w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-navy/[0.06] via-indigo/[0.06] to-violet/[0.08] text-center",
        aspectRatio,
        className
      )}
    >
      <div className="flex size-12 items-center justify-center rounded-full bg-white/70 shadow-sm">
        <Icon className="size-5 text-indigo" strokeWidth={1.5} aria-hidden="true" />
      </div>
      <span className="px-4 text-sm font-medium text-muted-foreground">{label}</span>
    </div>
  );
}
