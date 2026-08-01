import Hero from "@/components/sections/Hero";
import IndustryMarquee from "@/components/sections/IndustryMarquee";
import ServicesPreview from "@/components/sections/ServicesPreview";
import Process from "@/components/sections/Process";
import CaseHighlight from "@/components/sections/CaseHighlight";
import CtaBanner from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <IndustryMarquee />
      <ServicesPreview />
      <Process />
      <CaseHighlight />
      <CtaBanner />
    </>
  );
}
