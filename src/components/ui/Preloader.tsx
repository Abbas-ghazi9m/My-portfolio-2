"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if user already saw the preloader in this session
    if (typeof window !== "undefined" && sessionStorage.getItem("abbas_portfolio_intro")) {
      return;
    }

    const startTimer = setTimeout(() => {
      setLoading(true);
    }, 10);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            sessionStorage.setItem("abbas_portfolio_intro", "true");
          }, 400);
          return 100;
        }
        const increment = Math.floor(Math.random() * 15) + 10;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => {
      clearTimeout(startTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#05070B] text-white"
        >
          {/* Subtle Ambient Background Glow */}
          <div className="absolute w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
          <div className="absolute w-64 h-64 rounded-full bg-violet-600/10 blur-[100px] pointer-events-none" />

          {/* Monogram Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_40px_rgba(0,242,254,0.15)]"
          >
            <span className="font-mono text-2xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 via-sky-300 to-violet-400">
              AB
            </span>
            <div className="absolute -inset-1 rounded-2xl border border-cyan-400/20 animate-pulse pointer-events-none" />
          </motion.div>

          {/* Name & Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-xl md:text-2xl font-bold tracking-[0.25em] text-white">
              MOHAMMAD ABBAS
            </h2>
            <p className="mt-2 font-mono text-xs tracking-[0.3em] text-cyan-400/80">
              INITIALIZING EXPERIENCE...
            </p>
          </motion.div>

          {/* Progress Bar & Percentage */}
          <div className="mt-8 w-48 md:w-64">
            <div className="relative h-1 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 to-violet-500 shadow-[0_0_12px_#00f2fe]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.15 }}
              />
            </div>
            <div className="mt-2 flex justify-between font-mono text-[10px] text-neutral-400 tracking-wider">
              <span>SYSTEM: ONLINE</span>
              <span>{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
