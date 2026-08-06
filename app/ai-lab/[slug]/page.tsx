import { Metadata } from "next";
import { notFound } from "next/navigation";
import { aiProjects, getAiProjectBySlug } from "@/data/ai-projects";
import { AiProjectDetailLayout } from "@/components/ai-lab/ai-project-detail-layout";

export function generateStaticParams() {
  return aiProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getAiProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title.en,
    description: project.shortDescription.en,
  };
}

export default async function AiProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getAiProjectBySlug(slug);
  if (!project) notFound();

  return <AiProjectDetailLayout project={project} />;
}
