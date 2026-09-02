"use client";

import React from "react";
import Image from "next/image";
import { FileText, Sparkles } from "lucide-react";
import { Site } from "@/data/site";
import { TapeStrip, ScribbledArrow } from "./HandDrawnDecorations";

export function Hero() {
  return (
    <section className="py-12 md:pb-12 md:pt-8 max-w-6xl mx-auto px-6 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Personal Intro, Bio & CTAs */}
        <div className="lg:col-span-8 flex flex-col items-start gap-6">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-postit border-2 border-pencil wobbly-badge shadow-hard-sm text-pencil font-bold text-sm md:text-base -rotate-1">
            <Sparkles size={18} strokeWidth={2.5} className="text-accent-red" />
            <span>Available for Full Stack & AI Projects • {Site.location}</span>
          </div>

          {/* Personal Heading */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-pencil mb-4">
              Hi, I’m{" "}
              <span className="font-kalam text-pen-blue underline decoration-accent-red decoration-wavy">
                {Site.name}
              </span>
            </h1>
            <p className="text-2xl sm:text-3xl font-bold text-accent-red mt-2 font-kalam">
              {Site.jobTitle}
            </p>
          </div>

          {/* Bio Intro Paragraph */}
          <p className="text-xl md:text-2xl text-pencil/90 leading-relaxed font-patrick">
            Building high-performance <span className="font-bold underline decoration-pen-blue decoration-2">SaaS platforms</span>, <span className="font-bold underline decoration-accent-red decoration-2">AI RAG pipelines</span>, and custom <span className="font-bold underline decoration-pen-green decoration-2">e-commerce solutions</span>. From complex REST APIs to slick hand-crafted interfaces.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-4 relative w-full sm:w-auto">
            {/* WhatsApp CTA */}
            <a
              href={Site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-accent-red text-white text-xl font-bold border-[3px] border-pencil shadow-hard wobbly-border-1 btn-hand-drawn"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="size-6 text-white fill-white"
              >
                <title>WhatsApp</title>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>Chat on WhatsApp</span>
            </a>

            {/* View Resume CTA */}
            <a
              href={Site.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-pencil text-xl font-bold border-[3px] border-pencil shadow-hard wobbly-border-2 btn-hand-drawn hover:bg-muted-paper"
            >
              <FileText size={22} strokeWidth={2.5} />
              <span>View Resume</span>
            </a>

            {/* Scribbled Arrow pointing to CTAs on desktop */}
            <div className="hidden md:block absolute -right-20 -bottom-10 pointer-events-none rotate-12">
              <ScribbledArrow />
            </div>
          </div>
        </div>

        {/* Right Column: Hero Photo Mounted in Rotated Frame */}
        <div className="lg:col-span-4 flex justify-center relative">
          <div className="relative p-6 bg-white border-[3px] border-pencil shadow-hard-lg wobbly-border-3 -rotate-2 hover:rotate-1 transition-transform duration-300 group max-w-xs sm:max-w-xs w-full">
            {/* Tape Strip Pinned at Top */}
            <TapeStrip rotation="-rotate-3" />

            {/* Circular Photo Container */}
            <div className="relative w-48 h-48 sm:w-60 sm:h-60 mx-auto rounded-full overflow-hidden border-[3px] border-pencil shadow-inner bg-muted-paper/50">
              <Image
                src={Site.profilePic}
                alt={Site.name}
                fill
                sizes="(max-width: 768px) 192px, 240px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>

            {/* Caption Tag */}
            <div className="mt-4 text-center">
              <span className="inline-block px-3 py-1 bg-postit border-2 border-pencil text-pencil font-bold text-base rotate-1 shadow-hard-sm font-kalam">
                {Site.name}
              </span>
              <p className="text-xs sm:text-sm text-pencil/80 mt-1 font-bold">
                {Site.jobTitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
