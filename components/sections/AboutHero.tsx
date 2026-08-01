import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";

export default function AboutHero() {
  return (
    <Section image="/images/about-blueprint.svg" overlay="light" className="pt-32">
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-32">
        <Reveal className="max-w-3xl">
          <Eyebrow>About Nexivra</Eyebrow>
          <h1 className="mt-6 text-balance font-display text-5xl font-medium leading-[1.08] text-ink-fg sm:text-6xl">
            A studio built by engineers who kept getting hired to fix launches.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-muted">
            Nexivra Technologies started in 2026 when three engineers, tired of
            watching good products fail on bad infrastructure, decided to build
            things properly from day one.
          </p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
            Today, we operate as a hybrid and fully distributed team. Being remote by design allows us to focus entirely on engineering excellence and talent, ensuring that our standard of quality remains absolutely uncompromised.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
