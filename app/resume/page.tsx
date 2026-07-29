import { Metadata } from "next";
import { Download } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { certifications } from "@/data/certifications";
import { SectionHeading } from "@/components/shared/section-heading";
import { CertificationCard } from "@/components/shared/certification-card";
import { SkillGroup } from "@/components/resume/skill-group";
import { LanguageList } from "@/components/resume/language-list";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Professional summary, core areas, certifications, and languages for Shayma Samir.",
};

const coreAreas = [
  "Full Stack Development",
  "AI Agent Engineering",
  "AI Tools Engineering",
  "Backend Systems",
  "Database Design",
  "API Integrations",
  "AI Automation",
  "Cloud Deployment",
];

const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Professional Working Proficiency" },
  { name: "Italian", level: "Basic" },
];

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      <Reveal>
        <div className="flex flex-wrap items-start justify-between gap-6">
          <SectionHeading title="Resume" />
          {siteConfig.cvAvailable ? (
            <Button
              size="lg"
              className="rounded-full bg-navy text-navy-foreground hover:bg-navy/90"
              nativeButton={false}
              render={<a href={siteConfig.cvPath} download />}
            >
              <Download className="size-4" />
              Download CV
            </Button>
          ) : (
            <Button disabled size="lg" variant="outline" className="rounded-full opacity-60">
              <Download className="size-4" />
              CV Available Soon
            </Button>
          )}
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <h2 className="text-xl font-semibold text-foreground">Professional Summary</h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Full Stack Developer and AI Agent Engineer focused on building modern web
          applications, intelligent AI agents, and practical automation tools. I enjoy
          combining software engineering with AI to create systems that solve real business
          problems.
        </p>
      </Reveal>

      <Reveal delay={0.15} className="mt-12">
        <h2 className="text-xl font-semibold text-foreground">Core Areas</h2>
        <div className="mt-4">
          <SkillGroup areas={coreAreas} />
        </div>
      </Reveal>

      <Reveal delay={0.2} className="mt-12">
        <h2 className="text-xl font-semibold text-foreground">Certifications</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {certifications.map((certification) => (
            <CertificationCard key={certification.title} certification={certification} />
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.25} className="mt-12 max-w-sm">
        <h2 className="text-xl font-semibold text-foreground">Languages</h2>
        <div className="mt-4">
          <LanguageList languages={languages} />
        </div>
      </Reveal>
    </div>
  );
}
