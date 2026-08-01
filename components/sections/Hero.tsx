"use client";

import { motion, animate, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Eyebrow from "@/components/Eyebrow";

const EASE = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: EASE } },
};

const STATS = [
  { value: "60+", label: "Products shipped" },
  { value: "12", label: "Industries served" },
  { value: "99.95%", label: "Avg. platform uptime" },
];

function StatValue({ value }: { value: string }) {
  const [count, setCount] = useState(0);
  const numMatch = value.match(/[\d.]+/);
  const num = numMatch ? parseFloat(numMatch[0]) : 0;
  const isFloat = value.includes(".");
  const suffix = value.replace(/[\d.]+/, "");

  useEffect(() => {
    const controls = animate(0, num, {
      duration: 2.5,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setCount(v),
    });
    return controls.stop;
  }, [num]);

  return (
    <>{isFloat ? count.toFixed(2) : Math.round(count)}{suffix}</>
  );
}

export default function Hero() {
  const headingText = "Building the Next Digital Future.".split(" ");

  return (
    <Section image="/images/hero-network.svg" overlay="light" className="min-h-[92vh]">
      <div className="mx-auto grid min-h-[92vh] max-w-7xl grid-cols-1 items-center gap-16 px-6 pb-20 pt-28 lg:grid-cols-2 lg:px-8">
        <div>
          <motion.div variants={container} initial="hidden" animate="show" className="max-w-2xl">
            <motion.div variants={item}>
              <Eyebrow>Software solutions studio</Eyebrow>
            </motion.div>

            <h1 className="mt-6 text-balance font-display text-5xl font-medium leading-[1.05] text-ink-fg sm:text-6xl flex flex-wrap gap-x-3">
              {headingText.map((word, i) => (
                <motion.span
                  key={i}
                  variants={item}
                  className={i >= 2 ? "text-wire-cyan" : ""}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              variants={item}
              className="mt-7 max-w-xl text-balance text-lg leading-relaxed text-ink-muted"
            >
              Nexivra Technologies designs, builds, and scales the software behind
              ambitious companies — from first prototype to systems that carry
              millions of users.
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button href="/contact" variant="primary">
                  Start a project
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button href="/services" variant="secondary" icon={false}>
                  Explore our services
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.dl
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-20 grid max-w-2xl grid-cols-3 gap-6 border-t border-line pt-8"
          >
            {STATS.map((stat) => (
              <motion.div key={stat.label} variants={item}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-3xl font-medium text-ink-fg sm:text-4xl">
                  <StatValue value={stat.value} />
                </dd>
                <dd className="mt-1 font-mono-label text-[11px] uppercase text-ink-faint">
                  {stat.label}
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>

        {/* Right Column Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: EASE }}
          className="relative hidden lg:block -mt-30"
        >
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative overflow-hidden rounded-2xl border border-line-strong bg-surface-2/90 shadow-2xl backdrop-blur-sm"
          >
            <div className="flex items-center gap-2 border-b border-line px-4 py-3 bg-surface/50">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
              <div className="h-2.5 w-2.5 rounded-full bg-signal-amber/80" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
              <div className="ml-3 font-mono text-[10px] uppercase text-ink-faint">system_init.ts</div>
            </div>
            <div className="p-6 font-mono text-sm leading-loose">
              <p><span className="text-[#ff79c6]">import</span> {"{"} <span className="text-ink-fg">Nexus</span> {"}"} <span className="text-[#ff79c6]">from</span> <span className="text-[#f1fa8c]">'@nexivra/core'</span>;</p>
              <br />
              <p><span className="text-[#ff79c6]">const</span> <span className="text-wire-cyan">cluster</span> = <span className="text-[#ff79c6]">new</span> <span className="text-[#8be9fd] italic">Nexus</span>({"{"}</p>
              <p className="pl-6"><span className="text-ink-fg">scale</span>: <span className="text-[#bd93f9]">Infinity</span>,</p>
              <p className="pl-6"><span className="text-ink-fg">region</span>: <span className="text-[#f1fa8c]">'global'</span>,</p>
              <p className="pl-6"><span className="text-ink-fg">reliability</span>: <span className="text-[#f1fa8c]">'absolute'</span></p>
              <p>{"}"});</p>
              <br />
              <p><span className="text-[#ff79c6]">await</span> <span className="text-wire-cyan">cluster</span>.<span className="text-[#50fa7b]">deploy</span>();</p>
              <div className="mt-4 border-t border-line pt-4 text-xs text-ink-faint">
                <motion.p
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-[#50fa7b]"
                >
                  &gt; All systems nominal. Ready for scale.
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Glowing background accent */}
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-wire-cyan/20 to-transparent blur-3xl opacity-50" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-1 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <motion.span
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="font-mono-label text-[10px] uppercase text-wire-cyan"
        >
          Scroll
        </motion.span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-gradient-to-b from-wire-cyan to-transparent"
        />
      </motion.div>
    </Section>
  );
}
