import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";
import Button from "@/components/Button";

const MODELS = [
  {
    title: "Dedicated Team",
    description: "A senior pod embedded in your workflow, scoped to a quarter or longer.",
    best: "Best for ongoing product development",
  },
  {
    title: "Project-Based",
    description: "Fixed scope, fixed timeline, one deliverable — a launch, a migration, a rebuild.",
    best: "Best for a defined outcome",
  },
  {
    title: "Staff Augmentation",
    description: "Individual senior engineers who plug directly into your existing team.",
    best: "Best for filling a specific gap",
  },
];

export default function EngagementModels() {
  return (
    <Section image="/images/hero-network.svg" overlay="heavy" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-xl">
          <Eyebrow tone="amber">Ways to work with us</Eyebrow>
          <h2 className="mt-5 text-balance font-display text-4xl font-medium leading-tight text-ink-fg sm:text-5xl">
            Pick the model that fits how you build.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {MODELS.map((model, i) => (
            <Reveal
              key={model.title}
              delay={i * 0.08}
              className="rounded-2xl border border-line-strong bg-ink/60 p-8 backdrop-blur-sm"
            >
              <h3 className="font-display text-xl font-medium text-ink-fg">{model.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{model.description}</p>
              <p className="mt-5 font-mono-label text-[11px] uppercase text-wire-cyan">
                {model.best}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-14">
          <Button href="/contact" variant="primary">
            Find the right fit
          </Button>
        </Reveal>
      </div>
    </Section>
  );
}
