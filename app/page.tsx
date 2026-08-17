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

export default function Home() {
  return (
    <main className="bg-ink">
      <Navbar />

      <Hero />

      <Problem />

      <Solutions />

      <UseCases />

      <Process />

      <Differentiators />

      <CTA />

      <ContactSection />

      <Footer />
    </main>
  );
}