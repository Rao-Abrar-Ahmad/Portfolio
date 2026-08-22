"use client";

import React, { useEffect, useRef } from "react";
import { Briefcase, Calendar, MapPin, Award } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TapeStrip, Thumbtack } from "./HandDrawnDecorations";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type ExperienceRole = {
  company: string;
  title: string;
  period: string;
  type: string;
  location: string;
  bullets: string[];
  rotation: string;
  decoration: "tape" | "tack";
};

const experiences: ExperienceRole[] = [
  {
    company: "Technoworld Solutions",
    title: "Full Stack Developer",
    period: "Oct 2025 – Mar 2026",
    type: "Contract / Full Stack",
    location: "Remote / Rawalpindi",
    bullets: [
      "Engineered high-concurrency FastAPI microservices and custom Shopify headless integrations.",
      "Optimized client-side rendering & Core Web Vitals, reducing LCP page load times by over 40%.",
      "Integrated multi-currency Stripe checkout and real-time social synchronization engines.",
    ],
    rotation: "-rotate-1",
    decoration: "tack",
  },
  {
    company: "RF Technologies",
    title: "Full Stack Developer",
    period: "Sep 2022 – Mar 2026",
    type: "Full-Time",
    location: "Rawalpindi, Pakistan",
    bullets: [
      "Led cross-functional development team to build scalable React/Next.js SaaS applications and Node.js microservices.",
      "Architected event ticketing & photo printing platforms handling 260k+ transactions with 99.9% uptime.",
      "Established CI/CD deployment pipelines, automated test suites, and strict code review standards across projects.",
    ],
    rotation: "rotate-2",
    decoration: "tape",
  },
];

export function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current || !pathRef.current) return;

    const path = pathRef.current;
    const pathLength = path.getTotalLength();

    // Prepare SVG path drawing stroke
    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    const ctx = gsap.context(() => {
      // Animate line draw-in on scroll
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          end: "bottom 85%",
          scrub: 0.8,
        },
      });

      // Animate cards entry
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 40,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-16 md:py-24 max-w-4xl mx-auto px-6 relative"
    >
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1.5 bg-postit border-2 border-pencil wobbly-badge shadow-hard-sm text-pencil font-bold text-lg mb-3 -rotate-1">
          Work Journey
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-pencil">
          Experience{" "}
          <span className="text-pen-blue font-kalam underline">Timeline</span>
        </h2>
      </div>

      <div className="relative">
        {/* Vertical Squiggly Dashed Connecting Line */}
        <svg
          className="absolute left-4 md:left-1/2 top-0 bottom-0 w-8 -translate-x-1/2 h-full pointer-events-none z-0"
          viewBox="0 0 30 600"
          preserveAspectRatio="none"
        >
          <path
            ref={pathRef}
            d="M 15 0 Q 25 150 15 300 T 15 600"
            fill="none"
            stroke="#2d2d2d"
            strokeWidth="3.5"
            strokeDasharray="8 6"
          />
        </svg>

        {/* Experience Role Cards */}
        <div className="space-y-16 relative z-10">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              ref={(el) => {
                cardsRef.current[idx] = el;
              }}
              className={`flex flex-col ${
                idx % 2 === 0 ? "md:items-start" : "md:items-end"
              } relative`}
            >
              <div
                className={`w-full md:w-[85%] bg-white border-[3px] border-pencil p-6 sm:p-8 shadow-hard-lg ${
                  idx % 2 === 0 ? "wobbly-border-1" : "wobbly-border-2"
                } ${exp.rotation} hover:rotate-0 transition-transform duration-200 relative`}
              >
                {/* Card Top Decoration */}
                {exp.decoration === "tape" ? (
                  <TapeStrip
                    rotation={idx % 2 === 0 ? "rotate-2" : "-rotate-3"}
                  />
                ) : (
                  <Thumbtack />
                )}

                <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-dashed border-pencil/20 pb-4 mb-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-pencil flex items-center gap-2">
                      <Briefcase
                        className="text-accent-red"
                        size={24}
                        strokeWidth={2.5}
                      />
                      {exp.title}
                    </h3>
                    <div className="text-xl font-bold text-pen-blue font-kalam mt-1">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-postit border-2 border-pencil rounded-md font-bold text-sm text-pencil shadow-hard-sm">
                      <Calendar size={14} strokeWidth={2.5} />
                      {exp.period}
                    </span>
                    <span className="text-xs font-bold text-pencil/70 mt-1 flex items-center gap-1">
                      <MapPin size={12} strokeWidth={2.5} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {exp.bullets.map((bullet, bulletIdx) => (
                    <li
                      key={bulletIdx}
                      className="flex items-start gap-2.5 text-lg text-pencil/90"
                    >
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-accent-red flex-shrink-0 border border-pencil" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
