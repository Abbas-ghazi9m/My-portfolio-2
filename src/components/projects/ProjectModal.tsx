"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Layers,
  X,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-xl transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/15 bg-[#090D15] text-white shadow-2xl z-10 p-6 sm:p-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close project details"
            className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Header Metadata */}
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest text-cyan-400 mb-4">
            <span>PROJECT {project.number}</span>
            <span>•</span>
            <span>{project.category}</span>
            <span>•</span>
            <span className="rounded-full bg-cyan-500/10 border border-cyan-500/30 px-2.5 py-0.5 text-cyan-300">
              {project.status}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-3">
            {project.name}
          </h2>

          {project.tagline && (
            <p className="font-mono text-sm tracking-widest text-cyan-400/90 mb-4">
              {"// " + project.tagline}
            </p>
          )}

          <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed mb-6">
            {project.shortDescription}
          </p>

          {/* Project Preview Image */}
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 mb-8 bg-neutral-900">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Quick Metrics Bar */}
          {project.metrics && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {project.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center"
                >
                  <div className="font-mono text-2xl font-black text-cyan-400">
                    {m.value}
                  </div>
                  <div className="font-mono text-[11px] text-neutral-400 uppercase tracking-wider mt-1">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Problem & Solution Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
              <h4 className="font-mono text-xs uppercase tracking-widest text-red-400 font-bold mb-2">
                THE PROBLEM
              </h4>
              <p className="text-sm text-neutral-300 leading-relaxed font-light">
                {project.problem}
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6">
              <h4 className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-bold mb-2">
                ENGINEERED SOLUTION
              </h4>
              <p className="text-sm text-neutral-300 leading-relaxed font-light">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture Breakdown */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 mb-8">
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-widest mb-3">
              <Layers className="h-4 w-4" />
              <span>SYSTEM ARCHITECTURE</span>
            </div>
            <p className="text-sm text-neutral-400 mb-6">
              {project.architecture.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.architecture.layers.map((layer, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-white/10 bg-[#0E1420] p-4"
                >
                  <span className="font-mono text-[10px] text-cyan-400 tracking-wider">
                    LAYER 0{idx + 1}
                  </span>
                  <h5 className="text-sm font-bold text-white mt-1 mb-1">
                    {layer.title}
                  </h5>
                  <div className="font-mono text-[10px] text-violet-400 mb-2">
                    {layer.tech}
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {layer.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Features */}
          <div className="mb-8">
            <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-400 mb-3">
              CORE CAPABILITIES
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 rounded-lg border border-white/5 bg-white/[0.02] p-3 text-xs text-neutral-300"
                >
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Badges */}
          <div className="mb-8">
            <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-400 mb-3">
              TECHNOLOGIES USED
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-cyan-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-white hover:bg-white/10 transition-colors"
              >
                <GithubIcon className="h-4 w-4" />
                <span>SOURCE CODE</span>
              </a>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-black hover:bg-cyan-400 transition-colors"
                >
                  <span>LIVE DEMO</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>

            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1.5 font-mono text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>VIEW FULL CASE STUDY PAGE</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
