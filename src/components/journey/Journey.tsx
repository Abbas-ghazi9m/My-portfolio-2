"use client";

import React from "react";
import { JOURNEY_DATA } from "@/data/journey";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { Calendar, CheckCircle2, ChevronRight } from "lucide-react";

export function Journey() {
  return (
    <section id="journey" className="relative py-24 sm:py-32 bg-[#05070B] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 -z-10 h-96 w-96 rounded-full bg-cyan-500/5 blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="05 — JOURNEY"
          title="Engineering Evolution & Roadmap"
          subtitle="From algorithmic fundamentals to advanced AI systems and future technology venture founding."
        />

        {/* Vertical Timeline Container */}
        <div className="relative mt-12 max-w-4xl mx-auto">
          {/* Central Connecting Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-cyan-500 via-sky-400 to-violet-600/30" />

          <div className="flex flex-col gap-12 sm:gap-16">
            {JOURNEY_DATA.map((item, index) => {
              const isEven = index % 2 === 0;
              const isCurrent = item.status === "Current Focus";
              const isCompleted = item.status === "Completed";

              return (
                <div
                  key={item.year}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node Center Marker */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                    <div
                      className={`relative flex h-9 w-9 items-center justify-center rounded-full border-2 ${
                        isCurrent
                          ? "border-cyan-400 bg-cyan-500/20 shadow-[0_0_20px_#00f2fe]"
                          : isCompleted
                          ? "border-emerald-400 bg-emerald-500/20"
                          : "border-white/20 bg-[#0A0E17]"
                      }`}
                    >
                      {isCurrent ? (
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400" />
                        </span>
                      ) : isCompleted ? (
                        <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      ) : (
                        <span className="h-2 w-2 rounded-full bg-neutral-400" />
                      )}
                    </div>
                  </div>

                  {/* Spacer for mobile indent */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Milestone Card Content */}
                  <div className="w-full pl-12 sm:pl-0 sm:w-1/2 sm:px-8">
                    <GlowCard
                      className={`p-6 sm:p-8 ${
                        isCurrent ? "border-cyan-500/40 bg-[#0E1524]/90" : ""
                      }`}
                      glowColor={isCurrent ? "cyan" : "violet"}
                    >
                      {/* Card Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 font-bold">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>YEAR {item.year}</span>
                        </div>
                        <span
                          className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
                            isCurrent
                              ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                              : isCompleted
                              ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/30"
                              : "bg-white/5 text-neutral-400 border border-white/10"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>

                      <div className="font-mono text-[11px] text-neutral-400 uppercase tracking-widest mb-1">
                        {item.phase}
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>

                      <p className="font-mono text-xs text-cyan-400/80 mb-4">
                        {"// " + item.tagline}
                      </p>

                      <p className="text-sm text-neutral-300 font-light leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Key Achievements & Highlights */}
                      <div className="space-y-1.5 pt-3 border-t border-white/5">
                        {item.highlights.map((point, hIdx) => (
                          <div
                            key={hIdx}
                            className="flex items-start gap-2 text-xs text-neutral-400 font-light"
                          >
                            <ChevronRight className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </GlowCard>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
