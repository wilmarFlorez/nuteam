import Navbar from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
import Problem from "@/components/landing/problem";
import FreightPilot from "@/components/landing/freight_pilot";
import Process from "@/components/landing/process";
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

      <FreightPilot locale="es" />

      <Process locale="es" />

      <ContactModal locale="es" />

      <Footer locale="es" />
    </main>
  );
}
