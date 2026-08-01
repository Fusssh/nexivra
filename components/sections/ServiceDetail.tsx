import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { Boxes, Cloud, LineChart, Palette } from "lucide-react";

const SERVICES = [
  {
    id: "product-engineering",
    icon: Boxes,
    title: "Product Engineering",
    description:
      "Web and mobile applications built on a foundation that survives contact with real users.",
    items: ["Web & mobile apps", "APIs & backend services", "Legacy system modernization", "Technical due diligence"],
  },
  {
    id: "cloud-platform",
    icon: Cloud,
    title: "Cloud & Platform",
    description:
      "Infrastructure that scales predictably and fails gracefully, on AWS, GCP, or Azure.",
    items: ["Cloud architecture & migration", "CI/CD pipelines", "Observability & incident response", "Cost optimization"],
  },
  {
    id: "data-ai",
    icon: LineChart,
    title: "Data & AI Systems",
    description:
      "Data pipelines and applied machine learning that inform decisions instead of dashboards nobody opens.",
    items: ["Data pipelines & warehousing", "Applied ML & LLM integration", "Analytics & reporting", "MLOps"],
  },
  {
    id: "design",
    icon: Palette,
    title: "Design Systems",
    description:
      "Interfaces and component libraries built to stay consistent as the product — and the team — grow.",
    items: ["Product & UX design", "Design systems & component libraries", "Accessibility audits", "User research"],
  },
];

export default function ServiceDetail() {
  return (
    <Section tone="ink" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.id}
              delay={i * 0.06}
              id={service.id}
              className="scroll-mt-28 rounded-2xl border border-line bg-surface p-9"
            >
              <service.icon className="h-7 w-7 text-wire-cyan" strokeWidth={1.5} />
              <h2 className="mt-5 font-display text-2xl font-medium text-ink-fg">
                {service.title}
              </h2>
              <p className="mt-3 text-ink-muted">{service.description}</p>
              <ul className="mt-6 grid grid-cols-1 gap-2.5 border-t border-line pt-6 sm:grid-cols-2">
                {service.items.map((it) => (
                  <li key={it} className="flex items-center gap-2.5 text-sm text-ink-muted">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-signal-amber" />
                    {it}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
