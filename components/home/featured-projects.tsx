"use client";

import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";
import { dict } from "@/data/dictionary";
import { useLocale } from "@/components/providers/locale-provider";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectCard } from "@/components/shared/project-card";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";

export function FeaturedProjects() {
  const { locale, dir } = useLocale();
  const ForwardArrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <Reveal>
        <SectionHeading
          title={dict.home.selectedWork[locale]}
          subtitle={dict.home.selectedWorkSubtitle[locale]}
        />
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Button variant="outline" className="rounded-full" nativeButton={false} render={<Link href="/projects" />}>
          {dict.common.viewAllProjects[locale]}
          <ForwardArrow className="size-4" />
        </Button>
      </div>
    </section>
  );
}
