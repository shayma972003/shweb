import { Code2, ExternalLink, Bot, FileText, Info } from "lucide-react";
import { AiProject } from "@/data/ai-projects";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import { TechTag } from "@/components/shared/tech-tag";
import { Reveal } from "@/components/shared/reveal";
import { WorkflowDiagram } from "@/components/ai-lab/workflow-diagram";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function AiProjectDetailLayout({ project }: { project: AiProject }) {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      <Reveal>
        <div className="flex flex-col gap-4">
          <Badge className="w-fit rounded-full bg-gradient-accent text-white border-transparent">
            {project.badge}
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {project.title}
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">{project.overview}</p>

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
                Demo
              </Button>
            ) : (
              <Button disabled variant="outline" className="rounded-full opacity-60">
                Demo — Coming soon
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

      {project.disclaimer && (
        <Reveal delay={0.08} className="mt-8">
          <div className="flex gap-3 rounded-xl border border-border bg-secondary/60 px-4 py-3.5">
            <Info className="mt-0.5 size-4 shrink-0 text-indigo" />
            <p className="text-sm text-muted-foreground">{project.disclaimer}</p>
          </div>
        </Reveal>
      )}

      <Reveal delay={0.1} className="mt-10">
        <ImagePlaceholder
          label={`${project.title} — screenshots`}
          icon={Bot}
          aspectRatio="aspect-[16/9]"
        />
      </Reveal>

      <Reveal delay={0.15} className="mt-12">
        <h2 className="text-xl font-semibold text-foreground">How It Works</h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          {project.overview}
        </p>
        {project.autonomyNote && (
          <p className="mt-3 text-sm italic text-muted-foreground">{project.autonomyNote}</p>
        )}
      </Reveal>

      {project.problem && project.solution && (
        <Reveal delay={0.18} className="mt-12 grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-foreground">Problem</h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {project.problem}
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">Solution</h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {project.solution}
            </p>
          </div>
        </Reveal>
      )}

      {project.factors && (
        <Reveal delay={0.22} className="mt-12">
          <h2 className="text-xl font-semibold text-foreground">Allocation Factors</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.factors.map((factor) => (
              <TechTag key={factor} label={factor} />
            ))}
          </div>
          {project.outcome && (
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {project.outcome}
            </p>
          )}
        </Reveal>
      )}

      <Reveal delay={0.28} className="mt-12">
        <h2 className="text-xl font-semibold text-foreground">Agent Workflow</h2>
        <div className="mt-6">
          <WorkflowDiagram steps={project.workflowSteps} />
        </div>
      </Reveal>

      {project.reportSections && (
        <Reveal delay={0.32} className="mt-12">
          <h2 className="text-xl font-semibold text-foreground">Report Output</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.reportSections.map((section) => (
              <TechTag key={section} label={section} />
            ))}
          </div>
        </Reveal>
      )}

      {project.hasSampleReport && (
        <Reveal delay={0.36} className="mt-12">
          <h2 className="text-xl font-semibold text-foreground">Sample Report</h2>
          <div className="mt-4">
            <ImagePlaceholder label="Sample report — coming soon" icon={FileText} />
          </div>
        </Reveal>
      )}

      <Reveal delay={0.4} className="mt-12">
        <h2 className="text-xl font-semibold text-foreground">Screenshots</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <ImagePlaceholder label="Screenshot — coming soon" />
          <ImagePlaceholder label="Screenshot — coming soon" />
        </div>
      </Reveal>
    </div>
  );
}
