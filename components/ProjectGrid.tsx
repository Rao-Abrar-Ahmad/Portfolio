"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

type FilterCategory = "all" | "ai" | "saas" | "ecommerce" | "mobile";

export function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const categories: { key: FilterCategory; label: string; count: number }[] = [
    { key: "all", label: "All Projects", count: projects.length },
    {
      key: "ai",
      label: "AI & RAG",
      count: projects.filter((p) => p.category === "ai").length,
    },
    {
      key: "saas",
      label: "SaaS Platforms",
      count: projects.filter((p) => p.category === "saas").length,
    },
    {
      key: "ecommerce",
      label: "E-commerce",
      count: projects.filter((p) => p.category === "ecommerce").length,
    },
    {
      key: "mobile",
      label: "Mobile & Desktop",
      count: projects.filter((p) => p.category === "mobile").length,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-10">
        <div className="inline-block px-4 py-1.5 bg-postit border-2 border-pencil wobbly-badge shadow-hard-sm text-pencil font-bold text-lg mb-3 rotate-1">
          Featured Work
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-pencil">
          Project{" "}
          <span className="text-accent-red font-kalam underline">Gallery</span>
        </h2>
        <p className="text-xl text-pencil/80 mt-2 font-patrick max-w-2xl mx-auto">
          Explore production platforms, AI RAG systems, e-commerce stores, and open-source tools. Filter by domain or click any card for case studies.
        </p>
      </div>

      {/* Hand-Drawn Post-It Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
        {categories.map((cat) => {
          const isActive = activeFilter === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => setActiveFilter(cat.key)}
              className={`px-4 py-2 border-2 border-pencil font-bold text-sm sm:text-base font-kalam shadow-hard-sm transition-all duration-200 ${
                isActive
                  ? "bg-accent-red text-white -rotate-1 scale-105 shadow-hard"
                  : "bg-white text-pencil hover:bg-postit hover:rotate-1"
              } wobbly-border-1`}
            >
              <span>{cat.label}</span>
              <span
                className={`ml-1.5 px-2 py-0.5 text-xs rounded-full border border-pencil ${
                  isActive ? "bg-white text-pencil" : "bg-muted-paper text-pencil/80"
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* 3-Column Animated Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} index={idx} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
