export default function Eyebrow({
  children,
  tone = "cyan",
}: {
  children: React.ReactNode;
  tone?: "cyan" | "amber";
}) {
  const dot = tone === "cyan" ? "bg-wire-cyan" : "bg-signal-amber";
  return (
    <span className="inline-flex items-center gap-2 font-mono-label text-xs uppercase text-ink-muted">
      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
      {children}
    </span>
  );
}
