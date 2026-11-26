import type { Metadata } from "next";
import LanguageSetter from "@/components/language_setter";
import Navbar from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
import Problem from "@/components/landing/problem";
import FreightPilot from "@/components/landing/freight_pilot";
import Process from "@/components/landing/process";
import ContactModal from "@/components/landing/contact_modal";
import Footer from "@/components/landing/footer";
import AnalyticsTracker from "@/components/analytics_tracker";
import WhatsAppButton from "@/components/landing/whatsapp_button";

export const metadata: Metadata = {
  title: "Freight Request Process Automation | NuTeam",
  description:
    "NuTeam assesses how freight requests are prepared and which parts of the process may be automated with clear rules and team review.",
  alternates: {
    canonical: "/en",
    languages: { es: "/", en: "/en" },
  },
};

export default function EnglishHome() {
  return (
    <main className="bg-ink">
      <LanguageSetter />
      <AnalyticsTracker />
      <WhatsAppButton locale="en" />
      <Navbar locale="en" />
      <Hero locale="en" />
      <Problem locale="en" />
      <FreightPilot locale="en" />
      <Process locale="en" />
      <ContactModal locale="en" />
      <Footer locale="en" />
    </main>
  );
}
