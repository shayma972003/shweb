import { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { aiProjects } from "@/data/ai-projects";

const baseUrl = "https://shayma-samir.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/projects", "/ai-lab", "/resume", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  const aiProjectRoutes = aiProjects.map((project) => ({
    url: `${baseUrl}/ai-lab/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes, ...aiProjectRoutes];
}
