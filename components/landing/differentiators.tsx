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
    <section className="relative isolate overflow-hidden bg-ink py-24 text-white sm:py-28 lg:py-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 bottom-0 size-[30rem] rounded-full bg-volt/[0.05] blur-3xl"
      />

      <div className="relative mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-10">
        <div className="lg:col-span-5">
          <Reveal delay={80}>
            <h2 className="text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              {english ? "Automation does not mean" : "Automatizar no significa"}
              <br />
              {english ? "taking people out of the " : "sacar al equipo de la "}
              <span className="text-volt">{english ? "process" : "operación"}</span>
            </h2>
          </Reveal>

        </div>

        <div className="grid gap-3 lg:col-span-7 lg:gap-4">
          {differentiators.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <article className="group grid gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-6 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.05] sm:grid-cols-[2.75rem_1fr] sm:items-start sm:gap-5 sm:p-7">
                <span className="flex size-10 items-center justify-center rounded-full border border-volt/25 bg-volt/[0.06] text-volt transition-colors duration-300 group-hover:bg-volt group-hover:text-ink">
                  <Check size={16} strokeWidth={1.75} aria-hidden="true" />
                </span>

                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.03em] transition-colors duration-300 group-hover:text-volt sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-xl leading-7 text-white/60">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
