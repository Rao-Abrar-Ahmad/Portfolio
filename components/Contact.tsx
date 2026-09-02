"use client";

import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Briefcase,
  Layers,
  Code2,
  Copy,
  Check,
} from "lucide-react";
import { Site } from "@/data/site";
import { TapeStrip } from "./HandDrawnDecorations";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(Site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const socialLinks = [
    { name: "LinkedIn", url: Site.socials.linkedin, icon: Linkedin },
    { name: "GitHub", url: Site.socials.github, icon: Github },
    { name: "Upwork", url: Site.socials.upwork, icon: Briefcase },
    { name: "Fiverr", url: Site.socials.fiveer, icon: Layers },
    { name: "Twitter / X", url: Site.socials.twitter, icon: Twitter }
  ];

  return (
    <section className="py-16 md:py-24 max-w-4xl mx-auto px-6 relative">
      {/* Toast Notification Banner */}
      {copied && (
        <div className="fixed top-6 right-6 z-50 animate-bounce">
          <div className="px-4 py-2.5 bg-postit text-pencil font-bold text-base border-[3px] border-pencil shadow-hard wobbly-border-1 flex items-center gap-2">
            <Check size={18} strokeWidth={2.5} className="text-pen-green" />
            <span>Email copied to clipboard! 📋</span>
          </div>
        </div>
      )}

      <div className="relative bg-white border-[3px] border-pencil p-8 sm:p-12 shadow-hard-lg wobbly-border-1 text-center -rotate-1">
        <TapeStrip rotation="rotate-2" />

        <div className="inline-block px-4 py-1.5 bg-postit border-2 border-pencil wobbly-badge shadow-hard-sm text-pencil font-bold text-lg mb-3">
          Get In Touch
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold text-pencil font-kalam mb-4">
          Let’s Build Something{" "}
          <span className="text-accent-red underline">Awesome</span> Together
        </h2>

        <p className="text-xl text-pencil/80 max-w-xl mx-auto mb-8 font-patrick">
          Whether you need a full-stack SaaS platform, AI RAG integration, custom e-commerce solution, or lead engineering expertise — my inbox is open!
        </p>

        {/* Primary Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
          {/* Email with Copy Action */}
          <div className="p-4 bg-muted-paper/40 border-2 border-pencil rounded-xl shadow-hard-sm hover:-translate-y-1 hover:bg-postit transition-all flex flex-col items-center gap-2 group relative">
            <a
              href={`mailto:${Site.email}`}
              className="flex flex-col items-center gap-2 w-full"
            >
              <div className="p-3 bg-accent-red text-white border-2 border-pencil rounded-full group-hover:rotate-6 transition-transform">
                <Mail size={22} strokeWidth={2.5} />
              </div>
              <span className="font-bold text-lg text-pencil font-kalam">
                Email
              </span>
              <span className="text-sm font-bold text-pencil/80 break-all">
                {Site.email}
              </span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="mt-1 inline-flex items-center gap-1 px-3 py-1 bg-white border border-pencil rounded-md text-xs font-bold shadow-hard-sm hover:bg-postit transition-colors text-pencil"
              aria-label="Copy Email Address"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-pen-green" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={14} className="text-pencil" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>

          {/* WhatsApp */}
          <a
            href={Site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-muted-paper/40 border-2 border-pencil rounded-xl shadow-hard-sm hover:-translate-y-1 hover:bg-postit transition-all flex flex-col items-center gap-2 group"
          >
            <div className="p-3 bg-pen-blue text-white border-2 border-pencil rounded-full group-hover:-rotate-6 transition-transform">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="size-6 text-white fill-white"
              >
                <title>WhatsApp</title>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </div>
            <span className="font-bold text-lg text-pencil font-kalam">
              WhatsApp
            </span>
            <span className="text-sm font-bold text-pencil/80">
              Direct Chat
            </span>
          </a>

          {/* Location */}
          <div className="p-4 bg-muted-paper/40 border-2 border-pencil rounded-xl shadow-hard-sm flex flex-col items-center gap-2">
            <div className="p-3 bg-postit text-pencil border-2 border-pencil rounded-full">
              <MapPin size={22} strokeWidth={2.5} className="text-accent-red" />
            </div>
            <span className="font-bold text-lg text-pencil font-kalam">
              Location
            </span>
            <span className="text-sm font-bold text-pencil/80">
              {Site.location}
            </span>
          </div>
        </div>

        {/* Extendable Social Channels Grid */}
        <div className="pt-6 border-t-2 border-dashed border-pencil/20 flex flex-col items-center gap-4">
          <span className="font-bold text-lg text-pencil/80 font-kalam">
            Connect & Freelance Channels:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {socialLinks.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="inline-flex items-center gap-2 px-3.5 py-2 bg-white border-2 border-pencil rounded-lg shadow-hard-sm hover:bg-postit hover:-translate-y-0.5 transition-all text-pencil font-bold text-sm"
                >
                  <IconComp
                    size={18}
                    strokeWidth={2.5}
                    className="text-accent-red"
                  />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
