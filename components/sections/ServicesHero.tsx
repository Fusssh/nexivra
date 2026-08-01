import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";

export default function ServicesHero() {
  return (
    <Section image="/images/services-hex.svg" overlay="light" className="pt-32">
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-32">
        <Reveal className="max-w-3xl">
          <Eyebrow>Services</Eyebrow>
          <h1 className="mt-6 text-balance font-display text-5xl font-medium leading-[1.08] text-ink-fg sm:text-6xl">
            Four disciplines. One accountable team.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-muted">
            We take on the parts of software delivery most vendors split
            across teams — product engineering, cloud infrastructure, data
            systems, and design — under a single point of accountability.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
