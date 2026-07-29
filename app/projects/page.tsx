import { Metadata } from "next";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectCard } from "@/components/shared/project-card";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A closer look at the applications and systems Shayma Samir has built across full-stack development.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <Reveal>
        <SectionHeading
          title="Projects"
          subtitle="A closer look at the applications and systems I've built."
        />
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
