import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SignalRail from "@/components/SignalRail";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const spaceGrotesk = localFont({
  src: "../public/fonts/SpaceGrotesk.ttf",
  variable: "--font-display",
  display: "swap",
});

const inter = localFont({
  src: "../public/fonts/Inter.ttf",
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: "../public/fonts/JetBrainsMono.ttf",
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexivra Technologies — Building the Next Digital Future",
  description:
    "Nexivra Technologies designs and engineers software products, platforms, and digital infrastructure for companies building what's next.",
  keywords: [
    "Nexivra Technologies",
    "software solutions",
    "software development company",
    "digital transformation",
    "product engineering",
  ],
  icons: {
    icon: "/nexivra_logo_dark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-ink text-ink-fg antialiased selection:bg-signal-amber/30 selection:text-white">
        <SignalRail />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
