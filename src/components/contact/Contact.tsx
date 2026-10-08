"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { PROFILE_DATA } from "@/data/profile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { Check, Copy, Loader2, Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setIsError(true);
      setStatusMessage("Please fill out all fields before submitting.");
      return;
    }

    setLoading(true);
    setIsError(false);
    setStatusMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatusMessage(data.message || "Message processed successfully!");
        setFormData({ name: "", email: "", message: "" });
        // Celebration confetti burst
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 },
          colors: ["#00F2FE", "#38BDF8", "#8B5CF6"],
        });
      } else {
        setIsError(true);
        setStatusMessage(data.error || "Unable to send message.");
      }
    } catch {
      setIsError(true);
      setStatusMessage("Connection error. Please try emailing directly at contact.abbasummah01@gmail.com.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#05070B] overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute bottom-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-cyan-500/5 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="07 — CONTACT"
          title="LET'S BUILD SOMETHING."
          subtitle="Have an idea, opportunity, collaboration or interesting problem? Let's connect."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-2xl border border-white/10 bg-[#0A0E17]/80 p-8 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white mb-2">
                Open to High-Impact Opportunities
              </h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed mb-6">
                Whether you are exploring a summer engineering internship, looking for an applied AI developer for a hackathon, or interested in collaborating on TRUSTX or HerGuard, my inbox is always open.
              </p>

              {/* Email Copy Card */}
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="truncate">
                    <div className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
                      PRIMARY EMAIL
                    </div>
                    <div className="text-xs font-mono text-white truncate">
                      {PROFILE_DATA.contact.email}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="rounded-lg border border-white/10 bg-white/5 p-2 text-neutral-300 hover:text-white hover:bg-white/10 transition-colors shrink-0"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>

              {/* Direct Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${PROFILE_DATA.contact.email}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-black hover:shadow-[0_0_20px_rgba(0,242,254,0.3)] transition-all"
                >
                  <Mail className="h-4 w-4" />
                  <span>EMAIL ME</span>
                </a>

                <a
                  href={PROFILE_DATA.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-white hover:bg-white/10 transition-colors"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span>GITHUB</span>
                </a>

                <a
                  href={PROFILE_DATA.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-white hover:bg-white/10 transition-colors"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  <span>LINKEDIN</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <GlowCard className="p-8 sm:p-10" glowColor="cyan">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-mono text-xs uppercase tracking-widest text-neutral-300 mb-2"
                  >
                    YOUR NAME
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full rounded-xl border border-white/10 bg-[#05070B] px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-mono text-xs uppercase tracking-widest text-neutral-300 mb-2"
                  >
                    EMAIL ADDRESS
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="sarah@example.com"
                    className="w-full rounded-xl border border-white/10 bg-[#05070B] px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-mono text-xs uppercase tracking-widest text-neutral-300 mb-2"
                  >
                    MESSAGE / PROJECT SCOPE
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell me about your project, idea, or role..."
                    className="w-full rounded-xl border border-white/10 bg-[#05070B] px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>

                {statusMessage && (
                  <div
                    className={`rounded-xl p-4 font-mono text-xs leading-relaxed ${
                      isError
                        ? "bg-red-500/10 border border-red-500/30 text-red-300"
                        : "bg-emerald-500/10 border border-emerald-500/30 text-emerald-300"
                    }`}
                  >
                    {statusMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-black hover:shadow-[0_0_25px_rgba(0,242,254,0.4)] disabled:opacity-50 transition-all cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>DISPATCHING MESSAGE...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>TRANSMIT MESSAGE</span>
                    </>
                  )}
                </button>
              </form>
            </GlowCard>
          </div>
        </div>
      </div>
    </section>
  );
}
