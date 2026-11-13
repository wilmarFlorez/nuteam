import ContactForm from "./contact_form";
import Reveal from "./reveal";
import { isEnglish, type Locale } from "@/lib/locale";
import { Check } from "lucide-react";

const spanishOutcomes = [
  "Evaluación de viabilidad sobre tu proceso real",
  "Evaluación preliminar del proceso",
  "Un siguiente paso claro, sin compromisos",
];

export default function ContactSection({ locale }: { locale: Locale }) {
  const english = isEnglish(locale);
  const outcomes = english
    ? [
        "A viability assessment based on your actual process",
        "A preliminary process assessment",
        "A clear next step, with no commitment",
      ]
    : spanishOutcomes;
  return (
    <section id="contacto" className="bg-ink py-24 text-white lg:py-36">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-10">
        <div>
          <Reveal delay={80}>
            <h2 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              {english ? "Tell us which process creates the most manual work or delays" : "Cuéntanos qué proceso genera más trabajo manual o demoras"}
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-md leading-7 text-white/60">
              {english
                ? "We will assess the process, its volume, and its impact to determine whether a real automation opportunity exists."
                : "Analizaremos el proceso, su volumen y su impacto para determinar si existe una oportunidad real de automatización."}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <ul className="mt-10 border-t border-white/10">
              {outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="flex items-center gap-4 border-b border-white/10 py-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/20 bg-white/[0.02] text-volt">
                    <Check size={16} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span className="text-sm leading-6 text-white/60">
                    {outcome}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="relative border border-white/10 bg-coal p-6 sm:p-10">
            <span className="absolute -left-px -top-px h-3 w-3 border-l border-t border-volt" />
            <span className="absolute -right-px -bottom-px h-3 w-3 border-b border-r border-volt" />

            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.26em] text-white/85">
              {english ? "Viability assessment" : "Análisis de viabilidad"}
            </p>

            <div className="mt-8">
              <ContactForm locale={locale} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
