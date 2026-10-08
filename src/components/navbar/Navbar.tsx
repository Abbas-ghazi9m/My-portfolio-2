"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROFILE_DATA } from "@/data/profile";
import { Bot, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenAssistant?: () => void;
}

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Expertise", href: "#expertise" },
  { name: "Projects", href: "#projects" },
  { name: "Hackathons", href: "#hackathons" },
  { name: "Journey", href: "#journey" },
  { name: "Contact", href: "#contact" },
];

export function Navbar({ onOpenAssistant }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section spy
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.substring(1);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
        <div
          className={`mx-auto max-w-7xl rounded-2xl transition-all duration-300 ${
            scrolled
              ? "glass-panel bg-[#05070B]/80 border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.5)] px-4 sm:px-6 py-3"
              : "bg-transparent border-transparent px-2 py-4"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo Monogram */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="group flex items-center gap-3 cursor-pointer"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 font-mono text-xs font-black tracking-widest text-cyan-400 backdrop-blur-md transition-all group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,242,254,0.3)]">
                AB
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold tracking-wider text-white">
                  MOHAMMAD ABBAS
                </span>
                <span className="font-mono text-[9px] text-neutral-400 tracking-widest hidden sm:inline">
                  AI ENGINEER & BUILDER
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 rounded-full border border-white/5 bg-white/[0.03] p-1.5 backdrop-blur-md">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative rounded-full px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                      isActive
                        ? "text-cyan-400 font-semibold"
                        : "text-neutral-400 hover:text-neutral-200"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 rounded-full bg-cyan-400/10 border border-cyan-400/30"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </a>
                );
              })}
            </nav>

            {/* Right Status Badge & AI trigger */}
            <div className="flex items-center gap-3">
              {/* Opportunities Status Pill */}
              <div className="hidden md:flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 font-mono text-[10px] tracking-wider text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{PROFILE_DATA.status.text}</span>
              </div>

              {/* Ask Abbas AI Button */}
              {onOpenAssistant && (
                <button
                  onClick={onOpenAssistant}
                  className="flex items-center gap-1.5 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3.5 py-1.5 font-mono text-xs font-semibold text-cyan-300 transition-all hover:bg-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,242,254,0.3)] active:scale-95"
                >
                  <Bot className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
                  <span className="hidden sm:inline">ASK AI</span>
                </button>
              )}

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="flex lg:hidden h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-neutral-300 hover:text-white"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 rounded-2xl border border-white/10 bg-[#0A0E17]/95 p-6 backdrop-blur-2xl shadow-2xl lg:hidden"
          >
            <div className="flex flex-col gap-3">
              {/* Status in mobile menu */}
              <div className="flex items-center gap-2 rounded-lg bg-emerald-500/10 p-2 font-mono text-xs text-emerald-400 mb-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{PROFILE_DATA.status.text}</span>
              </div>

              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between rounded-xl px-4 py-3 font-mono text-sm uppercase tracking-wider text-neutral-300 hover:bg-white/5 hover:text-cyan-400 transition-colors"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-neutral-400">→</span>
                </a>
              ))}

              {onOpenAssistant && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAssistant();
                  }}
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 py-3 font-mono text-xs font-bold text-cyan-300"
                >
                  <Bot className="h-4 w-4 text-cyan-400" />
                  <span>OPEN ABBAS AI ASSISTANT</span>
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
