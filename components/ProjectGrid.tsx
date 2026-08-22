import React from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid() {
  return (
    <section className="py-16 md:py-24 max-w-5xl mx-auto px-6">
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-1.5 bg-postit border-2 border-pencil wobbly-badge shadow-hard-sm text-pencil font-bold text-lg mb-3 rotate-1">
          Featured Work
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-pencil">
          Project{" "}
          <span className="text-accent-red font-kalam underline">Gallery</span>
        </h2>
        <p className="text-xl text-pencil/80 mt-2 font-patrick max-w-2xl mx-auto">
          Click any card to explore full case studies, metrics, tech stack, and
          interactive previews.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {projects.map((project, idx) => (
          <ProjectCard key={project.slug} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}
