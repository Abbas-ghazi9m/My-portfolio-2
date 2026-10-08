"use client";

import React from "react";
import { motion } from "framer-motion";
import { PROFILE_DATA } from "@/data/profile";
import { HeroCanvas } from "./HeroCanvas";
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center pt-24 pb-12 overflow-hidden bg-grid-pattern"
    >
      {/* Radial Atmospheric Ambient Spotlights */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Technical Status Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-400 mb-8 border-b border-white/5 pb-3"
        >
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 font-semibold">{PROFILE_DATA.status.text}</span>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <span>LOC: {PROFILE_DATA.metadata.location}</span>
            <span>EST: {PROFILE_DATA.metadata.buildingSince}</span>
            <span className="text-cyan-400">AI / FULL-STACK</span>
          </div>
        </motion.div>

        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Identity Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 self-start rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-md mb-6"
            >
              <Sparkles className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
              <span>{PROFILE_DATA.roleBadge}</span>
            </motion.div>

            {/* Massive Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase leading-[1.05]"
            >
              MOHAMMAD <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400">
                ABBAS
              </span>
            </motion.h1>

            {/* Core Statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 text-lg sm:text-xl md:text-2xl font-light text-neutral-200 leading-snug max-w-2xl"
            >
              {PROFILE_DATA.headline}
            </motion.p>

            {/* Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed max-w-xl"
            >
              {PROFILE_DATA.subheadline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={scrollToProjects}
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-black uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,242,254,0.4)] hover:brightness-110 active:scale-95"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </button>

              <a
                href={PROFILE_DATA.resumeUrl}
                download="Mohammad_Abbas_Resume.pdf"
                className="group inline-flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-white uppercase backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10 active:scale-95"
              >
                <Download className="h-4 w-4 text-cyan-400 transition-transform group-hover:-translate-y-0.5" />
                <span>DOWNLOAD RESUME</span>
              </a>
            </motion.div>

            {/* Social & Contact Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex items-center gap-4 text-neutral-400"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                CONNECT:
              </span>
              <a
                href={PROFILE_DATA.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="rounded-lg border border-white/10 bg-white/5 p-2.5 text-neutral-300 hover:border-cyan-400/40 hover:text-cyan-400 transition-colors"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href={PROFILE_DATA.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="rounded-lg border border-white/10 bg-white/5 p-2.5 text-neutral-300 hover:border-cyan-400/40 hover:text-cyan-400 transition-colors"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${PROFILE_DATA.contact.email}`}
                aria-label="Email directly"
                className="rounded-lg border border-white/10 bg-white/5 p-2.5 text-neutral-300 hover:border-cyan-400/40 hover:text-cyan-400 transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          {/* Right 3D Visual Mesh Canvas */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Ambient Back Glow Ring */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 sm:w-80 h-72 sm:h-80 rounded-full border border-cyan-500/10 animate-[spin_25s_linear_infinite]" />
              <div className="absolute w-96 h-96 rounded-full border border-violet-500/10 animate-[spin_35s_linear_infinite_reverse]" />
            </div>

            <HeroCanvas />

            {/* Floating Technical HUD Tags */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-2 sm:bottom-4 left-4 sm:left-8 glass-panel rounded-xl px-4 py-2 border border-cyan-500/20 shadow-lg pointer-events-none"
            >
              <div className="font-mono text-[10px] uppercase text-cyan-400 tracking-widest">
                INTELLIGENCE FABRIC
              </div>
              <div className="text-xs font-semibold text-white">
                Autonomous AI & Systems
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute top-2 sm:top-6 right-4 sm:right-6 glass-panel rounded-xl px-4 py-2 border border-violet-500/20 shadow-lg pointer-events-none"
            >
              <div className="font-mono text-[10px] uppercase text-violet-400 tracking-widest">
                CONSENSUS LAYER
              </div>
              <div className="text-xs font-semibold text-white">
                Cryptographic Trust
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Technical Scroll Cue */}
        <div className="mt-16 sm:mt-20 flex items-center justify-between border-t border-white/5 pt-4 font-mono text-[10px] sm:text-xs text-neutral-400 uppercase tracking-[0.25em]">
          <span>SCROLL TO EXPLORE</span>
          <span className="hidden sm:inline">01 // 07 SECTIONS</span>
          <span>SYSTEM READY</span>
        </div>
      </div>
    </section>
  );
}
