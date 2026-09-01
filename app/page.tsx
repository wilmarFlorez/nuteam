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

export default function Home() {
  return (
    <main className="bg-ink">
      <AnalyticsTracker />
      <Navbar locale="es" />

      <Hero locale="es" />

      <Problem locale="es" />

      <Solutions locale="es" />

      <UseCases locale="es" />

      <Process locale="es" />

      <Differentiators locale="es" />

      <CTA locale="es" />

      <ContactSection locale="es" />

      <Footer locale="es" />
    </main>
  );
}
