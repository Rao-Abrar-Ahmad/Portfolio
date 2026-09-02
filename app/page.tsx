import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HighlightsStats } from "@/components/HighlightsStats";
import { AboutMe } from "@/components/AboutMe";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <HighlightsStats />
      <AboutMe />
      <ExperienceTimeline />
      <ProjectGrid />
      <Contact />
    </main>
  );
}
