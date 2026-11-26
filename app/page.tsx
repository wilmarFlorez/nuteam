import Navbar from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
import Problem from "@/components/landing/problem";
import Solutions from "@/components/landing/solutions";
import FreightPilot from "@/components/landing/freight_pilot";
import UseCases from "@/components/landing/use_cases";
import Process from "@/components/landing/process";
import Differentiators from "@/components/landing/differentiators";
import CTA from "@/components/landing/cta";
import ContactModal from "@/components/landing/contact_modal";
import Footer from "@/components/landing/footer";
import AnalyticsTracker from "@/components/analytics_tracker";
import ChatWidget from "@/components/landing/chat_widget";
import WhatsAppButton from "@/components/landing/whatsapp_button";

export default function Home() {
  return (
    <main className="bg-ink">
      <AnalyticsTracker />
      <ChatWidget />
      <WhatsAppButton locale="es" chatWidgetVisible />
      <Navbar locale="es" />

      <Hero locale="es" />

      <Problem locale="es" />

       <Solutions locale="es" />

      <FreightPilot locale="es" />

      <UseCases locale="es" />

      <Process locale="es" />

      <Differentiators locale="es" />

      <CTA locale="es" />

      <ContactModal locale="es" />

      <Footer locale="es" />
    </main>
  );
}
