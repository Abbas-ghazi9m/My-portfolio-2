"use client";

import React, { useState } from "react";
import { PROJECTS_DATA, Project } from "@/data/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { ArrowRight } from "lucide-react";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "AI + Blockchain", "Blockchain + Education", "Mobile + Islamic Tech", "IoT + Personal Safety"];

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-[#05070B] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[160px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="03 — SELECTED WORK"
          title="Engineered Products & Prototypes"
          subtitle="Real-world architectures addressing digital trust, personal safety, decentralized credentials, and mobile engagement."
        />

        {/* Filter categories */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-white/5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-xl px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? "bg-cyan-500 text-black font-bold shadow-[0_0_20px_rgba(0,242,254,0.3)]"
                  : "bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Bottom CTA & View all projects strip */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-xl font-bold text-white mb-1">
              Want to inspect more experimental repositories?
            </h4>
            <p className="text-sm text-neutral-400 font-light">
              Explore 20+ additional utility scripts, algorithmic implementations, and micro-experiments on GitHub.
            </p>
          </div>

          <a
            href="https://github.com/Abbas-ghazi9m"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-cyan-300 hover:bg-cyan-500 hover:text-black transition-all"
          >
            <span>VIEW ALL PROJECTS ON GITHUB</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* In-page Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
