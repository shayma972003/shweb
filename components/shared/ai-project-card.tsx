"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Bot } from "lucide-react";
import { AiProject } from "@/data/ai-projects";
import { dict } from "@/data/dictionary";
import { useLocale } from "@/components/providers/locale-provider";
import { ProjectImage } from "@/components/shared/project-image";
import { TechTag } from "@/components/shared/tech-tag";
import { Badge } from "@/components/ui/badge";

export function AiProjectCard({ project }: { project: AiProject }) {
  const { locale } = useLocale();

  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25, ease: "easeOut" }}>
      <Link
        href={`/ai-lab/${project.slug}`}
        className="group flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <div className="relative">
          <ProjectImage
            src={project.coverImage}
            alt={project.title[locale]}
            fallbackIcon={Bot}
            aspectRatio="aspect-[4/3]"
          />
          <Badge className="absolute start-3 top-3 rounded-full bg-gradient-accent text-white border-transparent">
            {project.badge[locale]}
          </Badge>
        </div>
        <div className="flex flex-1 flex-col gap-2 px-1 pb-1">
          <h3 className="text-lg font-semibold text-foreground">{project.title[locale]}</h3>
          <p className="text-sm text-muted-foreground">{project.shortDescription[locale]}</p>
          <div className="flex flex-wrap gap-2 pt-1">
            {project.tags[locale].map((tag) => (
              <TechTag key={tag} label={tag} />
            ))}
          </div>
          <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-indigo">
            {dict.common.viewProject[locale]}
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
