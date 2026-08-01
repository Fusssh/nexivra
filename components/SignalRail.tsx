"use client";

import { motion, useScroll, useSpring, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

/**
 * A vertical "transmission" rail fixed to the left edge on large screens.
 * It fills with page scroll progress and reports a live signal percentage —
 * a small, consistent nod to Nexivra's connectivity positioning without
 * being decorative for decoration's sake.
 */
export default function SignalRail() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.3,
  });
  const [pct, setPct] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setPct(Math.round(v * 100));
  });

  return (
    <div
      className="pointer-events-none fixed left-6 top-0 z-40 hidden h-screen w-6 lg:flex"
      aria-hidden="true"
    >
      <div className="relative mx-auto flex h-full flex-col items-center justify-center">
        <div className="relative h-[38vh] w-px overflow-hidden bg-line">
          <motion.div
            className="absolute inset-x-0 top-0 w-px bg-gradient-to-b from-wire-cyan to-signal-amber"
            style={{ scaleY: smooth, transformOrigin: "top" }}
          />
        </div>
        <div className="mt-3 flex flex-col items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-signal-amber animate-pulse-slow" />
          <span className="font-mono-label rotate-180 text-[10px] text-ink-faint [writing-mode:vertical-rl]">
            {pct.toString().padStart(2, "0")}%
          </span>
        </div>
      </div>
    </div>
  );
}
