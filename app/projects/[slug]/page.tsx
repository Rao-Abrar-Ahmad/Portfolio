import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectDetail } from "@/components/ProjectDetail";
import { Header } from "@/components/Header";
import { Contact } from "@/components/Contact";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function StandaloneProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Header />
      <div className="max-w-6xl mx-auto px-6 py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-pencil rounded-lg shadow-hard-sm hover:bg-postit hover:-translate-x-1 transition-all mb-8 font-bold text-lg text-pencil"
        >
          <ArrowLeft size={20} strokeWidth={2.5} />
          <span>Back to Portfolio Grid</span>
        </Link>

        <ProjectDetail project={project} />
      </div>
      <Contact />
    </main>
  );
}
