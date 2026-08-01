import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export default function Button({
  href,
  children,
  variant = "primary",
  icon = true,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: boolean;
  className?: string;
}) {
  const base =
    "group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-all duration-300";
  const styles = {
    primary: "bg-signal-amber text-ink hover:shadow-[0_0_0_1px_rgba(255,180,84,0.3),0_8px_30px_-8px_rgba(255,180,84,0.5)]",
    secondary:
      "border border-line-strong bg-surface text-ink-fg hover:border-wire-cyan/50 hover:bg-surface-2",
    ghost: "text-ink-fg hover:text-wire-cyan",
  };

  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
      {icon && (
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </Link>
  );
}
