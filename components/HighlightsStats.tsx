"use client";

import React from "react";
import { Award, Building2, Zap, Sparkles, CheckCircle2 } from "lucide-react";
import { TapeStrip, Thumbtack } from "./HandDrawnDecorations";

export function HighlightsStats() {
  const tickerItems = [
    "🏆 3+ Years Full Stack Experience",
    "🏢 2 Companies & 3 Digital Agencies",
    "🚀 100+ Production Engagements",
    "⚡ 100/100 Core Web Vitals",
    "☕ 1,200+ Cups of Coffee",
    "🤖 AI & RAG Pipeline Developer",
    "📦 260,000+ Ticket Sales Processed",
    "💯 100% On-Time Project Delivery",
  ];

  const statCards = [
    {
      icon: Award,
      value: "3+ Years Exp",
      title: "Full Stack & AI Engineer",
      description:
        "Specializing in React, Next.js, Node.js, Python Flask, OpenAI RAG pipelines, and PostgreSQL architecture.",
      bgColor: "bg-postit",
      rotation: "-rotate-1",
      decoration: "tape" as const,
    },
    {
      icon: Building2,
      value: "2 Co. & 3 Agencies",
      title: "Team Leadership & Partners",
      description:
        "Led cross-functional developer teams, co-delivering 100+ production engagements and Shopify Plus migrations.",
      bgColor: "bg-white",
      rotation: "rotate-1",
      decoration: "tack" as const,
    },
    {
      icon: Zap,
      value: "100/100 PageSpeed",
      title: "260k+ Transactions",
      description:
        "Delivered high-concurrency SaaS platforms handling 260k+ sales with 99.9% uptime and 100/100 Core Web Vitals.",
      bgColor: "bg-postit",
      rotation: "-rotate-2",
      decoration: "tape" as const,
    },
  ];

  return (
    <section className="py-10 relative overflow-hidden">
      {/* Top Infinite Hand-Drawn Marquee Ribbon Ticker */}
      <div className="w-full bg-postit border-y-[3px] border-pencil shadow-hard-sm py-3 mb-12 relative -rotate-1">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-2 px-6 font-kalam font-bold text-lg text-pencil tracking-wide"
            >
              <span>{item}</span>
              <span className="text-accent-red">★</span>
            </span>
          ))}
        </div>
      </div>

      {/* 3 Prominent Hand-Drawn Metric Cards */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {statCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className={`relative p-4 border-[3px] border-pencil shadow-hard-lg ${card.bgColor} ${
                  idx % 2 === 0 ? "wobbly-border-1" : "wobbly-border-2"
                } ${card.rotation} hover:rotate-0 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between`}
              >
                {/* Decoration */}
                {card.decoration === "tape" ? (
                  <TapeStrip
                    rotation={idx % 2 === 0 ? "rotate-2" : "-rotate-3"}
                  />
                ) : (
                  <Thumbtack />
                )}

                <div>
                  <div className="flex items-center justify-between border-b-2 border-dashed border-pencil/20 pb-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border-2 border-pencil rounded-md font-bold text-pencil text-sm shadow-hard-sm font-kalam">
                      <Icon
                        size={16}
                        className="text-accent-red"
                        strokeWidth={2.5}
                      />
                      {card.value}
                    </span>
                    <CheckCircle2
                      size={20}
                      className="text-pen-green"
                      strokeWidth={2.5}
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-pencil font-kalam mb-2">
                    {card.title}
                  </h3>

                  <p className="text-base text-pencil/90 leading-relaxed font-patrick">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
