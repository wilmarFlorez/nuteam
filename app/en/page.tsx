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
import {
  createSiteMetadata,
  HOME_LANGUAGE_ALTERNATES,
} from "@/lib/seo_metadata";

export const metadata = createSiteMetadata({
  title: "AI Agents for Freight Request Automation | NuTeam",
  description:
    "NuTeam assesses workflows for freight requests in Colombia and designs AI agents to structure details, flag gaps and keep exceptions under human review.",
  canonical: "/en",
  locale: "en",
  languageAlternates: HOME_LANGUAGE_ALTERNATES,
  socialImageAlt:
    "Freight trucks and an operations worker at a logistics terminal at dusk.",
});

export default function EnglishHome() {
  return (
    <main lang="en" className="bg-ink">
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
