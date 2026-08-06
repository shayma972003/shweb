"use client";

import { Bot, FileText, Info } from "lucide-react";
import { AiProject } from "@/data/ai-projects";
import { dict } from "@/data/dictionary";
import { useLocale } from "@/components/providers/locale-provider";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import { ProjectImage } from "@/components/shared/project-image";
import { LiveSitePreview } from "@/components/projects/live-site-preview";
import { TechTag } from "@/components/shared/tech-tag";
import { Reveal } from "@/components/shared/reveal";
import { WorkflowDiagram } from "@/components/ai-lab/workflow-diagram";
import { Badge } from "@/components/ui/badge";

export function AiProjectDetailLayout({ project }: { project: AiProject }) {
  const { locale } = useLocale();
  const t = dict.common;

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      <Reveal>
        <div className="flex flex-col gap-4">
          <Badge className="w-fit rounded-full bg-gradient-accent text-white border-transparent">
            {project.badge[locale]}
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {project.title[locale]}
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">{project.overview[locale]}</p>

          <div className="flex flex-wrap gap-2 pt-1">
            {project.tags[locale].map((tag) => (
              <TechTag key={tag} label={tag} />
            ))}
          </div>
        </div>
      </Reveal>

      {project.disclaimer && (
        <Reveal delay={0.08} className="mt-8">
          <div className="flex gap-3 rounded-xl border border-border bg-secondary/60 px-4 py-3.5">
            <Info className="mt-0.5 size-4 shrink-0 text-indigo" />
            <p className="text-sm text-muted-foreground">{project.disclaimer[locale]}</p>
          </div>
        </Reveal>
      )}

      <Reveal delay={0.1} className="mt-10">
        {project.demo ? (
          <LiveSitePreview liveUrl={project.demo} title={project.title[locale]} />
        ) : project.heroImage ? (
          <ProjectImage
            src={project.heroImage.src}
            width={project.heroImage.width}
            height={project.heroImage.height}
            fit="contain"
            alt={`${project.title[locale]} — ${t.screenshots[locale]}`}
            aspectRatio="aspect-[16/9]"
            sizes="100vw"
          />
        ) : (
          <ImagePlaceholder
            label={`${project.title[locale]} — ${t.screenshots[locale]}`}
            icon={Bot}
            aspectRatio="aspect-[16/9]"
          />
        )}
      </Reveal>

      <Reveal delay={0.15} className="mt-12">
        <h2 className="text-xl font-semibold text-foreground">{t.howItWorks[locale]}</h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          {project.overview[locale]}
        </p>
        {project.autonomyNote && (
          <p className="mt-3 text-sm italic text-muted-foreground">
            {project.autonomyNote[locale]}
          </p>
        )}
      </Reveal>

      {project.problem && project.solution && (
        <Reveal delay={0.18} className="mt-12 grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-foreground">{t.problem[locale]}</h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {project.problem[locale]}
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">{t.solution[locale]}</h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {project.solution[locale]}
            </p>
          </div>
        </Reveal>
      )}

      {project.factors && (
        <Reveal delay={0.22} className="mt-12">
          <h2 className="text-xl font-semibold text-foreground">{t.allocationFactors[locale]}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.factors[locale].map((factor) => (
              <TechTag key={factor} label={factor} />
            ))}
          </div>
          {project.outcome && (
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {project.outcome[locale]}
            </p>
          )}
        </Reveal>
      )}

      <Reveal delay={0.28} className="mt-12">
        <h2 className="text-xl font-semibold text-foreground">
          {project.workflowLabel ? project.workflowLabel[locale] : t.agentWorkflow[locale]}
        </h2>
        <div className="mt-6">
          <WorkflowDiagram steps={project.workflowSteps[locale]} />
        </div>
      </Reveal>

      {project.reportSections && (
        <Reveal delay={0.32} className="mt-12">
          <h2 className="text-xl font-semibold text-foreground">{t.reportOutput[locale]}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.reportSections[locale].map((section) => (
              <TechTag key={section} label={section} />
            ))}
          </div>
        </Reveal>
      )}

      {project.hasSampleReport && (
        <Reveal delay={0.36} className="mt-12">
          <h2 className="text-xl font-semibold text-foreground">{t.sampleReport[locale]}</h2>
          <div className="mt-4">
            <ImagePlaceholder label={t.sampleReportComingSoon[locale]} icon={FileText} />
          </div>
        </Reveal>
      )}

      {!project.hideScreenshotsSection && (
        <Reveal delay={0.4} className="mt-12">
          <h2 className="text-xl font-semibold text-foreground">{t.screenshots[locale]}</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {project.galleryImages && project.galleryImages.length > 0 ? (
              project.galleryImages.map((image, i) => (
                <ProjectImage
                  key={image.src}
                  src={image.src}
                  width={image.width}
                  height={image.height}
                  fit="contain"
                  alt={`${project.title[locale]} — ${i + 1}`}
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              ))
            ) : (
              <>
                <ImagePlaceholder label={t.screenshotComingSoon[locale]} />
                <ImagePlaceholder label={t.screenshotComingSoon[locale]} />
              </>
            )}
          </div>
        </Reveal>
      )}
    </div>
  );
}
