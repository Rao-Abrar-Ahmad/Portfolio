"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Code2,
  Cpu,
  Database,
  Cloud,
  Terminal,
  ShieldCheck,
  Sparkles,
  Layers,
  Sparkle,
} from "lucide-react";
import { Site } from "@/data/site";
import { resumeData } from "@/data/resume";
import { TapeStrip, Thumbtack } from "./HandDrawnDecorations";
import { TechIcon } from "./TechIcons";

export function AboutMe() {
  // ---------------------------------------------------------------------------
  // 1. Streaming Typewriter Text Effect for "My Story"
  // ---------------------------------------------------------------------------
  const fullStoryText = [
    `I’m ${Site.name}, a Full Stack & AI Developer with over 3 years of experience building scalable web applications, SaaS platforms, and AI integrations.`,
    `My passion lies in bridging high-performance backend architecture (Node.js, Python Flask, PostgreSQL, OpenAI RAG pipelines) with clean, hand-crafted frontend interfaces.`,
    `Having led developer teams at RF Technologies and built AI platforms like VaultIQ Canada, I take projects end-to-end—from database design and REST APIs to cloud deployment on Linux VPS, AWS, Vercel, and Cloudflare.`,
  ];

  const [displayedParagraphs, setDisplayedParagraphs] = useState<string[]>([
    "",
    "",
    "",
  ]);
  const [activeParagraphIdx, setActiveParagraphIdx] = useState<number>(0);
  const [isStreaming, setIsStreaming] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasTriggered) {
          setHasTriggered(true);
          startStreaming();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasTriggered]);

  const startStreaming = () => {
    setIsStreaming(true);
    let pIdx = 0;
    let charIdx = 0;
    const currentText = ["", "", ""];

    const interval = setInterval(() => {
      if (pIdx >= fullStoryText.length) {
        clearInterval(interval);
        setIsStreaming(false);
        return;
      }

      const targetParagraph = fullStoryText[pIdx];
      currentText[pIdx] += targetParagraph[charIdx];
      setDisplayedParagraphs([...currentText]);
      setActiveParagraphIdx(pIdx);
      charIdx++;

      if (charIdx >= targetParagraph.length) {
        pIdx++;
        charIdx = 0;
      }
    }, 18);
  };

  const handleSkipStreaming = () => {
    setDisplayedParagraphs([...fullStoryText]);
    setIsStreaming(false);
  };

  // ---------------------------------------------------------------------------
  // 2. Full-Width Categorized Tech Stack Tabs & Grid
  // ---------------------------------------------------------------------------
  type TechCategoryKey = "core" | "frontend" | "backend" | "ai" | "database" | "devops";

  const [activeCategory, setActiveCategory] = useState<TechCategoryKey>("core");

  const categories: { key: TechCategoryKey; label: string; icon: React.ElementType }[] = [
    { key: "core", label: "Core Stack", icon: Sparkles },
    { key: "frontend", label: "Frontend", icon: Code2 },
    { key: "backend", label: "Backend & APIs", icon: Cpu },
    { key: "ai", label: "AI & RAG", icon: Sparkle },
    { key: "database", label: "Database & Cloud", icon: Database },
    { key: "devops", label: "DevOps & Tools", icon: Terminal },
  ];

  const getSkillsForCategory = (key: TechCategoryKey) => {
    switch (key) {
      case "core":
        return [
          { name: "React.js", desc: "UI Library", color: "bg-postit text-pencil" },
          { name: "Next.js 15", desc: "App Router Framework", color: "bg-pen-blue/10 text-pen-blue" },
          { name: "TypeScript", desc: "Typed JavaScript", color: "bg-accent-red/10 text-accent-red" },
          { name: "Node.js & Express", desc: "Backend Runtime", color: "bg-pen-green/10 text-pen-green" },
          { name: "Python & Flask", desc: "AI & Backend APIs", color: "bg-postit text-pencil" },
          { name: "OpenAI RAG Pipelines", desc: "Vector & Context AI", color: "bg-accent-red/10 text-accent-red" },
          { name: "PostgreSQL & Mongo", desc: "Relational & Document DBs", color: "bg-pen-blue/10 text-pen-blue" },
          { name: "Tailwind CSS", desc: "Utility-First Styling", color: "bg-pen-green/10 text-pen-green" },
        ];
      case "frontend":
        return resumeData.skills.frontend.map((s, idx) => ({
          name: s,
          desc: "Frontend UI",
          color:
            idx % 3 === 0
              ? "bg-postit text-pencil"
              : idx % 3 === 1
              ? "bg-pen-blue/10 text-pen-blue"
              : "bg-pen-green/10 text-pen-green",
        }));
      case "backend":
        return resumeData.skills.backend.map((s, idx) => ({
          name: s,
          desc: "Backend API",
          color:
            idx % 3 === 0
              ? "bg-accent-red/10 text-accent-red"
              : idx % 3 === 1
              ? "bg-postit text-pencil"
              : "bg-pen-blue/10 text-pen-blue",
        }));
      case "ai":
        return resumeData.skills.aiAutomation.map((s, idx) => ({
          name: s,
          desc: "AI & Data Engine",
          color:
            idx % 2 === 0
              ? "bg-accent-red/10 text-accent-red"
              : "bg-postit text-pencil",
        }));
      case "database":
        return [
          ...resumeData.skills.databases,
          ...resumeData.skills.cloudDevOps,
        ].map((s, idx) => ({
          name: s,
          desc: "Storage & Cloud",
          color:
            idx % 3 === 0
              ? "bg-pen-blue/10 text-pen-blue"
              : idx % 3 === 1
              ? "bg-pen-green/10 text-pen-green"
              : "bg-postit text-pencil",
        }));
      case "devops":
        return [
          ...resumeData.skills.infrastructureServers,
          ...resumeData.skills.toolsMethods,
        ].map((s, idx) => ({
          name: s,
          desc: "Infra & Method",
          color:
            idx % 3 === 0
              ? "bg-pencil/10 text-pencil"
              : idx % 3 === 1
              ? "bg-postit text-pencil"
              : "bg-accent-red/10 text-accent-red",
        }));
      default:
        return [];
    }
  };

  const activeSkills = getSkillsForCategory(activeCategory);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 max-w-6xl mx-auto px-6 relative space-y-20">
      {/* ------------------------------------------------------------------- */}
      {/* SUB-SECTION 1: Streaming My Story Card                             */}
      {/* ------------------------------------------------------------------- */}
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-1.5 bg-postit border-2 border-pencil wobbly-badge shadow-hard-sm text-pencil font-bold text-lg mb-3 -rotate-1">
            Developer Story
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-pencil">
            About <span className="text-accent-red font-kalam underline">Me</span>
          </h2>
        </div>

        {/* Paper Card with Typewriter Streaming Effect */}
        <div className="bg-white border-[3px] border-pencil p-7 sm:p-10 shadow-hard-lg wobbly-border-1 -rotate-1 relative">
          <TapeStrip rotation="rotate-2" />

          <div className="flex items-center justify-between border-b-2 border-dashed border-pencil/20 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-postit border-2 border-pencil rounded-lg shadow-hard-sm">
                <User size={24} strokeWidth={2.5} className="text-pencil" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-pencil font-kalam">
                  My Journey & Philosophy
                </h3>
                <p className="text-xs font-bold text-pencil/70">
                  Full Stack & AI Engineer
                </p>
              </div>
            </div>

            {isStreaming && (
              <button
                onClick={handleSkipStreaming}
                className="px-3 py-1 bg-postit border border-pencil rounded text-xs font-bold text-pencil shadow-hard-sm hover:bg-white transition-colors font-kalam"
              >
                Skip Animation ⚡
              </button>
            )}
          </div>

          {/* Streaming Paragraphs */}
          <div className="space-y-4 text-pencil/90 text-xl leading-relaxed font-patrick min-h-[160px]">
            {displayedParagraphs.map((para, idx) => (
              <p key={idx} className="relative">
                {para}
                {isStreaming && idx === activeParagraphIdx && (
                  <span className="inline-block w-2.5 h-6 bg-accent-red ml-1 animate-pulse align-middle" />
                )}
              </p>
            ))}
          </div>

          {/* Highlight Quote Box */}
          <div className="mt-8 p-4 bg-postit border-2 border-pencil rounded-lg shadow-hard-sm font-bold text-pencil text-lg rotate-1 flex items-center gap-3 font-kalam">
            <Sparkles size={24} className="text-accent-red shrink-0" />
            <span>"I don’t just write code—I craft performant software architectures that deliver real business impact."</span>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* SUB-SECTION 2: Full-Width Tech Stack Explorer                      */}
      {/* ------------------------------------------------------------------- */}
      <div>
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-1.5 bg-postit border-2 border-pencil wobbly-badge shadow-hard-sm text-pencil font-bold text-lg mb-3 rotate-1">
            Technical Matrix
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-pencil">
            Tech Stack <span className="text-pen-blue font-kalam underline">Explorer</span>
          </h2>
          <p className="text-xl text-pencil/80 mt-2 font-patrick max-w-2xl mx-auto">
            Select a category below to explore the languages, frameworks, databases, and AI tools I use to build systems.
          </p>
        </div>

        {/* Category Tabs Ribbon */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 border-2 border-pencil font-bold text-base font-kalam shadow-hard-sm transition-all duration-200 ${
                  isActive
                    ? "bg-accent-red text-white -rotate-1 scale-105 shadow-hard"
                    : "bg-white text-pencil hover:bg-postit hover:rotate-1"
                } wobbly-border-1`}
              >
                <Icon size={18} strokeWidth={2.5} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Animated Skill Cards Grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {activeSkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25, delay: idx * 0.02 }}
                className={`p-4 border-2 border-pencil ${skill.color} rounded-xl shadow-hard-sm hover:scale-105 hover:-rotate-1 transition-all flex flex-col justify-between group cursor-default`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <TechIcon name={skill.name} className="size-6 text-pencil" />
                    <span className="w-2 h-2 rounded-full bg-pencil/30 group-hover:bg-accent-red transition-colors" />
                  </div>
                  <div className="font-bold text-lg font-kalam leading-tight">
                    {skill.name}
                  </div>
                </div>
                <span className="text-xs font-bold text-pencil/70 mt-2 block font-patrick">
                  {skill.desc}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
