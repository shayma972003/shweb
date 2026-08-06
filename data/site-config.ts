import type { Localized } from "@/lib/i18n";

export const siteConfig = {
  name: { en: "Shaima Alashaab", ar: "شيماء الأشعب" } satisfies Localized,
  title: {
    en: "Full Stack Developer · AI Agent Engineer · AI Tools Engineer",
    ar: "مطوّرة Full Stack · مهندسة وكلاء ذكاء اصطناعي · مهندسة أدوات ذكاء اصطناعي",
  } satisfies Localized,
  location: { en: "Riyadh, Saudi Arabia", ar: "الرياض، المملكة العربية السعودية" } satisfies Localized,
  email: "shayma.9t@gmail.com",
  phone: "0554452538",
  tagline: {
    en: "Building intelligent software,\nAI agents, and business automation.",
    ar: "أبني برمجيات ذكية،\nووكلاء ذكاء اصطناعي،\nوحلول أتمتة للأعمال.",
  } satisfies Localized,
  shortDescription: {
    en: "Full Stack Developer specializing in AI agents, intelligent automation, and modern web applications.",
    ar: "مطوّرة Full Stack متخصصة في وكلاء الذكاء الاصطناعي والأتمتة الذكية وتطبيقات الويب الحديثة.",
  } satisfies Localized,
  heroSupporting: {
    en: "I build modern web applications and AI-powered tools that turn real-world problems into practical software solutions.",
    ar: "أطوّر تطبيقات ويب حديثة وأدوات مدعومة بالذكاء الاصطناعي لتحويل المشكلات الواقعية إلى حلول برمجية عملية.",
  } satisfies Localized,
  seoTitle: {
    en: "Shaima Alashaab — Full Stack Developer & AI Agent Engineer",
    ar: "شيماء الأشعب — مطوّرة Full Stack ومهندسة وكلاء ذكاء اصطناعي",
  } satisfies Localized,
  seoDescription: {
    en: "Portfolio of Shaima Alashaab, a Full Stack Developer and AI Agent Engineer building modern web applications, AI agents, and intelligent automation tools.",
    ar: "الموقع الشخصي لشيماء الأشعب، مطوّرة Full Stack ومهندسة وكلاء ذكاء اصطناعي، متخصصة في تطبيقات الويب الحديثة ووكلاء وأدوات الذكاء الاصطناعي.",
  } satisfies Localized,
  cvPath: "/resume/Shaima-Alashaab-CV.pdf",
  cvAvailable: false,
  social: {
    github: null as string | null,
    linkedin: "https://www.linkedin.com/in/shayma-alashaab-2a1a0825a/" as string | null,
  },
  nav: [
    { key: "home", href: "/" },
    { key: "projects", href: "/projects" },
    { key: "aiLab", href: "/ai-lab" },
    { key: "resume", href: "/resume" },
    { key: "contact", href: "/contact" },
  ] as { key: "home" | "projects" | "aiLab" | "resume" | "contact"; href: string }[],
};
