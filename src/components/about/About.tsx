"use client";

import React from "react";
import { PROFILE_DATA } from "@/data/profile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { Cpu, Globe, Layers, ShieldCheck, Terminal, Zap } from "lucide-react";

export function About() {
  const pillars = [
    {
      icon: Cpu,
      title: "Applied AI & LLM Systems",
      description: "Developing multimodal inference, RAG pipelines, and autonomous agent loops that solve real operational bottlenecks.",
      tag: "AI/ML",
    },
    {
      icon: Layers,
      title: "Full-Stack Architecture",
      description: "Building production-grade web and mobile applications with Next.js, Flutter, and scalable distributed APIs.",
      tag: "Web & Mobile",
    },
    {
      icon: ShieldCheck,
      title: "Decentralized Trust",
      description: "Pairing cryptographic zero-knowledge anchors and Soulbound tokens with AI to establish tamper-proof digital provenance.",
      tag: "Web3",
    },
    {
      icon: Zap,
      title: "IoT & Embedded Engineering",
      description: "Prototyping physical-world connected hardware with ESP32 microcontrollers, satellite GPS, and cellular telemetry.",
      tag: "Hardware",
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#05070B] overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 -right-40 -z-10 h-96 w-96 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -left-40 -z-10 h-96 w-96 rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="01 — ABOUT"
          title="Turning ambitious ideas into production-grade systems."
          subtitle="A developer and builder focused on engineering high-impact products at the frontier of artificial intelligence and full-stack software."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative Storytelling */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="rounded-2xl border border-white/10 bg-[#0A0E17]/60 p-6 sm:p-8 backdrop-blur-xl">
              <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-4">
                <Terminal className="h-4 w-4" />
                <span>BUILDER PHILOSOPHY</span>
              </div>
              <blockquote className="text-xl sm:text-2xl font-light text-white italic border-l-2 border-cyan-400 pl-4 py-1 mb-6">
                &ldquo;{PROFILE_DATA.statement}&rdquo;
              </blockquote>

              <div className="flex flex-col gap-4 text-neutral-300 leading-relaxed font-light text-base sm:text-lg">
                {PROFILE_DATA.aboutText.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Technical Credibility Footnote */}
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <Globe className="h-3.5 w-3.5 text-cyan-400" />
                  <span>LOCATION: {PROFILE_DATA.metadata.location}</span>
                </span>
                <span className="text-cyan-400">
                  CURRENT FOCUS: {PROFILE_DATA.metadata.statusNote}
                </span>
              </div>
            </div>

            {/* Core Architectural Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <GlowCard key={index} className="p-5" glowColor="cyan">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="font-mono text-[10px] uppercase text-neutral-400 tracking-wider">
                        {pillar.tag}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1.5">{pillar.title}</h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </GlowCard>
                );
              })}
            </div>
          </div>

          {/* Right Column: Statistics Grid & Interactive HUD */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-400 mb-1">
              KEY METRICS & EXPLORATION
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {PROFILE_DATA.stats.map((stat, idx) => (
                <GlowCard key={idx} className="p-6" glowColor={idx % 2 === 0 ? "cyan" : "violet"}>
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-200">
                      {stat.value}
                    </span>
                    <span className="font-mono text-[10px] text-cyan-400/80 tracking-widest uppercase">
                      CONFIRMED
                    </span>
                  </div>
                  <h4 className="mt-2 text-base font-semibold text-white">{stat.label}</h4>
                  {stat.helper && (
                    <p className="mt-1 text-xs text-neutral-400 font-light leading-relaxed">
                      {stat.helper}
                    </p>
                  )}
                </GlowCard>
              ))}
            </div>

            {/* Current Status Callout */}
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5 backdrop-blur-md">
              <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 font-semibold mb-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>ACTIVE AVAILABILITY</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Open to discussions for summer engineering internships, AI research collaborations, and early-stage startup engineering roles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
