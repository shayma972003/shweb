"use client";

import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { aiProjects } from "@/data/ai-projects";
import { dict } from "@/data/dictionary";
import { useLocale } from "@/components/providers/locale-provider";
import { SectionHeading } from "@/components/shared/section-heading";
import { AiProjectCard } from "@/components/shared/ai-project-card";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";

export function AiLabPreview() {
  const { locale, dir } = useLocale();
  const ForwardArrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <section className="bg-secondary/50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            title={dict.home.aiLabTitle[locale]}
            subtitle={dict.home.aiLabSubtitle[locale]}
          />
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {aiProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <AiProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button variant="outline" className="rounded-full" nativeButton={false} render={<Link href="/ai-lab" />}>
            {dict.home.exploreAiLab[locale]}
            <ForwardArrow className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
