import type { Metadata } from "next";
import LanguageSetter from "@/components/language_setter";
import Navbar from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
import Problem from "@/components/landing/problem";
import Solutions from "@/components/landing/solutions";
import UseCases from "@/components/landing/use_cases";
import Process from "@/components/landing/process";
import Differentiators from "@/components/landing/differentiators";
import CTA from "@/components/landing/cta";
import ContactSection from "@/components/landing/contact_section";
import Footer from "@/components/landing/footer";
import AnalyticsTracker from "@/components/analytics_tracker";

export const metadata: Metadata = {
  title: "AI-Powered Operational Process Automation | NuTeam",
  description:
    "NuTeam evaluates repetitive, high-volume operational processes to determine where AI automation may be viable.",
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
      <Navbar locale="en" />
      <Hero locale="en" />
      <Problem locale="en" />
      <Solutions locale="en" />
      <UseCases locale="en" />
      <Process locale="en" />
      <Differentiators locale="en" />
      <CTA locale="en" />
      <ContactSection locale="en" />
      <Footer locale="en" />
    </main>
  );
}
