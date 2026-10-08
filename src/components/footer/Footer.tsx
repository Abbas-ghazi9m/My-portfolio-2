"use client";

import React from "react";
import { PROFILE_DATA } from "@/data/profile";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Footer() {
  const currentYear = 2026;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-[#05070B] py-12 px-4 sm:px-6 lg:px-8 text-neutral-400">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Branding & Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm font-black tracking-widest text-cyan-400">
              AB
            </span>
            <span className="text-base font-bold text-white tracking-wider">
              {PROFILE_DATA.name.toUpperCase()}
            </span>
          </div>
          <p className="font-mono text-xs text-neutral-400 mt-1">
            AI Engineer • Full-Stack Developer • Builder
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-6">
          <a
            href={PROFILE_DATA.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-neutral-400 hover:text-cyan-400 transition-colors"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={PROFILE_DATA.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-neutral-400 hover:text-cyan-400 transition-colors"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${PROFILE_DATA.contact.email}`}
            aria-label="Email directly"
            className="text-neutral-400 hover:text-cyan-400 transition-colors"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        {/* Right: Copyright, Next.js notice, and Back to top */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <div className="text-center md:text-right">
            <div>© {currentYear} Mohammad Abbas. All rights reserved.</div>
            <div className="text-[11px] text-neutral-400 mt-0.5">
              Built with Next.js, React & Tailwind CSS
            </div>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-neutral-400 hover:text-white hover:border-cyan-400/40 transition-colors"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
