"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: "cyan" | "violet" | "emerald";
}

export function GlowCard({
  children,
  className = "",
  glowColor = "cyan",
  ...props
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const colorMap = {
    cyan: "rgba(0, 242, 254, 0.12)",
    violet: "rgba(139, 92, 246, 0.12)",
    emerald: "rgba(16, 185, 129, 0.12)",
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative rounded-2xl border border-white/10 bg-[#0A0E17]/80 backdrop-blur-xl transition-all duration-300 overflow-hidden",
        className
      )}
      {...props}
    >
      {/* Dynamic Cursor Light Spot */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${colorMap[glowColor]}, transparent 80%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
