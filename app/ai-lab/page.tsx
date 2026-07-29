import { Metadata } from "next";
import { aiProjects } from "@/data/ai-projects";
import { SectionHeading } from "@/components/shared/section-heading";
import { AiProjectCard } from "@/components/shared/ai-project-card";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "AI Lab",
  description:
    "Experiments and practical AI systems built around agents, automation, and intelligent tools.",
};

export default function AiLabPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <Reveal>
        <SectionHeading
          title="AI Lab"
          subtitle="Experiments and practical AI systems built around agents, automation, and intelligent tools."
        />
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {aiProjects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.08}>
            <AiProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
