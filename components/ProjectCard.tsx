import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight, Lock } from "lucide-react";
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
  
  const isPostit = index === 0 || index === 2; // Standout post-it yellow background for highlight cards
  const isTape = index % 2 === 0;

  return (
    <Link
      href={`/projects/${project.slug}`}
      scroll={false}
      className={`group block relative p-5 sm:p-6 border-[3px] border-pencil shadow-hard-lg ${
        isPostit ? "bg-postit" : "bg-white"
      } ${
        index % 2 === 0 ? "wobbly-border-1" : "wobbly-border-2"
      } ${rotation} hover:rotate-0 hover:-translate-y-1 transition-all duration-200 cursor-pointer`}
    >
      {/* Card Header Decoration */}
      {isTape ? <TapeStrip rotation={index % 2 === 0 ? "rotate-2" : "-rotate-2"} /> : <Thumbtack />}

      {/* Project Thumbnail Image */}
      <div className="relative w-full h-48 sm:h-52 mb-4 border-2 border-pencil rounded-lg overflow-hidden bg-muted-paper/30">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {project.confidential && (
          <div className="absolute top-2 right-2 px-2.5 py-1 bg-white/90 border border-pencil rounded-full font-bold text-xs flex items-center gap-1 shadow-hard-sm">
            <Lock size={12} strokeWidth={2.5} className="text-accent-red" />
            <span>Confidential</span>
          </div>
        )}
      </div>

      {/* Project Info */}
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold text-pencil font-kalam group-hover:text-accent-red transition-colors flex items-center justify-between">
          <span>{project.title}</span>
          <ArrowRight size={20} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
        </h3>

        <p className="text-lg text-pencil/90 line-clamp-2 font-patrick">
          {project.summary}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.stack.slice(0, 4).map((tech, techIdx) => (
            <span
              key={techIdx}
              className="px-2.5 py-0.5 bg-white/90 border border-pencil text-xs font-bold rounded-md shadow-hard-sm"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="px-2 py-0.5 border border-pencil text-xs font-bold rounded-md bg-muted-paper">
              +{project.stack.length - 4}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
