export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  overview: string;
  tags: string[];
  features: string[];
  tech: string[];
  hasArchitectureDiagram?: boolean;
  hasGallery?: boolean;
  github?: string | null;
  demo?: string | null;
}

export const projects: Project[] = [
  {
    slug: "officeline",
    title: "Officeline",
    subtitle:
      "A B2B e-commerce platform built around customizable office product subscriptions.",
    shortDescription:
      "A B2B e-commerce platform with customizable subscription packages, dynamic pricing, customer dashboards, and business-focused workflows.",
    overview:
      "Officeline is a B2B platform designed to simplify recurring office product orders. Customers can choose subscription packages based on the number of employees, customize their requirements, and manage their orders through a dedicated account.",
    tags: ["Full Stack", "B2B", "E-commerce"],
    features: [
      "Customizable subscription packages",
      "Dynamic pricing and quantities based on employee count",
      "Recurring delivery options",
      "Customer authentication and accounts",
      "Customer dashboard",
      "Order history",
      "Expense tracking",
      "Admin dashboard",
      "Product and package management",
      "Payment integration",
      "Business system integration concepts",
    ],
    tech: [
      "Next.js",
      "React",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "APIs",
      "Authentication",
      "Payment Integration",
    ],
    hasArchitectureDiagram: true,
    hasGallery: true,
    github: null,
    demo: null,
  },
  {
    slug: "school-management-system",
    title: "School Management System",
    subtitle:
      "A full-stack platform designed for modern school and nursery management.",
    shortDescription:
      "A full-stack management system designed for schools and nurseries, covering core management workflows, authentication, notifications, and integrations.",
    overview:
      "A custom management system designed to support schools and nurseries with essential operational workflows and digital management tools.",
    tags: ["Full Stack", "Management System", "Integrations"],
    features: [
      "User management",
      "Authentication",
      "Management workflows",
      "Email notifications",
      "Google and Microsoft integration concepts",
      "Security-focused architecture",
      "Data protection considerations",
    ],
    tech: [
      "Full Stack Development",
      "Backend Systems",
      "Database",
      "APIs",
      "Authentication",
      "External Integrations",
      "Security",
    ],
    hasArchitectureDiagram: true,
    hasGallery: true,
    github: null,
    demo: null,
  },
  {
    slug: "solution",
    title: "Solution",
    subtitle:
      "A professional business web project with a focus on deployment and production infrastructure.",
    shortDescription:
      "A professional business web project involving website development, deployment, hosting, DNS, domain configuration, and business email infrastructure.",
    overview:
      "A business web project involving website development, deployment, domain configuration, DNS management, and business email infrastructure. The focus was on managing a web project from development through to a stable production environment.",
    tags: ["Web Development", "Infrastructure", "Deployment"],
    features: [
      "Web development",
      "Hosting",
      "Domain management",
      "DNS configuration",
      "Business email",
      "SPF",
      "DKIM",
      "DMARC",
      "Production troubleshooting",
    ],
    tech: [
      "Web Development",
      "Hosting",
      "DNS",
      "Email Infrastructure",
      "Production Deployment",
    ],
    hasArchitectureDiagram: false,
    hasGallery: true,
    github: null,
    demo: null,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
