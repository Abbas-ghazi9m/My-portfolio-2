"use client";

import React from "react";
import Image from "next/image";
import { Project } from "@/data/projects";
import { GlowCard } from "@/components/ui/GlowCard";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <GlowCard className="group flex flex-col justify-between p-6 sm:p-8" glowColor="cyan">
      <div>
        {/* Top Header Row */}
        <div className="flex items-center justify-between gap-3 font-mono text-xs uppercase tracking-widest text-neutral-400 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-cyan-400 font-bold">{project.number}</span>
            <span>{"//"}</span>
            <span className="text-neutral-300">{project.category}</span>
          </div>
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-0.5 text-[10px] text-cyan-300">
            {project.status}
          </span>
        </div>

        {/* Visual Preview Image */}
        <div
          onClick={() => onSelect(project)}
          className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-neutral-900 mb-6 cursor-pointer"
        >
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E17] via-transparent to-transparent opacity-60" />

          {/* Quick inspection overlay badge */}
          <div className="absolute bottom-3 right-3 rounded-lg border border-white/20 bg-black/70 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
            EXPLORE ARCHITECTURE
          </div>
        </div>

        {/* Project Title & Tagline */}
        <div className="mb-3">
          <h3
            onClick={() => onSelect(project)}
            className="text-2xl sm:text-3xl font-black uppercase text-white cursor-pointer hover:text-cyan-300 transition-colors"
          >
            {project.name}
          </h3>
          {project.tagline && (
            <p className="font-mono text-xs text-cyan-400/80 mt-1">
              {"// " + project.tagline}
            </p>
          )}
        </div>

        {/* Short Description */}
        <p className="text-sm text-neutral-400 font-light leading-relaxed mb-6">
          {project.shortDescription}
        </p>

        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/5 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-neutral-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="rounded-md border border-white/5 bg-white/5 px-2 py-1 font-mono text-[11px] text-neutral-400">
              +{project.technologies.length - 5} more
            </span>
          )}
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="pt-4 border-t border-white/5 flex items-center justify-between">
        <button
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <span>CASE DETAILS</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </button>

        <div className="flex items-center gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} repository`}
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} live demo`}
              className="text-neutral-400 hover:text-cyan-400 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </GlowCard>
  );
}
