export interface Certification {
  title: string;
  provider: string;
  status?: string;
  description: string;
}

export const certifications: Certification[] = [
  {
    title: "IBM Full Stack Software Developer Professional Certificate",
    provider: "IBM / Coursera",
    status: "In Progress",
    description:
      "Professional development focused on modern full-stack software development and software engineering.",
  },
  {
    title: "Agentic AI Engineer",
    provider: "Udemy",
    description:
      "Professional training focused on Agentic AI, AI agents, multi-agent systems, and intelligent AI workflows.",
  },
];
