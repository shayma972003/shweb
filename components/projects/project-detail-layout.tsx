import { Check, GitBranch, Code2, ExternalLink, LayoutTemplate } from "lucide-react";
import { Project } from "@/data/projects";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import { LiveSitePreview } from "@/components/projects/live-site-preview";
import { TechTag } from "@/components/shared/tech-tag";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";

export function ProjectDetailLayout({ project }: { project: Project }) {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      <Reveal>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {project.title}
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">{project.subtitle}</p>

          <div className="flex flex-wrap gap-2 pt-1">
            {project.tags.map((tag) => (
              <TechTag key={tag} label={tag} />
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
              {project.demo ? (
                <Button
                  className="rounded-full"
                  nativeButton={false}
                  render={<a href={project.demo} target="_blank" rel="noopener noreferrer" />}
                >
                  <ExternalLink className="size-4" />
                  Live Demo
                </Button>
              ) : (
                <Button disabled variant="outline" className="rounded-full opacity-60">
                  Live Demo — Coming soon
                </Button>
              )}
              {project.github ? (
                <Button
                  variant="outline"
                  className="rounded-full"
                  nativeButton={false}
                  render={<a href={project.github} target="_blank" rel="noopener noreferrer" />}
                >
                  <Code2 className="size-4" />
                  GitHub
                </Button>
              ) : (
                <Button disabled variant="outline" className="rounded-full opacity-60">
                  GitHub — Coming soon
                </Button>
              )}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        {project.liveUrl ? (
          <LiveSitePreview liveUrl={project.liveUrl} title={project.title} />
        ) : (
          <ImagePlaceholder
            label={`${project.title} — hero image`}
            icon={LayoutTemplate}
            aspectRatio="aspect-[16/9]"
          />
        )}
      </Reveal>

      <Reveal delay={0.15} className="mt-12">
        <h2 className="text-xl font-semibold text-foreground">Overview</h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          {project.overview}
        </p>
      </Reveal>

      <Reveal delay={0.2} className="mt-12">
        <h2 className="text-xl font-semibold text-foreground">Key Features</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="mt-0.5 size-4 shrink-0 text-indigo" />
              {feature}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.25} className="mt-12">
        <h2 className="text-xl font-semibold text-foreground">Technology / Stack</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <TechTag key={tech} label={tech} />
          ))}
        </div>
      </Reveal>

      {project.hasArchitectureDiagram && (
        <Reveal delay={0.3} className="mt-12">
          <h2 className="text-xl font-semibold text-foreground">Architecture</h2>
          <div className="mt-4">
            <ImagePlaceholder
              label="Architecture diagram — coming soon"
              icon={GitBranch}
              aspectRatio="aspect-[16/9]"
            />
          </div>
        </Reveal>
      )}

      {project.hasGallery && (
        <Reveal delay={0.35} className="mt-12">
          <h2 className="text-xl font-semibold text-foreground">Project Gallery</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <ImagePlaceholder label="Screenshot — coming soon" />
            <ImagePlaceholder label="Screenshot — coming soon" />
          </div>
        </Reveal>
      )}
    </div>
  );
}
