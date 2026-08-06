"use client";

import { Check, GitBranch, LayoutTemplate } from "lucide-react";
import { Project } from "@/data/projects";
import { dict } from "@/data/dictionary";
import { useLocale } from "@/components/providers/locale-provider";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import { ProjectImage } from "@/components/shared/project-image";
import { LiveSitePreview } from "@/components/projects/live-site-preview";
import { TechTag } from "@/components/shared/tech-tag";
import { Reveal } from "@/components/shared/reveal";

export function ProjectDetailLayout({ project }: { project: Project }) {
  const { locale } = useLocale();
  const t = dict.common;

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      <Reveal>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {project.title[locale]}
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">{project.subtitle[locale]}</p>

          <div className="flex flex-wrap gap-2 pt-1">
            {project.tags[locale].map((tag) => (
              <TechTag key={tag} label={tag} />
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        {project.liveUrl ? (
          <LiveSitePreview liveUrl={project.liveUrl} title={project.title[locale]} />
        ) : (
          <ProjectImage
            src={project.heroImage?.src}
            width={project.heroImage?.width}
            height={project.heroImage?.height}
            fit="contain"
            alt={`${project.title[locale]} — ${t.heroImageComingSoon[locale]}`}
            fallbackIcon={LayoutTemplate}
            aspectRatio="aspect-[16/9]"
            sizes="100vw"
          />
        )}
      </Reveal>

      <Reveal delay={0.15} className="mt-12">
        <h2 className="text-xl font-semibold text-foreground">{t.overview[locale]}</h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          {project.overview[locale]}
        </p>
      </Reveal>

      <Reveal delay={0.2} className="mt-12">
        <h2 className="text-xl font-semibold text-foreground">{t.keyFeatures[locale]}</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {project.features[locale].map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="mt-0.5 size-4 shrink-0 text-indigo" />
              {feature}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.25} className="mt-12">
        <h2 className="text-xl font-semibold text-foreground">{t.techStack[locale]}</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <TechTag key={tech} label={tech} />
          ))}
        </div>
      </Reveal>

      {project.architectureImage && (
        <Reveal delay={0.3} className="mt-12">
          <h2 className="text-xl font-semibold text-foreground">{t.architecture[locale]}</h2>
          <div className="mt-4">
            <ProjectImage
              src={project.architectureImage[locale].src}
              width={project.architectureImage[locale].width}
              height={project.architectureImage[locale].height}
              fit="contain"
              alt={`${project.title[locale]} — ${t.architecture[locale]}`}
              fallbackIcon={GitBranch}
              aspectRatio="aspect-[16/9]"
              sizes="100vw"
            />
          </div>
        </Reveal>
      )}

      {project.hasGallery && (
        <Reveal delay={0.35} className="mt-12">
          <h2 className="text-xl font-semibold text-foreground">{t.projectGallery[locale]}</h2>
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
