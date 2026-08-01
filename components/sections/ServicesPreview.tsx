"use client";

import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";
import Button from "@/components/Button";
import { Boxes, Cloud, LineChart, Palette } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const SERVICES = [
  {
    icon: Boxes,
    title: "Product Engineering",
    description: "Full-cycle web and mobile products, from prototype to production.",
  },
  {
    icon: Cloud,
    title: "Cloud & Platform",
    description: "Resilient infrastructure, CI/CD, and systems that scale with you.",
  },
  {
    icon: LineChart,
    title: "Data & AI Systems",
    description: "Pipelines, analytics, and applied ML that inform real decisions.",
  },
  {
    icon: Palette,
    title: "Design Systems",
    description: "Interfaces and component libraries built for consistency at scale.",
  },
];

function ServiceCard({ service, index }: { service: typeof SERVICES[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Reveal delay={index * 0.08} scale={0.96} className="bg-ink/40 backdrop-blur-sm relative overflow-hidden group h-full">
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="h-full p-8 relative z-10"
      >
        <motion.div
          animate={{
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 5 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <service.icon className="h-6 w-6 text-wire-cyan transition-colors duration-300 group-hover:text-white" strokeWidth={1.5} />
        </motion.div>
        <h3 className="mt-4 font-display text-lg font-medium text-ink-fg transition-colors duration-300 group-hover:text-white">
          {service.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted transition-colors duration-300 group-hover:text-ink-fg">
          {service.description}
        </p>
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-wire-cyan/10 to-transparent opacity-0 z-0"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </Reveal>
  );
}

export default function ServicesPreview() {
  return (
    <Section tone="ink" className="relative">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-5">
        <div className="flex flex-col justify-center px-6 py-24 lg:col-span-2 lg:px-8 lg:py-32">
          <Reveal scale={0.98}>
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-5 text-balance font-display text-4xl font-medium leading-tight text-ink-fg sm:text-5xl">
              One team, four disciplines, a single outcome.
            </h2>
            <p className="mt-5 max-w-md text-ink-muted">
              We don&rsquo;t hand you off between silos. The people who scope your
              product are the ones who ship it.
            </p>
            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }} className="inline-block">
              <Button href="/services" variant="ghost" className="mt-8 px-0">
                View all services
              </Button>
            </motion.div>
          </Reveal>
        </div>

        {/* Immersive image panel — occupies ~60% of this section's width on desktop */}
        <div className="relative min-h-[420px] lg:col-span-3">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/services-hex.svg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/40 lg:bg-gradient-to-l" />
          <div className="relative grid h-full grid-cols-1 gap-px bg-line sm:grid-cols-2">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
