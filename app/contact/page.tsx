import type { Metadata } from "next";
import ContactHero from "@/components/sections/ContactHero";
import ContactForm from "@/components/sections/ContactForm";
import FAQ from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "Contact — Nexivra Technologies",
  description:
    "Get in touch with Nexivra Technologies to scope your next software project.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <FAQ />
    </>
  );
}
