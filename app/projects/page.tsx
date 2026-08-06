import { Metadata } from "next";
import { ProjectsIndex } from "@/components/projects/projects-index";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A closer look at the applications and systems Shaima Alashaab has built across full-stack development.",
};

export default function ProjectsPage() {
  return <ProjectsIndex />;
}
