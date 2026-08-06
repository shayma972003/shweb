import type { Localized } from "@/lib/i18n";

export const coreAreas: Localized<string[]> = {
  en: [
    "Full Stack Development",
    "AI Agent Engineering",
    "AI Tools Engineering",
    "Backend Systems",
    "Database Design",
    "API Integrations",
    "AI Automation",
    "Cloud Deployment",
  ],
  ar: [
    "تطوير Full Stack",
    "هندسة وكلاء الذكاء الاصطناعي",
    "هندسة أدوات الذكاء الاصطناعي",
    "أنظمة Backend",
    "تصميم قواعد البيانات",
    "تكامل الـ APIs",
    "الأتمتة بالذكاء الاصطناعي",
    "النشر السحابي",
  ],
};

export interface ResumeLanguage {
  name: Localized;
  level: Localized;
}

export const resumeLanguages: ResumeLanguage[] = [
  { name: { en: "Arabic", ar: "العربية" }, level: { en: "Native", ar: "اللغة الأم" } },
  {
    name: { en: "English", ar: "الإنجليزية" },
    level: { en: "Professional Working Proficiency", ar: "إجادة احترافية" },
  },
];
