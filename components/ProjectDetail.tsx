import React from "react";
import Image from "next/image";
import { ExternalLink, Github, Lock, CheckCircle2, Layers, Award } from "lucide-react";
import { Project } from "@/data/projects";
import { TapeStrip } from "./HandDrawnDecorations";

type ProjectDetailProps = {
  project: Project;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  const images = project.images && project.images.length > 0 ? project.images : [project.thumbnail];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left Column: Sticky Project Meta & Specs */}
      <div className="lg:col-span-6 lg:sticky lg:top-6 space-y-6">
        <div className="bg-white border-[3px] border-pencil p-6 sm:p-8 shadow-hard-lg wobbly-border-1 relative">
          <TapeStrip rotation="-rotate-1" />

          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-pencil font-kalam leading-tight">
              {project.title}
            </h1>

            {project.role && (
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-postit border-2 border-pencil rounded-md font-bold text-sm text-pencil shadow-hard-sm">
                <Award size={16} strokeWidth={2.5} className="text-accent-red" />
                <span>{project.role}</span>
              </div>
            )}

            <p className="text-lg text-pencil/90 leading-relaxed font-patrick">
              {project.description}
            </p>
          </div>

          {/* Metrics Section */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="mt-6 pt-6 border-t-2 border-dashed border-pencil/20">
              <h3 className="text-lg font-bold text-pencil font-kalam mb-3 flex items-center gap-2">
                <CheckCircle2 size={18} strokeWidth={2.5} className="text-pen-blue" />
                Key Achievements & Metrics
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {project.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 bg-muted-paper/50 border border-pencil rounded-md text-pencil font-bold text-base shadow-hard-sm flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-accent-red" />
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div className="mt-6 pt-6 border-t-2 border-dashed border-pencil/20">
            <h3 className="text-lg font-bold text-pencil font-kalam mb-3 flex items-center gap-2">
              <Layers size={18} strokeWidth={2.5} className="text-pencil" />
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-white border-2 border-pencil text-sm font-bold rounded-md shadow-hard-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-red text-white font-bold text-lg border-[3px] border-pencil shadow-hard wobbly-border-1 btn-hand-drawn"
              >
                <ExternalLink size={18} strokeWidth={2.5} />
                <span>Visit Live Project</span>
              </a>
            )}

            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-pencil font-bold text-lg border-[3px] border-pencil shadow-hard wobbly-border-2 btn-hand-drawn"
              >
                <Github size={18} strokeWidth={2.5} />
                <span>View Source</span>
              </a>
            )}

            {project.confidential && (
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-postit text-pencil font-bold text-lg border-[3px] border-pencil shadow-hard wobbly-border-1">
                <Lock size={18} strokeWidth={2.5} className="text-accent-red" />
                <span>Details Available on Request</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right Column: Stacked Image Gallery */}
      <div className="lg:col-span-6 space-y-6">
        {images.map((imgUrl, idx) => (
          <div
            key={idx}
            className="relative w-full h-64 sm:h-80 md:h-96 border-[3px] border-pencil rounded-xl overflow-hidden shadow-hard-lg bg-white p-2"
          >
            <div className="relative w-full h-full border-2 border-pencil rounded-lg overflow-hidden">
              <Image
                src={imgUrl}
                alt={`${project.title} screenshot ${idx + 1}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority={idx === 0}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
