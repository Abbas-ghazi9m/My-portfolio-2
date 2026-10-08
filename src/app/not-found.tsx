import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#05070B] text-white px-4 text-center relative overflow-hidden bg-grid-pattern">
      {/* Background glow */}
      <div className="absolute w-96 h-96 rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-md mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-cyan-300 mb-6">
          <Compass className="h-3.5 w-3.5 text-cyan-400" />
          <span>ERROR 404 // ROUTE NOT FOUND</span>
        </div>

        <h1 className="text-7xl sm:text-9xl font-black font-mono tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-500">
          404
        </h1>

        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-white mt-4 mb-2">
          THIS PAGE DOESN&apos;T EXIST.
        </h2>

        <p className="text-sm text-neutral-400 font-light mb-8 leading-relaxed">
          The requested coordinate or project slug does not match any deployed routes on this node.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-black hover:bg-cyan-400 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>RETURN HOME</span>
        </Link>
      </div>
    </main>
  );
}
