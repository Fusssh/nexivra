import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";

export default function CtaBanner() {
  return (
    <Section image="/images/cta-pulse.svg" overlay="heavy" className="py-28 lg:py-36">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <Reveal>
          <h2 className="text-balance font-display text-4xl font-medium leading-tight text-ink-fg sm:text-5xl">
            Have a build in mind? Let&rsquo;s put it on a timeline.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-ink-muted">
            Tell us where the product is today and where it needs to be. We&rsquo;ll
            reply with a straight answer on scope, timeline, and team.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="primary">
              Start a project
            </Button>
            <Button href="/about" variant="secondary" icon={false}>
              Learn about us
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
