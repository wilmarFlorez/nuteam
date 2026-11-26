import ContactForm from "./contact_form";
import Reveal from "./reveal";
import { isEnglish, type Locale } from "@/lib/locale";
import { Check } from "lucide-react";

const spanishOutcomes = [
  "Revisaremos cómo llegan y se preparan las solicitudes",
  "Tendremos en cuenta los datos, reglas y excepciones que describas",
  "Conversaremos sobre un posible siguiente paso, sin compromiso",
];

export default function ContactSection({ locale }: { locale: Locale }) {
  const english = isEnglish(locale);
  const outcomes = english
      ? [
        "We’ll review how requests arrive and are prepared",
        "We’ll consider the details, rules, and exceptions you describe",
        "We’ll discuss a possible next step, with no commitment",
      ]
    : spanishOutcomes;
  return (
    <section id="contacto" className="bg-ink py-24 text-white lg:py-36">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-10">
        <div>
          <Reveal delay={80}>
            <h2 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              {english
                ? "Tell us how your team handles freight requests"
                : "Cuéntanos cómo gestiona tu equipo las solicitudes de transporte"}
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-md leading-7 text-white/60">
              {english
                ? "Describe how the request arrives, what information your team checks, and what happens when something is missing. We’ll review what you share and get in touch."
                : "Describe por dónde llega la solicitud, qué información revisa tu equipo y qué ocurre cuando falta algo. Revisaremos lo que compartas y nos pondremos en contacto."}
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
              {english ? "Tell us about the workflow" : "Cuéntanos sobre el flujo"}
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
