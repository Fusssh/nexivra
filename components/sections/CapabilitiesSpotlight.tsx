import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";

const CAPABILITIES = [
  { value: "40+", label: "Languages & frameworks in production" },
  { value: "24/7", label: "Platform monitoring & on-call coverage" },
  { value: "SOC 2", label: "Aligned security & delivery practices" },
];

export default function CapabilitiesSpotlight() {
  return (
    <Section image="/images/about-blueprint.svg" overlay="medium" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <Eyebrow>Under the hood</Eyebrow>
            <h2 className="mt-5 text-balance font-display text-4xl font-medium leading-tight text-ink-fg sm:text-5xl">
              Engineering discipline you don&rsquo;t have to ask about.
            </h2>
            <p className="mt-5 max-w-md text-ink-muted">
              Code review, test coverage, and deployment practices are set
              before the first sprint starts — not retrofitted after
              something breaks in production.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {CAPABILITIES.map((cap) => (
              <div key={cap.label} className="border-t border-line-strong pt-5">
                <p className="font-display text-2xl font-medium text-signal-amber">
                  {cap.value}
                </p>
                <p className="mt-2 text-sm leading-snug text-ink-muted">{cap.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
