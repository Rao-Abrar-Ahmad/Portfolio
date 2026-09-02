import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight, Lock, Github, Globe } from "lucide-react";
import { Project } from "@/data/projects";
import { TapeStrip, Thumbtack } from "./HandDrawnDecorations";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  // Alternate rotation and decoration per card for organic sketch feel
  const rotations = ["-rotate-1", "rotate-2", "-rotate-2", "rotate-1"];
  const rotation = rotations[index % rotations.length];

  const pillStyles = [
    "bg-postit text-pencil border-pencil",
    "bg-pen-blue/10 text-pen-blue border-pen-blue",
    "bg-accent-red/10 text-accent-red border-accent-red",
    "bg-pen-green/10 text-pen-green border-pen-green",
  ];

  const isTape = index % 2 === 0;

  return (
    <div
      className={`group block relative p-5 sm:p-6 border-[3px] border-pencil shadow-hard-lg bg-white ${
        index % 2 === 0 ? "wobbly-border-1" : "wobbly-border-2"
      } ${rotation} hover:rotate-0 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between`}
    >
      {/* Card Header Decoration */}
      {isTape ? (
        <TapeStrip rotation={index % 2 === 0 ? "rotate-2" : "-rotate-2"} />
      ) : (
        <Thumbtack />
      )}

      <div>
        {/* Project Thumbnail Image (Clickable for Modal/Page Navigation) */}
        <Link
          href={`/projects/${project.slug}`}
          scroll={false}
          className="block relative w-full h-48 sm:h-52 mb-4 border-2 border-pencil rounded-lg overflow-hidden bg-muted-paper/30 group-hover:shadow-hard-sm transition-shadow"
        >
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {project.confidential && (
            <div className="absolute top-2 right-2 px-2.5 py-1 bg-white/90 border border-pencil rounded-full font-bold text-xs flex items-center gap-1 shadow-hard-sm">
              <Lock size={12} strokeWidth={2.5} className="text-accent-red" />
              <span>Confidential</span>
            </div>
          )}
        </Link>

        {/* Project Title & Summary */}
        <div className="flex flex-col gap-2">
          <Link href={`/projects/${project.slug}`} scroll={false} className="group/title inline-block">
            <h3 className="text-2xl font-bold text-pencil font-kalam group-hover:text-accent-red transition-colors relative inline-block">
              <span>{project.title}</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-accent-red/40 origin-left scale-x-0 group-hover/title:scale-x-100 transition-transform duration-300 rounded-full" />
            </h3>
          </Link>

          <p className="text-base text-pencil/90 line-clamp-3 font-patrick">
            {project.summary}
          </p>

          {/* Colorful Tech Stack Badges */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.stack.slice(0, 4).map((tech, techIdx) => {
              const pillStyle = pillStyles[techIdx % pillStyles.length];
              return (
                <span
                  key={techIdx}
                  className={`px-2.5 py-0.5 border text-xs font-bold rounded-md shadow-hard-sm ${pillStyle}`}
                >
                  {tech}
                </span>
              );
            })}
            {project.stack.length > 4 && (
              <span className="px-2 py-0.5 border border-pencil text-xs font-bold rounded-md bg-muted-paper text-pencil">
                +{project.stack.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer CTAs */}
      <div className="pt-5 mt-4 border-t-2 border-dashed border-pencil/20 flex items-center justify-between gap-2">
        {/* Direct Link Icons (GitHub & Live Demo) */}
        <div className="flex items-center gap-2">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="View GitHub Repository"
              aria-label="GitHub Repository"
              className="p-2 bg-white border-2 border-pencil rounded-md shadow-hard-sm hover:bg-postit hover:-rotate-6 transition-all text-pencil"
            >
              <Github size={18} strokeWidth={2.5} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="View Live Demo"
              aria-label="Live Demo"
              className="p-2 bg-white border-2 border-pencil rounded-md shadow-hard-sm hover:bg-postit hover:rotate-6 transition-all text-pen-blue"
            >
              <Globe size={18} strokeWidth={2.5} />
            </a>
          )}
        </div>

        {/* View Case Study CTA */}
        <Link
          href={`/projects/${project.slug}`}
          scroll={false}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-postit text-pencil border-2 border-pencil rounded-md font-bold text-sm shadow-hard-sm hover:bg-white hover:translate-x-0.5 transition-all font-kalam"
        >
          <span>Case Study</span>
          <ArrowRight size={16} strokeWidth={2.5} className="text-accent-red" />
        </Link>
      </div>
    </div>
  );
}
