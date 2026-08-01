import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";

const ROLES = [
  { title: "Product Engineers", count: "24", detail: "Full-stack, senior-weighted, embedded directly in your team." },
  { title: "Platform & DevOps", count: "9", detail: "Infrastructure, reliability, and security across every build." },
  { title: "Product Designers", count: "7", detail: "Research through to production-ready interface systems." },
];

export default function TeamEthos() {
  return (
    <Section tone="surface" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <Eyebrow tone="amber">The team</Eyebrow>
            <h2 className="mt-5 text-balance font-display text-4xl font-medium leading-tight text-ink-fg sm:text-5xl">
              No account managers between you and the people building your product.
            </h2>
            <p className="mt-5 max-w-lg text-ink-muted">
              Every engagement is staffed by senior engineers and a lead who
              stays with the project end to end. You always know who is
              writing the code and why.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="grid gap-6">
            {ROLES.map((role) => (
              <div
                key={role.title}
                className="flex items-center justify-between gap-6 rounded-2xl border border-line bg-ink p-6"
              >
                <div>
                  <h3 className="font-display text-lg font-medium text-ink-fg">{role.title}</h3>
                  <p className="mt-1 text-sm text-ink-muted">{role.detail}</p>
                </div>
                <span className="font-display text-3xl font-medium text-wire-cyan">
                  {role.count}
                </span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
