import { Badge } from "@/components/ui/badge";

export function TechTag({ label }: { label: string }) {
  return (
    <Badge
      variant="secondary"
      className="rounded-full border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
    >
      {label}
    </Badge>
  );
}
