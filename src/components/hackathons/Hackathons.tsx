"use client";

import React from "react";
import { HACKATHONS_DATA, HackathonBadge } from "@/data/hackathons";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { Award, Code2, Flame, Trophy, Users, Wrench } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export function Hackathons() {
  const getBadgeStyle = (result: HackathonBadge) => {
    switch (result) {
      case "Finalist":
        return "border-amber-500/40 bg-amber-500/10 text-amber-300";
      case "Winner":
        return "border-emerald-500/40 bg-emerald-500/10 text-emerald-300";
      case "Prototype":
        return "border-cyan-500/40 bg-cyan-500/10 text-cyan-300";
      case "Under Development":
        return "border-violet-500/40 bg-violet-500/10 text-violet-300";
      case "Participant":
      default:
        return "border-sky-500/40 bg-sky-500/10 text-sky-300";
    }
  };

  const getBadgeIcon = (result: HackathonBadge) => {
    switch (result) {
      case "Finalist":
        return <Trophy className="h-3 w-3 text-amber-400" />;
      case "Winner":
        return <Award className="h-3 w-3 text-emerald-400" />;
      case "Prototype":
        return <Flame className="h-3 w-3 text-cyan-400" />;
      case "Under Development":
        return <Wrench className="h-3 w-3 text-violet-400" />;
      default:
        return <Code2 className="h-3 w-3 text-sky-400" />;
    }
  };

  return (
    <section id="hackathons" className="relative py-24 sm:py-32 bg-[#05070B] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 -z-10 h-80 w-80 rounded-full bg-violet-500/5 blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="04 — HACKATHONS & EXPERIMENTS"
          title="Rapid Prototyping Under Fire"
          subtitle="Sprint builds, competitive problem solving, and experimental hackathon architectures built under strict time constraints."
        />

        {/* Hackathon Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {HACKATHONS_DATA.map((item) => (
            <GlowCard key={item.id} className="p-6 sm:p-8 flex flex-col justify-between" glowColor="violet">
              <div>
                {/* Header Row: Hackathon name, year, and result badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                    <span>{item.year}</span>
                    <span className="mx-2">•</span>
                    <span className="text-white font-medium">{item.hackathonName}</span>
                  </div>

                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] font-semibold tracking-wider uppercase ${getBadgeStyle(
                      item.result
                    )}`}
                  >
                    {getBadgeIcon(item.result)}
                    <span>{item.result}</span>
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">
                  {item.project}
                </h3>

                {/* Role and Responsibilities */}
                <div className="flex items-center gap-2 font-mono text-xs text-cyan-400/90 mb-4">
                  <Users className="h-3.5 w-3.5" />
                  <span>ROLE: {item.role}</span>
                </div>

                {/* Problem Solved Callout */}
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 mb-4">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 mb-1">
                    PROBLEM ADDRESSED
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed font-light">
                    {item.problemSolved}
                  </p>
                </div>

                {/* Brief Narrative */}
                <p className="text-xs text-neutral-400 leading-relaxed font-light mb-6">
                  {item.description}
                </p>
              </div>

              {/* Technologies & Links Footer */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/5 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {item.links?.repo && (
                  <div className="pt-3 border-t border-white/5 flex items-center justify-end">
                    <a
                      href={item.links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <GithubIcon className="h-3.5 w-3.5" />
                      <span>INSPECT SPRINT REPO</span>
                    </a>
                  </div>
                )}
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
