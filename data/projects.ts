import type { Localized } from "@/lib/i18n";

export interface Project {
  slug: string;
  title: Localized;
  subtitle: Localized;
  shortDescription: Localized;
  overview: Localized;
  tags: Localized<string[]>;
  features: Localized<string[]>;
  tech: string[];
  architectureImage?: Localized<{ src: string; width: number; height: number }>;
  hasGallery?: boolean;
  liveUrl?: string;
  coverImage?: string;
  heroImage?: { src: string; width: number; height: number };
  galleryImages?: { src: string; width: number; height: number }[];
}

export const projects: Project[] = [
  {
    slug: "officeline",
    title: { en: "OfficeLine", ar: "OfficeLine" },
    subtitle: {
      en: "A bilingual B2B office-supply platform built around customizable packages, recurring orders, and business management.",
      ar: "منصة B2B ثنائية اللغة لتوريد مستلزمات المكاتب، مبنية حول باقات قابلة للتخصيص وطلبات متكررة وإدارة الأعمال.",
    },
    shortDescription: {
      en: "A full-stack B2B platform for customizable office-supply packages, recurring orders, customer accounts, and business management.",
      ar: "منصة B2B متكاملة لباقات مستلزمات مكتبية قابلة للتخصيص، وطلبات متكررة، وحسابات عملاء، وإدارة أعمال.",
    },
    overview: {
      en: "OfficeLine is a full-stack B2B platform that lets businesses browse office products, build customized packages, and place recurring orders through a dedicated customer dashboard. An admin console handles products, packages, orders, customers, and business workflows.",
      ar: "منصة أعمال متكاملة لتوريد مستلزمات المكاتب، تتيح للشركات إنشاء باقات مخصصة وإدارة الطلبات المتكررة وحساباتها من خلال لوحة تحكم مخصصة. وتوفر لوحة تحكم إدارية لإدارة المنتجات والباقات والطلبات والعملاء وسير عمل الأعمال.",
    },
    tags: {
      en: ["Full Stack", "B2B", "E-commerce"],
      ar: ["Full Stack", "B2B", "تجارة إلكترونية"],
    },
    features: {
      en: [
        "Customizable product packages",
        "Dynamic pricing based on employee count",
        "Recurring orders and subscriptions",
        "Customer accounts and dashboard",
        "Cart and checkout",
        "Order management",
        "Admin management for products, packages, and orders",
        "Invoices and business workflows",
      ],
      ar: [
        "باقات منتجات قابلة للتخصيص",
        "تسعير ديناميكي حسب عدد الموظفين",
        "طلبات واشتراكات متكررة",
        "حسابات ولوحة تحكم للعملاء",
        "سلة الشراء وإتمام الطلب",
        "إدارة الطلبات",
        "إدارة إدارية للمنتجات والباقات والطلبات",
        "الفواتير وسير عمل الأعمال",
      ],
    },
    tech: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "Prisma",
      "PostgreSQL / Neon",
      "Authentication",
      "REST APIs",
      "Server Actions",
      "Zustand",
      "Nodemailer",
      "next-intl",
    ],
    architectureImage: {
      ar: { src: "/officeline-architecture-ar.webp", width: 1536, height: 1024 },
      en: { src: "/officeline-architecture-en.webp", width: 1536, height: 1024 },
    },
    hasGallery: true,
    liveUrl: "https://officeline.vercel.app/ar",
    coverImage: "/officeline-cover.webp",
    galleryImages: [
      { src: "/officeline1.webp", width: 1519, height: 727 },
      { src: "/officeline2.webp", width: 1535, height: 724 },
    ],
  },
  {
    slug: "school-management-system",
    title: { en: "School Management System", ar: "نظام إدارة المدارس والحضانات" },
    subtitle: {
      en: "A multi-tenant school management platform built for schools and nurseries.",
      ar: "منصة متعددة المستأجرين لإدارة المدارس والحضانات.",
    },
    shortDescription: {
      en: "A multi-tenant platform for managing students, teachers, classes, attendance, finances, and school operations.",
      ar: "منصة متعددة المستأجرين لإدارة الطلاب والمعلمين والفصول والحضور والشؤون المالية والعمليات المدرسية.",
    },
    overview: {
      en: "A full-stack management platform designed to centralize school operations across students, teachers, classes, attendance, finances, and administration. The system is designed as a multi-tenant platform, allowing multiple schools to operate within the same application while keeping each school's data isolated.",
      ar: "منصة متكاملة لإدارة المدارس والحضانات تشمل الطلاب والمعلمين والفصول والحضور والعمليات المالية والإدارية، مع بنية متعددة المستأجرين لعزل بيانات كل منشأة.",
    },
    tags: {
      en: ["Full Stack", "Management System", "Multi-Tenant"],
      ar: ["Full Stack", "نظام إدارة", "متعدد المستأجرين"],
    },
    features: {
      en: [
        "Student and teacher management",
        "Class management",
        "Attendance tracking",
        "Financial management and reporting",
        "Invoices and expense management",
        "School-specific dashboards",
        "Multi-tenant data isolation",
        "Admin management",
        "Email and WhatsApp notifications",
        "PDF invoice and report generation",
      ],
      ar: [
        "إدارة الطلاب والمعلمين",
        "إدارة الفصول الدراسية",
        "متابعة الحضور والغياب",
        "الإدارة المالية والتقارير",
        "الفواتير وإدارة المصروفات",
        "لوحات تحكم خاصة بكل مدرسة",
        "عزل بيانات كل منشأة (متعدد المستأجرين)",
        "إدارة إدارية شاملة",
        "إشعارات عبر البريد الإلكتروني وواتساب",
        "إصدار الفواتير والتقارير بصيغة PDF",
      ],
    },
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "App Router",
      "API Routes",
      "Prisma",
      "PostgreSQL / Neon",
      "NextAuth",
      "Session-based access control",
      "Resend",
      "Twilio",
      "React PDF",
    ],
    architectureImage: {
      ar: { src: "/daycare-architecture-ar.webp", width: 1536, height: 1024 },
      en: { src: "/daycare-architecture-en.webp", width: 1536, height: 907 },
    },
    hasGallery: true,
    coverImage: "/daycare-cover.webp",
    heroImage: { src: "/daycare-hero.webp", width: 1523, height: 725 },
    galleryImages: [
      { src: "/daycare1.webp", width: 1528, height: 730 },
      { src: "/daycare2.webp", width: 1529, height: 729 },
    ],
  },
  {
    slug: "solution",
    title: { en: "Solution", ar: "Solution" },
    subtitle: {
      en: "A bilingual corporate website and digital platform for Solution Debt Collection.",
      ar: "موقع مؤسسي وأدوات رقمية ثنائية اللغة لشركة Solution لتحصيل الديون.",
    },
    shortDescription: {
      en: "A bilingual corporate platform combining a modern marketing website with business communication and operational tools.",
      ar: "منصة مؤسسية ثنائية اللغة تجمع بين موقع تسويقي حديث وأدوات تواصل وحلول تشغيلية.",
    },
    overview: {
      en: "A bilingual Arabic/English corporate website built with Next.js, designed around a modern marketing experience, business communication, and supporting digital tools. The project includes localized Arabic and English experiences, responsive marketing pages, business communication workflows, and standalone operational tools.",
      ar: "منصة رقمية ثنائية اللغة لشركة Solution تجمع بين الموقع المؤسسي الحديث وأدوات التواصل والحلول التشغيلية. يشمل المشروع تجربة عربية وإنجليزية محلّية، وصفحات تسويقية متجاوبة، وسير عمل للتواصل مع العملاء، وأدوات تشغيلية مستقلة.",
    },
    tags: {
      en: ["Next.js", "Bilingual", "Business Platform"],
      ar: ["Next.js", "ثنائي اللغة", "منصة أعمال"],
    },
    features: {
      en: [
        "Arabic / English localization",
        "RTL support",
        "Responsive marketing pages",
        "Server-rendered pages",
        "Contact and recruitment workflows",
        "Business email integration",
        "Standalone claims distribution tool",
        "SEO and structured data",
        "Sitemap and robots configuration",
      ],
      ar: [
        "دعم اللغتين العربية والإنجليزية",
        "دعم اتجاه الكتابة من اليمين لليسار (RTL)",
        "صفحات تسويقية متجاوبة",
        "صفحات مُصيَّرة من جهة الخادم",
        "سير عمل للتواصل والتوظيف",
        "تكامل بريد إلكتروني للأعمال",
        "أداة مستقلة لتوزيع المطالبات",
        "تحسين محركات البحث وبيانات منظّمة",
        "إعداد خريطة الموقع وملف robots",
      ],
    },
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "next-intl",
      "Microsoft Graph API",
      "Google Maps",
      "Email APIs",
      "App Router",
      "Server-side rendering",
      "JSON-LD",
      "SEO / sitemap",
    ],
    architectureImage: {
      ar: { src: "/solution-architecture-ar.webp", width: 1536, height: 1024 },
      en: { src: "/solution-architecture-en.webp", width: 1536, height: 962 },
    },
    hasGallery: true,
    liveUrl: "https://solution.com.sa/ar",
    coverImage: "/solution-cover.webp",
    galleryImages: [
      { src: "/solution1.webp", width: 578, height: 700 },
      { src: "/solution2.webp", width: 550, height: 687 },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
