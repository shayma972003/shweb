"use client";

import { Download } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { certifications } from "@/data/certifications";
import { coreAreas, resumeLanguages } from "@/data/resume";
import { dict } from "@/data/dictionary";
import { useLocale } from "@/components/providers/locale-provider";
import { SectionHeading } from "@/components/shared/section-heading";
import { CertificationCard } from "@/components/shared/certification-card";
import { SkillGroup } from "@/components/resume/skill-group";
import { LanguageList } from "@/components/resume/language-list";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";

export function ResumeContent() {
  const { locale } = useLocale();
  const t = dict.resumePage;

  const languages = resumeLanguages.map((language) => ({
    name: language.name[locale],
    level: language.level[locale],
  }));

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      <Reveal>
        <div className="flex flex-wrap items-start justify-between gap-6">
          <SectionHeading title={t.title[locale]} />
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <h2 className="text-xl font-semibold text-foreground">
          {t.professionalSummary[locale]}
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {t.summaryText[locale]}
        </p>
      </Reveal>

      <Reveal delay={0.15} className="mt-12">
        <h2 className="text-xl font-semibold text-foreground">
          {t.coreAreas[locale]}
        </h2>
        <div className="mt-4">
          <SkillGroup areas={coreAreas[locale]} />
        </div>
      </Reveal>

      <Reveal delay={0.2} className="mt-12">
        <h2 className="text-xl font-semibold text-foreground">
          {dict.home.certifications[locale]}
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {certifications.map((certification) => (
            <CertificationCard
              key={certification.title.en}
              certification={certification}
            />
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.25} className="mt-12 max-w-sm">
        <h2 className="text-xl font-semibold text-foreground">
          {t.languages[locale]}
        </h2>
        <div className="mt-4">
          <LanguageList languages={languages} />
        </div>
      </Reveal>
    </div>
  );
}
