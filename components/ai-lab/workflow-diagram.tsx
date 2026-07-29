import { ArrowDown } from "lucide-react";

export function WorkflowDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-col items-center gap-2">
      {steps.map((step, i) => (
        <div key={step} className="flex flex-col items-center gap-2">
          <div className="w-full min-w-[220px] rounded-xl border border-border bg-card px-5 py-3 text-center shadow-sm">
            <span className="text-sm font-medium text-foreground">{step}</span>
          </div>
          {i < steps.length - 1 && (
            <ArrowDown className="size-4 text-indigo" aria-hidden="true" />
          )}
        </div>
      ))}
    </div>
  );
}
