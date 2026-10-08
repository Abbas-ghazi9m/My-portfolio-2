import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS_DATA } from "@/data/projects";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Layers,
  TrendingUp,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.name} Case Study — Mohammad Abbas Portfolio`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.name} — ${project.category}`,
      description: project.shortDescription,
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Find next project for seamless cycling
  const currentIndex = PROJECTS_DATA.findIndex((p) => p.slug === slug);
  const nextProject = PROJECTS_DATA[(currentIndex + 1) % PROJECTS_DATA.length];

  return (
    <main className="min-h-screen bg-[#05070B] text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-cyan-500/30 selection:text-white">
      {/* Background gradients */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 -z-10" />
      <div className="fixed top-1/4 left-1/4 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-5xl">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-400 hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>BACK TO PORTFOLIO WORK</span>
          </Link>
        </div>

        {/* Header Metadata */}
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest text-cyan-400 mb-4">
          <span>PROJECT {project.number}</span>
          <span>{"//"}</span>
          <span>{project.category}</span>
          <span>{"//"}</span>
          <span className="rounded-full bg-cyan-500/10 border border-cyan-500/30 px-3 py-0.5 text-cyan-300">
            {project.status}
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white mb-4">
          {project.name}
        </h1>

        {project.tagline && (
          <p className="font-mono text-lg text-cyan-400/90 mb-6">
            {"// " + project.tagline}
          </p>
        )}

        <p className="text-lg sm:text-xl text-neutral-300 font-light leading-relaxed mb-8 max-w-3xl">
          {project.fullOverview}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-white hover:bg-white/10 transition-colors"
          >
            <GithubIcon className="h-4 w-4" />
            <span>VIEW SOURCE REPOSITORY</span>
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-black hover:bg-cyan-400 transition-colors"
            >
              <span>EXPERIENCE LIVE DEMO</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>

        {/* Hero Visual Preview */}
        <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-white/15 bg-neutral-900 mb-12 shadow-2xl">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Metrics Grid */}
        {project.metrics && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
            {project.metrics.map((m, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-[#0A0E17]/80 p-6 text-center backdrop-blur-md"
              >
                <div className="font-mono text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-200">
                  {m.value}
                </div>
                <div className="font-mono text-xs text-neutral-400 uppercase tracking-widest mt-2">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Problem & Solution Detailed Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          <div className="rounded-3xl border border-red-500/20 bg-red-500/[0.03] p-8">
            <div className="font-mono text-xs uppercase tracking-widest text-red-400 font-bold mb-3">
              01 // THE CHALLENGE & PROBLEM
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Addressing critical gaps in legacy workflows
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed font-light">
              {project.problem}
            </p>
          </div>

          <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/[0.03] p-8">
            <div className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-bold mb-3">
              02 // THE ARCHITECTURAL SOLUTION
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Engineering a scalable, verifiable answer
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed font-light">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Architectural Layers */}
        <div className="rounded-3xl border border-white/10 bg-[#0A0E17]/90 p-8 sm:p-10 mb-14 backdrop-blur-xl">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-widest mb-2">
            <Layers className="h-4 w-4" />
            <span>SYSTEM ARCHITECTURE BLUEPRINT</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Multi-Layer Modular Architecture
          </h3>
          <p className="text-sm text-neutral-400 mb-8 max-w-2xl">
            {project.architecture.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.architecture.layers.map((layer, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-[#101624] p-6 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 font-mono text-4xl font-black text-white/5 pr-4 pt-2">
                  0{idx + 1}
                </div>
                <div className="font-mono text-xs text-cyan-400 tracking-widest mb-1">
                  LAYER {idx + 1}
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  {layer.title}
                </h4>
                <div className="font-mono text-[11px] text-violet-300 mb-3 bg-violet-500/10 px-2 py-1 rounded inline-block">
                  {layer.tech}
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {layer.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Features & Overcoming Challenges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {/* Key Features */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
            <h3 className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-bold mb-4">
              CAPABILITIES & FEATURES
            </h3>
            <div className="flex flex-col gap-3">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs text-neutral-300"
                >
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Hurdles Solved */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
            <h3 className="font-mono text-xs uppercase tracking-widest text-violet-400 font-bold mb-4">
              TECHNICAL HURDLES OVERCOME
            </h3>
            <div className="flex flex-col gap-3">
              {project.challenges.map((challenge, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs text-neutral-300"
                >
                  <span className="font-mono text-violet-400 text-xs font-bold shrink-0">
                    #{idx + 1}
                  </span>
                  <span>{challenge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Future Roadmap Improvements */}
        <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/[0.02] p-8 mb-16">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400 mb-3">
            <TrendingUp className="h-4 w-4" />
            <span>FORWARD ROADMAP</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-4">
            Next Engineering Iterations
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.futureImprovements.map((item, idx) => (
              <li
                key={idx}
                className="rounded-xl border border-white/10 bg-[#0E1420] p-4 text-xs text-neutral-300 leading-relaxed font-light"
              >
                <span className="font-mono text-cyan-400 text-[10px] block mb-1">
                  PHASE // 0{idx + 1}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Next Project Footer Link */}
        <div className="border-t border-white/10 pt-8 flex items-center justify-between">
          <Link
            href="/#projects"
            className="font-mono text-xs uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
          >
            ← BACK TO ALL PROJECTS
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>NEXT CASE: {nextProject.name}</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
