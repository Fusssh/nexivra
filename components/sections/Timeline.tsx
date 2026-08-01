import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";

const PILLARS = [
  { step: "01", title: "Engineering Excellence", description: "We don't cut corners. Every product is built on scalable, robust infrastructure from day one." },
  { step: "02", title: "Remote-First", description: "A fully distributed team allowing us to bring the best global talent to your projects, regardless of borders." },
  { step: "03", title: "Client Partnership", description: "We work as an extension of your team, providing transparent, senior-led delivery without the agency runaround." },
  { step: "04", title: "Rapid Iteration", description: "Fast feedback loops and agile methodologies ensure we build what your users actually need, when they need it." },
];

export default function Timeline() {
  return (
    <Section image="/images/services-hex.svg" overlay="medium" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-xl">
          <Eyebrow>Our Approach</Eyebrow>
          <h2 className="mt-5 text-balance font-display text-4xl font-medium leading-tight text-ink-fg sm:text-5xl">
            Built on four fundamental principles.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.08} className="border-t border-line-strong pt-6">
              <span className="font-mono-label text-sm text-wire-cyan">{p.step}</span>
              <h3 className="mt-3 font-display text-lg font-medium text-ink-fg">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {p.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
