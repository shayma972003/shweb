import type { Localized } from "@/lib/i18n";

export interface Certification {
  title: Localized;
  provider: string;
  status?: Localized;
  description: Localized;
}

export const certifications: Certification[] = [
  {
    title: {
      en: "IBM Full Stack Software Developer Professional Certificate",
      ar: "شهادة IBM المهنية في تطوير البرمجيات Full Stack",
    },
    provider: "IBM / Coursera",
    status: { en: "In Progress", ar: "قيد التقدم" },
    description: {
      en: "Professional development focused on modern full-stack software development and software engineering.",
      ar: "تأهيل مهني يركّز على تطوير البرمجيات الحديث Full Stack وهندسة البرمجيات.",
    },
  },
  {
    title: { en: "Agentic AI Engineer", ar: "مهندس Agentic AI" },
    provider: "Udemy",
    description: {
      en: "Professional training focused on Agentic AI, AI agents, multi-agent systems, and intelligent AI workflows.",
      ar: "تدريب مهني يركّز على Agentic AI ووكلاء الذكاء الاصطناعي والأنظمة متعددة الوكلاء وسير العمل الذكي.",
    },
  },
];
