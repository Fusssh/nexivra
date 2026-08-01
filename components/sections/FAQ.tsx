"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";

const FAQS = [
  {
    q: "How quickly can you start?",
    a: "Most engagements kick off within two to three weeks of signing, once we've scoped the first milestone together.",
  },
  {
    q: "Do you work with early-stage startups?",
    a: "Yes — about a third of our clients are pre-Series A. We scope engagements to match runway, not just enterprise budgets.",
  },
  {
    q: "What does a typical team look like?",
    a: "A lead engineer, 2–4 senior engineers, and a designer where needed — sized to the scope, not a fixed template.",
  },
  {
    q: "Can you take over an existing codebase?",
    a: "Regularly. We start with a two-week technical audit before committing to a delivery timeline.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section tone="surface" className="py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Reveal className="text-center">
          <Eyebrow>Common questions</Eyebrow>
          <h2 className="mt-5 text-balance font-display text-4xl font-medium leading-tight text-ink-fg sm:text-5xl">
            Before you write in
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-line border-y border-line">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg font-medium text-ink-fg">
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 text-wire-cyan"
                  >
                    <Plus className="h-5 w-5" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-sm leading-relaxed text-ink-muted">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
