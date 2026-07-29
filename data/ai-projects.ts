export interface AiProject {
  slug: string;
  title: string;
  badge: string;
  shortDescription: string;
  overview: string;
  tags: string[];
  workflowSteps: string[];
  reportSections?: string[];
  disclaimer?: string;
  problem?: string;
  solution?: string;
  factors?: string[];
  outcome?: string;
  autonomyNote?: string;
  github?: string | null;
  demo?: string | null;
  hasSampleReport?: boolean;
}

export const aiProjects: AiProject[] = [
  {
    slug: "website-development-crew",
    title: "AI Website Development Crew",
    badge: "CrewAI",
    shortDescription:
      "A multi-agent AI system designed to automate website development workflows by coordinating specialized agents across planning, development, testing, and review.",
    overview:
      "A multi-agent AI system designed to streamline website development by giving specialized agents different responsibilities throughout the development lifecycle.",
    tags: ["CrewAI", "Multi-Agent Systems", "AI Agents"],
    workflowSteps: [
      "User Request",
      "Planning Agent",
      "Development Agents",
      "Testing",
      "Review",
    ],
    autonomyNote:
      "Agents coordinate across each stage of the workflow under defined roles and handoffs — this is not a claim of full autonomy.",
    github: null,
    demo: null,
  },
  {
    slug: "stock-research-crew",
    title: "AI Stock Research Crew",
    badge: "CrewAI",
    shortDescription:
      "A multi-agent research system that analyzes publicly available company and market information, evaluates financial factors and risks, and generates structured investment research reports.",
    overview:
      "A multi-agent AI research system that gathers and analyzes publicly available company and market information to produce structured research reports.",
    tags: ["CrewAI", "AI Agents", "Research", "Financial Analysis"],
    workflowSteps: [
      "Research",
      "Financial Analysis",
      "Market Analysis",
      "Risk Analysis",
      "Report Generation",
    ],
    reportSections: [
      "Company Overview",
      "Financial Factors",
      "Growth Potential",
      "Market Position",
      "Risk Factors",
      "Research Summary",
    ],
    disclaimer:
      "This project is for educational and research purposes only and is not financial advice or a recommendation to buy or sell any security.",
    hasSampleReport: true,
    github: null,
    demo: null,
  },
  {
    slug: "claims-distribution-tool",
    title: "Intelligent Claims Distribution Tool",
    badge: "AI Tools",
    shortDescription:
      "An intelligent business tool designed to distribute collection claims fairly across employees using configurable allocation rules and workload balancing.",
    overview:
      "A business-focused tool designed to distribute collection claims fairly across employees. The system is designed to avoid situations where one employee receives most of the newest claims or the highest-value claims.",
    tags: ["AI Tools", "Automation", "Business Logic", "Data Distribution"],
    workflowSteps: [
      "Claims Intake",
      "Attribute & Workload Analysis",
      "Allocation Rules Engine",
      "Balanced Distribution",
    ],
    problem:
      "When claims are distributed manually, employees may end up with an unbalanced workload. One person may receive most of the newest claims, while another may receive a disproportionate number of high-value claims.",
    solution:
      "The tool analyzes claim attributes and employee workloads and applies configurable allocation logic to create a more balanced distribution.",
    factors: ["Claim value", "Claim age", "Priority", "Workload", "Number of assigned claims"],
    outcome: "A more balanced and transparent allocation process.",
    autonomyNote:
      "This tool is built on configurable, deterministic allocation logic rather than machine learning — an algorithmic automation tool, not an AI agent.",
    github: null,
    demo: null,
  },
];

export function getAiProjectBySlug(slug: string) {
  return aiProjects.find((p) => p.slug === slug);
}
