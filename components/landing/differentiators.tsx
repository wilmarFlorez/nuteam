import Reveal from "./reveal";
import { isEnglish, type Locale } from "@/lib/locale";
import { Check } from "lucide-react";

const spanishDifferentiators = [
  {
    title: "Reglas definidas con tu equipo",
    description:
      "Los campos y validaciones dependen de cómo tu operación determina que una solicitud está completa.",
  },
  {
    title: "Revisión cuando hace falta",
    description:
      "Los datos ambiguos o incompletos pueden quedar en manos de una persona antes de avanzar.",
  },
  {
    title: "IA cuando aporta",
    description:
      "La automatización se evalúa según el proceso; no todo paso necesita un agente de IA.",
  },
];

export default function Differentiators({ locale }: { locale: Locale }) {
  const english = isEnglish(locale);
  const differentiators = english
    ? [
        { title: "Rules defined with your team", description: "Fields and validations depend on how your operation determines that a request is complete." },
        { title: "Human review when needed", description: "Ambiguous or incomplete details can be handed to a person before moving forward." },
        { title: "AI where it helps", description: "Automation is assessed against the process; not every step needs an AI agent." },
      ]
    : spanishDifferentiators;
  return (
    <section className="relative overflow-hidden bg-ink pb-28 pt-24 text-white lg:pb-40 lg:pt-36">
      <div className="absolute inset-0 bg-dots" />
      <div className="absolute -left-48 bottom-0 h-[460px] w-[460px] rounded-full bg-volt/[0.04] blur-3xl" />

      <div className="relative mx-auto grid max-w-[1440px] gap-14 px-6 lg:grid-cols-12 lg:gap-10 lg:px-10">
        <div className="lg:col-span-5">
          <Reveal delay={80}>
            <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              {english ? "Automation does not mean" : "Automatizar no significa"}
              <br />
              {english ? "taking people out of the " : "sacar al equipo de la "}
              <span className="text-volt">{english ? "process" : "operación"}</span>
            </h2>
          </Reveal>

        </div>

        <div className="lg:col-span-7">
          <Reveal delay={120}>
            <div className="border-t border-white/10">
              {differentiators.map((item) => (
                <article
                  key={item.title}
                  className="group relative grid gap-4 border-b border-white/10 py-8 pl-4 transition-colors duration-300 hover:bg-white/[0.03] md:grid-cols-[40px_1fr] md:gap-6 md:py-10"
                >
                  <div>
                    <span className="flex h-8 w-8 items-center justify-center border border-white/20 bg-white/[0.02] text-volt transition-colors duration-300 group-hover:border-volt/60 group-hover:bg-volt/[0.06]">
                      <Check size={16} strokeWidth={1.75} aria-hidden="true" />
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-volt sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-xl leading-7 text-white/60">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
