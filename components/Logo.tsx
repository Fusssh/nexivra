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
        src="/logo.png"
        alt="Nexivra Technologies Logo"
        width={240}
        height={60}
        className="object-contain h-14 md:h-16 w-auto"
        priority
      />
    </Link>
  );
}
