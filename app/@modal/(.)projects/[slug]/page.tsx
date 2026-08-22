import React from "react";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { ProjectModal } from "@/components/ProjectModal";
import { ProjectDetail } from "@/components/ProjectDetail";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function InterceptedProjectModalPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <ProjectModal>
      <ProjectDetail project={project} />
    </ProjectModal>
  );
}
