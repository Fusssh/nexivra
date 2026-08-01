import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";

export default function ContactHero() {
  return (
    <Section image="/images/contact-beacon.svg" overlay="light" className="pt-32">
      <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8 lg:pb-28">
        <Reveal className="max-w-3xl">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-6 text-balance font-display text-5xl font-medium leading-[1.08] text-ink-fg sm:text-6xl">
            Tell us what you&rsquo;re building.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-muted">
            We reply to every inquiry within one business day, from someone
            who could actually work on your project — not a sales queue.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
