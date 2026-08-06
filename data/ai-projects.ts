import type { Localized } from "@/lib/i18n";

export interface AiProject {
  slug: string;
  title: Localized;
  badge: Localized;
  shortDescription: Localized;
  overview: Localized;
  tags: Localized<string[]>;
  workflowSteps: Localized<string[]>;
  reportSections?: Localized<string[]>;
  disclaimer?: Localized;
  problem?: Localized;
  solution?: Localized;
  factors?: Localized<string[]>;
  outcome?: Localized;
  autonomyNote?: Localized;
  /** External URL used to power the live embedded preview hero, when available. */
  demo?: string | null;
  hasSampleReport?: boolean;
  /** Override the "Agent Workflow" section heading for non-agent tools. */
  workflowLabel?: Localized;
  coverImage?: string;
  heroImage?: { src: string; width: number; height: number };
  galleryImages?: { src: string; width: number; height: number }[];
  hideScreenshotsSection?: boolean;
}

export const aiProjects: AiProject[] = [
  {
    slug: "website-development-crew",
    title: { en: "AI Website Development Crew", ar: "فريق وكلاء تطوير المواقع" },
    badge: { en: "CrewAI", ar: "CrewAI" },
    shortDescription: {
      en: "A multi-agent AI system designed to automate website development workflows by coordinating specialized agents across planning, development, testing, and review.",
      ar: "نظام ذكاء اصطناعي متعدد الوكلاء يؤتمت سير عمل تطوير المواقع من خلال تنسيق وكلاء متخصصين عبر مراحل التخطيط والتطوير والاختبار والمراجعة.",
    },
    overview: {
      en: "A multi-agent AI system designed to streamline website development by giving specialized agents different responsibilities throughout the development lifecycle.",
      ar: "نظام ذكاء اصطناعي متعدد الوكلاء يهدف لتبسيط عملية تطوير المواقع من خلال إسناد مسؤوليات مختلفة لوكلاء متخصصين على امتداد دورة التطوير.",
    },
    tags: {
      en: ["CrewAI", "Multi-Agent Systems", "AI Agents"],
      ar: ["CrewAI", "أنظمة متعددة الوكلاء", "وكلاء ذكاء اصطناعي"],
    },
    workflowSteps: {
      en: ["User Request", "Planning Agent", "Development Agents", "Testing", "Review"],
      ar: ["طلب المستخدم", "وكيل التخطيط", "وكلاء التطوير", "الاختبار", "المراجعة"],
    },
    autonomyNote: {
      en: "Agents coordinate across each stage of the workflow under defined roles and handoffs — this is not a claim of full autonomy.",
      ar: "تتنسق الوكلاء عبر كل مرحلة من مراحل سير العمل ضمن أدوار وتسليمات محددة مسبقًا — وهذا لا يعني استقلالية كاملة عن الإشراف.",
    },
    demo: null,
  },
  {
    slug: "stock-research-crew",
    title: { en: "AI Stock Research Crew", ar: "فريق وكلاء البحث في الأسهم" },
    badge: { en: "CrewAI", ar: "CrewAI" },
    shortDescription: {
      en: "A multi-agent research system that analyzes publicly available company and market information, evaluates financial factors and risks, and generates structured investment research reports.",
      ar: "نظام بحث متعدد الوكلاء يحلّل معلومات الشركات والأسواق المتاحة للعامة، ويقيّم العوامل المالية والمخاطر، وينتج تقارير بحث استثماري منظّمة.",
    },
    overview: {
      en: "A multi-agent AI research system that gathers and analyzes publicly available company and market information to produce structured research reports.",
      ar: "نظام بحث ذكاء اصطناعي متعدد الوكلاء يجمع ويحلّل المعلومات المتاحة للعامة عن الشركات والأسواق لإنتاج تقارير بحث منظّمة.",
    },
    tags: {
      en: ["CrewAI", "AI Agents", "Research", "Financial Analysis"],
      ar: ["CrewAI", "وكلاء ذكاء اصطناعي", "بحث", "تحليل مالي"],
    },
    workflowSteps: {
      en: ["Research", "Financial Analysis", "Market Analysis", "Risk Analysis", "Report Generation"],
      ar: ["البحث", "التحليل المالي", "تحليل السوق", "تحليل المخاطر", "إنتاج التقرير"],
    },
    reportSections: {
      en: [
        "Company Overview",
        "Financial Factors",
        "Growth Potential",
        "Market Position",
        "Risk Factors",
        "Research Summary",
      ],
      ar: [
        "نبذة عن الشركة",
        "العوامل المالية",
        "إمكانات النمو",
        "الموقع في السوق",
        "عوامل المخاطر",
        "ملخص البحث",
      ],
    },
    disclaimer: {
      en: "This project is for educational and research purposes only and is not financial advice or a recommendation to buy or sell any security.",
      ar: "هذا المشروع لأغراض تعليمية وبحثية فقط، ولا يُعد استشارة مالية أو توصية بشراء أو بيع أي أداة مالية.",
    },
    demo: null,
    coverImage: "/researcher-cover.png",
    heroImage: { src: "/researcher-hero.webp", width: 773, height: 587 },
    galleryImages: [
      { src: "/researcher1.webp", width: 820, height: 729 },
      { src: "/researcher2.webp", width: 833, height: 722 },
    ],
  },
  {
    slug: "claims-distribution-tool",
    title: { en: "Claims Distribution Tool", ar: "أداة توزيع المطالبات" },
    badge: { en: "Automation", ar: "أتمتة" },
    shortDescription: {
      en: "A browser-based tool designed to distribute collection claims across employees using configurable allocation logic.",
      ar: "أداة مستقلة لتوزيع مطالبات التحصيل وتحقيق توازن أفضل في أعباء العمل بين الموظفين باستخدام قواعد توزيع قابلة للتخصيص.",
    },
    overview: {
      en: "The Claims Distribution Tool is a standalone business tool designed to distribute collection claims more fairly across employees. It addresses a common operational problem: manual allocation can result in one employee receiving most of the newest or highest-value claims while others receive a less balanced workload. The tool analyzes claim attributes and employee workloads, then applies configurable allocation rules to produce a more balanced distribution.",
      ar: "أداة توزيع المطالبات أداة أعمال مستقلة صُممت لتوزيع مطالبات التحصيل بعدالة أكبر بين الموظفين. تعالج الأداة مشكلة تشغيلية شائعة: قد يؤدي التوزيع اليدوي إلى حصول موظف واحد على معظم المطالبات الجديدة أو الأعلى قيمة، بينما يحصل آخرون على عبء عمل أقل توازنًا. تحلّل الأداة خصائص المطالبات وأعباء عمل الموظفين، ثم تطبّق قواعد توزيع قابلة للتخصيص للوصول إلى توزيع أكثر توازنًا.",
    },
    tags: {
      en: ["Automation", "Business Logic", "Data Distribution"],
      ar: ["أتمتة", "منطق أعمال", "توزيع بيانات"],
    },
    workflowSteps: {
      en: ["Claims Intake", "Attribute & Workload Analysis", "Allocation Rules Engine", "Balanced Distribution"],
      ar: ["استلام المطالبات", "تحليل الخصائص وعبء العمل", "محرك قواعد التوزيع", "التوزيع المتوازن"],
    },
    workflowLabel: { en: "Allocation Workflow", ar: "سير عمل التوزيع" },
    disclaimer: {
      en: "This is a deterministic algorithmic automation tool, not a machine-learning system or AI agent.",
      ar: "هذه الأداة تعتمد على منطق خوارزمي محدد وقواعد توزيع قابلة للتخصيص، وليست نظام ذكاء اصطناعي أو وكيلًا للذكاء الاصطناعي.",
    },
    problem: {
      en: "Manual claim distribution can create an uneven workload. One employee may receive a disproportionate number of new or high-value claims while others receive fewer or less valuable claims.",
      ar: "قد يؤدي التوزيع اليدوي للمطالبات إلى عبء عمل غير متوازن. فقد يحصل أحد الموظفين على عدد غير متناسب من المطالبات الجديدة أو عالية القيمة، بينما يحصل آخرون على عدد أقل أو مطالبات أقل قيمة.",
    },
    solution: {
      en: "The tool evaluates claim and workload attributes and applies configurable allocation logic to distribute claims more consistently across employees.",
      ar: "تُقيّم الأداة خصائص المطالبات وأعباء عمل الموظفين، وتطبّق منطق توزيع قابل للتخصيص لتوزيع المطالبات بشكل أكثر اتساقًا بين الموظفين.",
    },
    factors: {
      en: ["Claim value", "Claim age", "Priority", "Current workload", "Number of assigned claims"],
      ar: ["قيمة المطالبة", "عمر المطالبة", "الأولوية", "عبء العمل الحالي", "عدد المطالبات المسندة"],
    },
    outcome: {
      en: "A more balanced and transparent allocation process.",
      ar: "عملية توزيع أكثر توازنًا وشفافية.",
    },
    autonomyNote: {
      en: "This tool is built on configurable, deterministic allocation logic rather than machine learning — an algorithmic automation tool, not an AI agent.",
      ar: "بُنيت هذه الأداة على منطق توزيع محدد وقابل للتخصيص وليس على تعلّم آلي — فهي أداة أتمتة خوارزمية وليست وكيل ذكاء اصطناعي.",
    },
    demo: "https://solution.com.sa/ar/tools/claims-distribution",
    coverImage: "/tool-gallery.webp",
    hideScreenshotsSection: true,
  },
];

export function getAiProjectBySlug(slug: string) {
  return aiProjects.find((p) => p.slug === slug);
}
