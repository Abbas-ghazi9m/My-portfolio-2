"use client";

import React, { useState } from "react";
import { PROFILE_DATA } from "@/data/profile";
import { Download, ExternalLink, Eye, FileText, Sparkles, X } from "lucide-react";

export function ResumeSection() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <section className="relative py-20 bg-[#05070B] overflow-hidden">
      {/* Background glow banner */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-[#0E1524] via-[#0D1829] to-[#121226] p-8 sm:p-14 backdrop-blur-xl shadow-2xl">
          {/* Ambient light streaks */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-12 -ml-12 h-64 w-64 rounded-full bg-violet-600/10 blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-cyan-300 mb-4">
                <Sparkles className="h-3 w-3 text-cyan-400" />
                <span>CURRICULUM VITAE</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
                READY TO BUILD SOMETHING?
              </h2>

              <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
                Explore my complete academic background, technical competencies, verified project history, and hackathon milestones in a structured one-page resume format.
              </p>

              <div className="mt-4 font-mono text-xs text-neutral-400 flex items-center gap-2">
                <span>FILE TARGET:</span>
                <code className="text-cyan-400 bg-black/40 px-2 py-0.5 rounded">
                  /public/resume.pdf
                </code>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <a
                href={PROFILE_DATA.resumeUrl}
                download="Mohammad_Abbas_Resume.pdf"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 font-mono text-xs font-bold uppercase tracking-wider text-black transition-all hover:shadow-[0_0_25px_rgba(0,242,254,0.4)] hover:brightness-110 active:scale-95"
              >
                <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                <span>DOWNLOAD RESUME</span>
              </a>

              <button
                onClick={() => setIsPreviewOpen(true)}
                className="inline-flex items-center gap-2.5 rounded-xl border border-white/20 bg-white/5 px-6 py-4 font-mono text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition-all hover:border-cyan-400/50 hover:bg-white/10 active:scale-95"
              >
                <Eye className="h-4 w-4 text-cyan-400" />
                <span>VIEW RESUME</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Preview Modal */}
      {isPreviewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
          <div className="relative w-full max-w-3xl rounded-2xl border border-white/20 bg-[#090D15] p-6 sm:p-8 text-white shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsPreviewOpen(false)}
              aria-label="Close resume preview"
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-neutral-400 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-widest mb-4">
              <FileText className="h-4 w-4" />
              <span>OFFICIAL RESUME PREVIEW</span>
            </div>

            <div className="border-b border-white/10 pb-6 mb-6">
              <h3 className="text-2xl font-bold uppercase text-white">
                MOHAMMAD ABBAS
              </h3>
              <p className="font-mono text-xs text-cyan-400 mt-1">
                AI Engineer • Full-Stack Developer • Builder
              </p>
              <p className="text-xs text-neutral-400 mt-2">
                Computer Science & Engineering Student • India • GitHub: github.com/Abbas-ghazi9m • LinkedIn: linkedin.com/in/abbasmohammad01
              </p>
            </div>

            <div className="space-y-6 text-sm text-neutral-300 font-light">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-semibold mb-2">
                  EDUCATION
                </h4>
                <div className="flex justify-between text-xs">
                  <span className="font-medium text-white">
                    B.Tech in Computer Science and Engineering
                  </span>
                  <span className="font-mono text-neutral-400">2024 – 2028</span>
                </div>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-semibold mb-2">
                  CORE TECHNICAL EXPERTISE
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  <strong className="text-white">AI & ML:</strong> Generative AI, LLM Apps (LangChain), RAG, Agent loops, Computer Vision<br />
                  <strong className="text-white">Full-Stack:</strong> Next.js 15, React, TypeScript, Python (FastAPI), Flutter, Node.js, Tailwind CSS<br />
                  <strong className="text-white">Systems & Web3:</strong> Solidity (EVM), ESP32 IoT, Git, Docker, REST/WebSockets
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-semibold mb-2">
                  SELECTED PROJECTS
                </h4>
                <div className="space-y-3 text-xs">
                  <div>
                    <span className="font-bold text-white">TRUSTX (AI + Blockchain):</span> AI anomaly detection with EVM Merkle proofs for document verification.
                  </div>
                  <div>
                    <span className="font-bold text-white">SkillChain (Web3 Credentials):</span> Soulbound credential passports and student skill radar verification.
                  </div>
                  <div>
                    <span className="font-bold text-white">ImaanUp (Mobile Lifestyle):</span> Gamified habit streaks, audio-synced Quran, haptic Tasbeeh in Flutter.
                  </div>
                  <div>
                    <span className="font-bold text-white">HERGUARD (IoT Safety):</span> ESP32 emergency distress hardware with GNSS and cellular SMS telemetry.
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-semibold mb-2">
                  HACKATHONS
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Finalist in Smart India Hackathon (SIH) Initiative • Participant in Decentralized Web & AI Hackathon • Prototype Award in EduTech Innovation Challenge.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <a
                href={PROFILE_DATA.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-cyan-400 hover:text-cyan-300"
              >
                <span>OPEN RAW PDF FILE</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>

              <a
                href={PROFILE_DATA.resumeUrl}
                download="Mohammad_Abbas_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-black hover:bg-cyan-400"
              >
                <Download className="h-4 w-4" />
                <span>DOWNLOAD FILE</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
