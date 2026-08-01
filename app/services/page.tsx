import type { Metadata } from "next";
import ServicesHero from "@/components/sections/ServicesHero";
import ServiceDetail from "@/components/sections/ServiceDetail";
import CapabilitiesSpotlight from "@/components/sections/CapabilitiesSpotlight";
import EngagementModels from "@/components/sections/EngagementModels";
import TechMarquee from "@/components/sections/TechMarquee";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Services — Nexivra Technologies",
  description:
    "Product engineering, cloud & platform, data & AI systems, and design services from Nexivra Technologies.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceDetail />
      <CapabilitiesSpotlight />
      <EngagementModels />
      <TechMarquee />
      <CtaBanner />
    </>
  );
}
