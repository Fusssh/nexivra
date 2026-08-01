import Link from "next/link";
import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="Nexivra Technologies — home"
    >
      <Image
        src="/nexivra_technologies_horizontal_dark.png"
        alt="Nexivra Technologies Logo"
        width={180}
        height={40}
        className="object-contain h-8 w-auto"
        priority
      />
    </Link>
  );
}
