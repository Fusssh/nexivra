import Section from "@/components/Section";

const STACK = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Go",
  "PostgreSQL",
  "Kubernetes",
  "AWS",
  "Terraform",
];

export default function TechMarquee() {
  const loop = [...STACK, ...STACK];
  return (
    <Section tone="surface" className="border-y border-line py-8">
      <div className="flex items-center gap-10 overflow-hidden">
        <span className="font-mono-label shrink-0 pl-6 text-xs uppercase text-ink-faint lg:pl-8">
          Our stack
        </span>
        <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
            {loop.map((name, i) => (
              <span key={i} className="font-mono-label text-sm text-ink-faint">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
