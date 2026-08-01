import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";
import Button from "@/components/Button";

const METRICS = [
  { value: "4.2x", label: "Faster checkout flow" },
  { value: "-38%", label: "Infra cost after migration" },
  { value: "6 wks", label: "Prototype to first release" },
];

export default function CaseHighlight() {
  return (
    <Section image="/images/about-blueprint.svg" overlay="medium" className="py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-end">
          <Reveal>
            <Eyebrow>Field notes</Eyebrow>
            <h2 className="mt-5 text-balance font-display text-4xl font-medium leading-tight text-ink-fg sm:text-5xl">
              Rebuilding a checkout platform for scale, in one quarter.
            </h2>
            <p className="mt-5 max-w-lg text-ink-muted">
              A retail platform came to us with a checkout system that broke
              under peak load. We re-architected the payment path, moved the
              catalog to an edge-cached layer, and shipped without a single day
              of downtime.
            </p>
            <Button href="/contact" variant="secondary" className="mt-8">
              Talk through your build
            </Button>
          </Reveal>

          <Reveal delay={0.1} className="grid grid-cols-3 gap-6 border-t border-line-strong pt-8 lg:gap-8">
            {METRICS.map((metric) => (
              <div key={metric.label}>
                <p className="font-display text-3xl font-medium text-wire-cyan sm:text-4xl">
                  {metric.value}
                </p>
                <p className="mt-2 font-mono-label text-[11px] uppercase leading-snug text-ink-muted">
                  {metric.label}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
