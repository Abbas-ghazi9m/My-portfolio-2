"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Skills } from "@/components/skills/Skills";
import { Projects } from "@/components/projects/Projects";
import { Hackathons } from "@/components/hackathons/Hackathons";
import { Journey } from "@/components/journey/Journey";
import { GitHubSection } from "@/components/github/GitHubSection";
import { ResumeSection } from "@/components/resume/ResumeSection";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";
import { AiAssistant } from "@/components/ai-assistant/AiAssistant";

export default function Home() {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#05070B] text-white overflow-x-hidden selection:bg-cyan-500/25 selection:text-white">
      {/* Global Navbar */}
      <Navbar onOpenAssistant={() => setIsAssistantOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Hackathons />
        <Journey />
        <GitHubSection />
        <ResumeSection />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating AI Portfolio Assistant */}
      <AiAssistant
        isOpen={isAssistantOpen}
        onOpen={() => setIsAssistantOpen(true)}
        onClose={() => setIsAssistantOpen(false)}
      />
    </div>
  );
}
