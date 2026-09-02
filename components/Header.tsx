import React from "react";
import Link from "next/link";
import { Linkedin, Github } from "lucide-react";
import { Site } from "@/data/site";

export function Header() {
  return (
    <header className="pt-4 pb-4 flex justify-center items-center">
      <div className="flex items-center gap-6 px-6 py-2 bg-white/80 backdrop-blur-sm border-[3px] border-pencil shadow-hard wobbly-border-1">
        <Link
          href="/"
          className="text-3xl font-bold font-kalam tracking-wide text-pencil hover:text-accent-red transition-colors"
        >
          {Site.nickName}
        </Link>
        <div className="h-6 w-[2px] bg-pencil/30" />
        <div className="flex items-center gap-3">
          <a
            href={Site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 border-2 border-pencil rounded-full hover:bg-postit hover:rotate-6 transition-all shadow-hard-sm"
          >
            <Linkedin size={20} strokeWidth={2.5} className="text-pencil" />
          </a>
          <a
            href={Site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 border-2 border-pencil rounded-full hover:bg-postit hover:-rotate-6 transition-all shadow-hard-sm"
          >
            <Github size={20} strokeWidth={2.5} className="text-pencil" />
          </a>
        </div>
      </div>
    </header>
  );
}
