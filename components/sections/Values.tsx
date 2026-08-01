import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";
import { ShieldCheck, Gauge, Users, Sparkles } from "lucide-react";

const VALUES = [
  {
    icon: Gauge,
    title: "Ship in weeks, not quarters",
    description: "Momentum compounds. We break work into pieces you can see and use quickly.",
  },
  {
    icon: ShieldCheck,
    title: "Own the outcome",
    description: "We measure ourselves on what the product does for your business, not on hours logged.",
  },
  {
    icon: Users,
    title: "Work as one team",
    description: "Your engineers and ours sit in the same standups, the same repos, the same decisions.",
  },
  {
    icon: Sparkles,
    title: "Build for the next five years",
    description: "Fast doesn't mean fragile. Every system we ship is one we'd be glad to inherit.",
  },
];

export default function Values() {
  return (
    <Section tone="ink" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-xl">
          <Eyebrow tone="amber">What we believe</Eyebrow>
          <h2 className="mt-5 text-balance font-display text-4xl font-medium leading-tight text-ink-fg sm:text-5xl">
            Four principles that shape every engagement.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {VALUES.map((value, i) => (
            <Reveal
              key={value.title}
              delay={i * 0.07}
              className="rounded-2xl border border-line bg-surface p-8 transition-colors hover:border-line-strong"
            >
              <value.icon className="h-6 w-6 text-signal-amber" strokeWidth={1.5} />
              <h3 className="mt-5 font-display text-xl font-medium text-ink-fg">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {value.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
