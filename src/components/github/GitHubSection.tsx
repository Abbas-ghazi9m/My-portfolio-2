"use client";

import React, { useEffect, useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { FALLBACK_GITHUB_STATS, GitHubStats } from "@/lib/github";
import {
  Code2,
  ExternalLink,
  Flame,
  GitCommit,
  GitFork,
  Info,
  Star,
} from "lucide-react";

export function GitHubSection() {
  const [stats, setStats] = useState<GitHubStats>(FALLBACK_GITHUB_STATS);
  const [isLive, setIsLive] = useState(false);
  const [infoMessage, setInfoMessage] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/github")
      .then((res) => res.json())
      .then((res) => {
        if (res.data) {
          setStats(res.data);
          setIsLive(res.isLive);
          if (res.message) setInfoMessage(res.message);
        }
      })
      .catch(() => {
        // Fallback already pre-set
      });
  }, []);

  // Generate 52 weeks mock contribution blocks for the activity heatmap
  const weeks = Array.from({ length: 36 }, (_, wIdx) => {
    return Array.from({ length: 7 }, (_, dIdx) => {
      // Deterministic pseudo-randomness for realistic github graph
      const seed = (wIdx * 7 + dIdx * 13) % 10;
      if (seed < 2) return 0;
      if (seed < 5) return 1;
      if (seed < 8) return 2;
      return 3;
    });
  });

  const getHeatmapColor = (level: number) => {
    switch (level) {
      case 3:
        return "bg-cyan-400";
      case 2:
        return "bg-cyan-600/80";
      case 1:
        return "bg-cyan-900/60";
      case 0:
      default:
        return "bg-white/[0.04]";
    }
  };

  return (
    <section id="github" className="relative py-24 sm:py-32 bg-[#05070B] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="06 — GITHUB & ACTIVITY"
          title="Open-Source Footprint & Commits"
          subtitle="Continuous shipping velocity, public code repositories, and engineering activity."
        />

        {/* Configuration Notice if not live */}
        {!isLive && (
          <div className="mb-8 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4 flex items-start gap-3">
            <Info className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
            <div className="text-xs text-neutral-300">
              <span className="font-semibold text-white">Curated Showcase Mode Active: </span>
              {infoMessage ||
                "Displaying verified repository portfolio. Configure GITHUB_TOKEN in .env.local to stream live commit events."}
            </div>
          </div>
        )}

        {/* Top GitHub Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <GlowCard className="p-5 text-center" glowColor="cyan">
            <div className="font-mono text-3xl font-black text-cyan-400">
              {stats.publicRepos}+
            </div>
            <div className="font-mono text-[11px] text-neutral-400 uppercase tracking-widest mt-1">
              REPOSITORIES
            </div>
          </GlowCard>

          <GlowCard className="p-5 text-center" glowColor="cyan">
            <div className="font-mono text-3xl font-black text-violet-400">
              {stats.totalStars}+
            </div>
            <div className="font-mono text-[11px] text-neutral-400 uppercase tracking-widest mt-1">
              REPOSITORY STARS
            </div>
          </GlowCard>

          <GlowCard className="p-5 text-center" glowColor="cyan">
            <div className="font-mono text-3xl font-black text-emerald-400">
              {stats.contributionsThisYear}+
            </div>
            <div className="font-mono text-[11px] text-neutral-400 uppercase tracking-widest mt-1">
              ANNUAL COMMITS
            </div>
          </GlowCard>

          <GlowCard className="p-5 text-center" glowColor="cyan">
            <div className="font-mono text-3xl font-black text-amber-400 flex items-center justify-center gap-1">
              <Flame className="h-6 w-6 text-amber-400" />
              <span>{stats.streakDays}d</span>
            </div>
            <div className="font-mono text-[11px] text-neutral-400 uppercase tracking-widest mt-1">
              ACTIVE STREAK
            </div>
          </GlowCard>
        </div>

        {/* Contribution Heatmap Preview */}
        <div className="rounded-2xl border border-white/10 bg-[#0A0E17]/80 p-6 sm:p-8 backdrop-blur-xl mb-12">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2 font-mono text-xs text-white">
              <GitCommit className="h-4 w-4 text-cyan-400" />
              <span>CONTRIBUTION MATRIX</span>
              <span className="text-neutral-500">•</span>
              <span className="text-neutral-400">Past 9 Months</span>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-neutral-400">
              <span>Less</span>
              <span className="h-2.5 w-2.5 rounded-sm bg-white/[0.04]" />
              <span className="h-2.5 w-2.5 rounded-sm bg-cyan-900/60" />
              <span className="h-2.5 w-2.5 rounded-sm bg-cyan-600/80" />
              <span className="h-2.5 w-2.5 rounded-sm bg-cyan-400" />
              <span>More</span>
            </div>
          </div>

          {/* Matrix Grid */}
          <div className="overflow-x-auto pb-2">
            <div className="flex gap-1.5 min-w-[680px]">
              {weeks.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1.5">
                  {week.map((day, dIdx) => (
                    <div
                      key={dIdx}
                      className={`h-3 w-3 rounded-sm transition-colors hover:ring-1 hover:ring-cyan-300 ${getHeatmapColor(
                        day
                      )}`}
                      title={`Activity block ${wIdx}, day ${dIdx}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Languages Spectrum Bar */}
          <div className="mt-8 pt-6 border-t border-white/5">
            <div className="font-mono text-xs text-neutral-400 uppercase tracking-widest mb-3">
              PRIMARY CODEBASE BREAKDOWN
            </div>
            <div className="flex h-2 w-full overflow-hidden rounded-full bg-white/5 mb-3">
              {stats.topLanguages.map((lang) => (
                <div
                  key={lang.name}
                  style={{
                    width: `${lang.percentage}%`,
                    backgroundColor: lang.color,
                  }}
                  title={`${lang.name}: ${lang.percentage}%`}
                />
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
              {stats.topLanguages.map((lang) => (
                <div key={lang.name} className="flex items-center gap-1.5">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: lang.color }}
                  />
                  <span className="text-neutral-300">{lang.name}</span>
                  <span className="text-neutral-400">{lang.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Repositories Grid */}
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-400 mb-4">
          SELECTED REPOSITORIES
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {stats.featuredRepos.map((repo) => (
            <GlowCard key={repo.id} className="p-6 flex flex-col justify-between" glowColor="cyan">
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 font-mono text-sm font-bold text-white group-hover:text-cyan-300">
                    <Code2 className="h-4 w-4 text-cyan-400" />
                    <span>{repo.name}</span>
                  </div>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-white"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed font-light mb-4 line-clamp-3">
                  {repo.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {repo.topics.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="rounded bg-white/5 px-2 py-0.5 font-mono text-[9px] text-neutral-400"
                    >
                      #{topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between font-mono text-xs text-neutral-400">
                <div className="flex items-center gap-1.5">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: repo.languageColor }}
                  />
                  <span>{repo.language}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-neutral-400">
                    <Star className="h-3.5 w-3.5 text-amber-400" />
                    <span>{repo.stars}</span>
                  </span>
                  <span className="flex items-center gap-1 text-neutral-400">
                    <GitFork className="h-3.5 w-3.5" />
                    <span>{repo.forks}</span>
                  </span>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
