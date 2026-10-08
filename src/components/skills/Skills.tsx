"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SKILLS_DATA, SKILL_CATEGORIES } from "@/data/skills";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { Compass, Sparkles } from "lucide-react";

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredSkills =
    selectedCategory === "All"
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === selectedCategory);

  const getBadgeStyle = (level: string) => {
    switch (level) {
      case "Core & Building":
        return "bg-cyan-500/10 text-cyan-300 border-cyan-500/30";
      case "Proficient":
        return "bg-sky-500/10 text-sky-300 border-sky-500/30";
      case "Actively Exploring":
        return "bg-violet-500/10 text-violet-300 border-violet-500/30";
      case "Foundational":
        return "bg-neutral-800 text-neutral-400 border-neutral-700";
      default:
        return "bg-neutral-800 text-neutral-400 border-neutral-700";
    }
  };

  return (
    <section id="expertise" className="relative py-24 sm:py-32 bg-[#05070B] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="02 — EXPERTISE"
          title="Technical Arsenal & Tooling"
          subtitle="Honest representation of core engineering competencies, production frameworks, and technologies actively being explored."
        />

        {/* Level Legend & Categorization Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-white/5">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`rounded-xl px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider transition-all ${
                selectedCategory === "All"
                  ? "bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(0,242,254,0.3)]"
                  : "bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10"
              }`}
            >
              All ({SKILLS_DATA.length})
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-xl px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? "bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(0,242,254,0.3)]"
                    : "bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Level Transparency Notice */}
          <div className="flex items-center gap-3 font-mono text-[11px] text-neutral-400">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              <span>Core</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-sky-400" />
              <span>Proficient</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-violet-400" />
              <span>Exploring</span>
            </span>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <GlowCard className="p-5 h-full flex flex-col justify-between" glowColor="cyan">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </h4>
                      <span
                        className={`inline-flex items-center gap-1 rounded-md border px-2 py-0.5 font-mono text-[10px] tracking-wider uppercase ${getBadgeStyle(
                          skill.level
                        )}`}
                      >
                        {skill.level === "Core & Building" && (
                          <Sparkles className="h-2.5 w-2.5 text-cyan-400" />
                        )}
                        {skill.level === "Actively Exploring" && (
                          <Compass className="h-2.5 w-2.5 text-violet-400" />
                        )}
                        {skill.level}
                      </span>
                    </div>

                    <div className="font-mono text-[11px] text-cyan-400/70 uppercase tracking-wider mb-2">
                      {skill.category}
                    </div>

                    {skill.highlight && (
                      <p className="text-xs text-neutral-400 leading-relaxed font-light">
                        {skill.highlight}
                      </p>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-neutral-400">
                    <span>STATUS: ACTIVE</span>
                    <span className="text-cyan-400/80">PRODUCTION READY</span>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
