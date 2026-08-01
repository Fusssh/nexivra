"use client";

import Section from "@/components/Section";
import { motion } from "framer-motion";

const INDUSTRIES = [
  "Fintech",
  "Healthcare",
  "Logistics",
  "E-commerce",
  "Climate Tech",
  "B2B SaaS",
  "Manufacturing",
  "Media & Entertainment",
  "Real Estate",
  "EdTech",
];

export default function IndustryMarquee() {
  const loop = [...INDUSTRIES, ...INDUSTRIES, ...INDUSTRIES];
  return (
    <Section tone="surface" className="border-y border-line py-8">
      <div className="flex items-center gap-10 overflow-hidden">
        <span className="font-mono-label shrink-0 pl-6 text-xs uppercase text-ink-faint lg:pl-8">
          Building across
        </span>
        <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-12 whitespace-nowrap">
            {loop.map((name, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.1, color: "var(--color-wire-cyan)", textShadow: "0 0 8px rgba(0,255,255,0.5)" }}
                transition={{ duration: 0.2 }}
                className="font-display text-lg text-ink-faint transition-colors cursor-default"
              >
                {name}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
