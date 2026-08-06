import Image from "next/image";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";

interface ProjectImageProps {
  src?: string;
  alt: string;
  /** "cover" fills a fixed-aspect card thumbnail (may crop). "contain" shows the
   * full image at its native aspect ratio with no cropping — requires width/height. */
  fit?: "cover" | "contain";
  width?: number;
  height?: number;
  aspectRatio?: string;
  className?: string;
  fallbackIcon?: LucideIcon;
  sizes?: string;
}

export function ProjectImage({
  src,
  alt,
  fit = "cover",
  width,
  height,
  aspectRatio = "aspect-video",
  className,
  fallbackIcon,
  sizes = "(min-width: 1024px) 33vw, 100vw",
}: ProjectImageProps) {
  if (!src) {
    return (
      <ImagePlaceholder label={alt} icon={fallbackIcon} aspectRatio={aspectRatio} className={className} />
    );
  }

  if (fit === "contain") {
    if (!width || !height) {
      throw new Error(`ProjectImage: fit="contain" requires width and height (alt="${alt}")`);
    }
    return (
      <div
        className={cn(
          "flex w-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-muted p-2 sm:p-3",
          className
        )}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          className="h-auto w-full rounded-lg object-contain"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-2xl border border-border bg-muted",
        aspectRatio,
        className
      )}
    >
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
    </div>
  );
}
