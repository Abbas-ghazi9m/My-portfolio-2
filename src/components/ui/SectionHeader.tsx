import React from "react";

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  number,
  title,
  subtitle,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"
      }`}
    >
      <div
        className={`inline-flex items-center gap-2 font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-cyan-400 mb-3`}
      >
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f2fe]" />
        <span>{number}</span>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-neutral-400 font-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
