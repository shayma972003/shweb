"use client";

import { aiProjects } from "@/data/ai-projects";
import { dict } from "@/data/dictionary";
import { useLocale } from "@/components/providers/locale-provider";
import { SectionHeading } from "@/components/shared/section-heading";
import { AiProjectCard } from "@/components/shared/ai-project-card";
import { Reveal } from "@/components/shared/reveal";

export function AiLabIndex() {
  const { locale } = useLocale();

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <Reveal>
        <SectionHeading
          title={dict.aiLabPage.title[locale]}
          subtitle={dict.aiLabPage.subtitle[locale]}
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
