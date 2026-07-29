import { Award } from "lucide-react";
import { Certification } from "@/data/certifications";
import { Badge } from "@/components/ui/badge";

export function CertificationCard({ certification }: { certification: Certification }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-navy/5">
        <Award className="size-5 text-navy" aria-hidden="true" />
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-base font-semibold text-foreground">{certification.title}</h3>
          {certification.status && (
            <Badge variant="outline" className="rounded-full text-xs font-medium">
              {certification.status}
            </Badge>
          )}
        </div>
        <p className="text-sm font-medium text-indigo">{certification.provider}</p>
        <p className="text-sm text-muted-foreground">{certification.description}</p>
      </div>
    </div>
  );
}
