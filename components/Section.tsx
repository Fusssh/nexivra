"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  /** Background image path — when set, the section becomes an immersive image section. */
  image?: string;
  /** Overlay strength so text stays readable over the artwork. */
  overlay?: "light" | "medium" | "heavy";
  tone?: "ink" | "surface" | "surface-2";
};

const overlays = {
  light: "from-ink/70 via-ink/55 to-ink/85",
  medium: "from-ink/85 via-ink/75 to-ink",
  heavy: "from-ink/95 via-ink/90 to-ink",
};

const tones = {
  ink: "bg-ink",
  surface: "bg-surface",
  "surface-2": "bg-surface-2",
};

export default function Section({
  children,
  id,
  className = "",
  image,
  overlay = "medium",
  tone = "ink",
}: SectionProps) {
  if (image) {
    return (
      <section id={id} className={`relative isolate overflow-hidden ${className}`}>
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -inset-[5%] -z-20 bg-cover bg-center"
          style={{ backgroundImage: `url('${image}')` }}
        />
        <div className={`absolute inset-0 -z-10 bg-gradient-to-b ${overlays[overlay]}`} />
        {children}
      </section>
    );
  }

  return (
    <section id={id} className={`${tones[tone]} ${className}`}>
      {children}
    </section>
  );
}
