"use client";

import { useRef } from "react";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const STEPS = [
  {
    n: "01",
    title: "Discover",
    description: "We map the problem, the constraints, and what success has to look like in 90 days.",
  },
  {
    n: "02",
    title: "Design",
    description: "Architecture and interface decisions get made together, before a line of production code.",
  },
  {
    n: "03",
    title: "Build",
    description: "Short, visible iterations. You see working software every week, not at the end.",
  },
  {
    n: "04",
    title: "Operate",
    description: "We stay on for monitoring, scaling, and the next release — not just the handoff.",
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Section tone="surface" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8" ref={containerRef}>
        <Reveal className="max-w-xl">
          <Eyebrow tone="amber">How we work</Eyebrow>
          <h2 className="mt-5 text-balance font-display text-4xl font-medium leading-tight text-ink-fg sm:text-5xl">
            A process built for shipping, not for meetings.
          </h2>
        </Reveal>

        <div className="relative mt-16 rounded-2xl border border-line bg-line overflow-hidden">
          {/* Animated line indicator */}
          <motion.div 
            className="absolute top-0 left-0 h-1 bg-gradient-to-r from-wire-cyan to-wire-amber z-10 origin-left w-full hidden sm:block"
            style={{ scaleX }}
          />

          <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.08} scale={0.96} className="bg-surface p-8 relative overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-wire-cyan/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                />
                <motion.span 
                  whileHover={{ scale: 1.1, x: 5 }}
                  className="inline-block font-mono-label text-sm text-wire-cyan mb-4"
                >
                  {step.n}
                </motion.span>
                <h3 className="font-display text-xl font-medium text-ink-fg">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
