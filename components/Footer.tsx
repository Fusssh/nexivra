"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "./Logo";

function IconX(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7l-5.5-6.6L4.5 22H1.4l8.1-9.3L1 2h7.2l5 6.1L18.9 2Zm-1.2 18h1.7L7.4 4H5.6l12.1 16Z" />
    </svg>
  );
}
function IconLinkedIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.7c0-1.36-.02-3.1-1.9-3.1-1.9 0-2.19 1.48-2.19 3v5.8h-4V9Z" />
    </svg>
  );
}
function IconGithub(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.31 6.84 9.66.5.1.68-.22.68-.49v-1.9c-2.78.62-3.37-1.2-3.37-1.2-.46-1.2-1.11-1.52-1.11-1.52-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.9-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.02 1.63 1.02 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.2 10.2 0 0 0 22 12.2C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function IconFacebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03.74-1.5 1.5-1.5H17.5v-3.5c-.32-.05-1.42-.25-2.9-.25-2.9 0-4.6 1.77-4.6 4.86v2.39H7v4h3v10h4v-10z" />
    </svg>
  );
}

function IconInstagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2c2.72 0 3.05.01 4.12.06 1.05.05 1.62.22 2 .37.51.2.88.44 1.27.83.39.39.63.76.83 1.27.15.38.32.95.37 2 .05 1.07.06 1.4.06 4.12s-.01 3.05-.06 4.12c-.05 1.05-.22 1.62-.37 2-.2.51-.44.88-.83 1.27-.39.39-.76.63-1.27.83-.38.15-.95.32-2 .37-1.07.05-1.4.06-4.12.06s-3.05-.01-4.12-.06c-1.05-.05-1.62-.22-2-.37-.51-.2-.88-.44-1.27-.83-.39-.39-.63-.76-.83-1.27-.15-.38-.32-.95-.37-2-.05-1.07-.06-1.4-.06-4.12s.01-3.05.06-4.12c.05-1.05.22-1.62.37-2 .2-.51.44-.88.83-1.27.39-.39.76-.63 1.27-.83.38-.15.95-.32 2-.37C8.95 2.01 9.28 2 12 2zm0 2.16c-2.67 0-3 .01-4.06.06-.97.04-1.5.2-1.85.34-.47.18-.8.4-1.15.75-.35.35-.57.68-.75 1.15-.14.35-.3.88-.34 1.85-.05 1.06-.06 1.39-.06 4.06s.01 3 .06 4.06c.04.97.2 1.5.34 1.85.18.47.4.8.75 1.15.35.35.68.57 1.15.75.35.14.88.3 1.85.34 1.06.05 1.39.06 4.06.06s3-.01 4.06-.06c.97-.04 1.5-.2 1.85-.34.47-.18.8-.4 1.15-.75.35-.35.57-.68.75-1.15.14-.35.3-.88.34-1.85.05-1.06.06-1.39.06-4.06s-.01-3-.06-4.06c-.04-.97-.2-1.5-.34-1.85-.18-.47-.4-.8-.75-1.15-.35-.35-.68-.57-1.15-.75-.35-.14-.88-.3-1.85-.34-1.06-.05-1.39-.06-4.06-.06z" />
      <path d="M12 7.16A4.84 4.84 0 1 0 16.84 12 4.84 4.84 0 0 0 12 7.16zm0 7.84a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
      <circle cx="17.34" cy="6.66" r="1.16" />
    </svg>
  );
}

const COLUMNS = [
  {
    heading: "Sitemap",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/services", label: "Services" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { href: "/services#product-engineering", label: "Product engineering" },
      { href: "/services#cloud-platform", label: "Cloud &amp; platform".replace("&amp;", "&") },
      { href: "/services#data-ai", label: "Data & AI systems" },
      { href: "/services#design", label: "Design systems" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-[#080b12]">
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          y: [0, -20, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -inset-[10%] opacity-70"
        style={{
          backgroundImage: "url('/images/footer-texture.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-muted">
              We design and engineer software for teams building what comes next —
              from first prototype to production infrastructure.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: IconFacebook, href: "https://www.facebook.com/share/1BmwzMByxo/" },
                { Icon: IconInstagram, href: "https://www.instagram.com/nexivratechnology?igsh=MXFwdnVjdGo2aHQ1ZQ==" },
                { Icon: IconLinkedIn, href: "https://www.linkedin.com/company/nexivra-technologies/?utm_source=chatgpt.com" },
                { Icon: IconX, href: "https://x.com/Nexivra" }
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line-strong text-ink-muted transition-colors hover:border-wire-cyan/50 hover:text-wire-cyan"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <p className="font-mono-label text-xs uppercase text-ink-faint">{col.heading}</p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-muted transition-colors hover:text-ink-fg"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="font-mono-label text-xs uppercase text-ink-faint">Get in touch</p>
            <ul className="mt-4 space-y-3 text-sm text-ink-muted">
              <li>
                <a href="mailto:nexivratechnologies@gmail.com" className="hover:text-ink-fg">
                  nexivratechnologies@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+918480200896" className="hover:text-ink-fg">
                  +91 84802 00896
                </a>
              </li>
              <li>
                <a href="tel:+917894491563" className="hover:text-ink-fg">
                  +91 78944 91563
                </a>
              </li>
              <li className="text-ink-faint">Remote-first &middot; Global clients</li>
            </ul>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-1.5 text-sm text-wire-cyan hover:text-ink-fg"
            >
              Start a conversation
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 text-xs text-ink-faint md:flex-row md:items-center">
          <p>&copy; {new Date().getFullYear()} Nexivra Technologies. All rights reserved.</p>
          <p className="font-mono-label uppercase tracking-[0.18em]">
            Building the Next Digital Future
          </p>
        </div>
      </div>
    </footer>
  );
}
