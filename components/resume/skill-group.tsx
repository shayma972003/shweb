export function SkillGroup({ areas }: { areas: string[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {areas.map((area) => (
        <div
          key={area}
          className="rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground shadow-sm"
        >
          {area}
        </div>
      ))}
    </div>
  );
}
