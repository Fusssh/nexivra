import type { Metadata } from "next";
import AboutHero from "@/components/sections/AboutHero";
import Values from "@/components/sections/Values";
import Timeline from "@/components/sections/Timeline";
import TeamEthos from "@/components/sections/TeamEthos";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "About — Nexivra Technologies",
  description:
    "Meet Nexivra Technologies: a senior-led software engineering studio building products, platforms, and infrastructure since 2019.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Values />
      <Timeline />
      <TeamEthos />
      <CtaBanner />
    </>
  );
}
