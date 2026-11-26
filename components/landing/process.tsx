import Reveal from "./reveal";
import { isEnglish, type Locale } from "@/lib/locale";

const spanishSteps = [
  {
    number: "1",
    tag: "Flujo actual",
    title: "Mapeamos el recorrido",
    description:
      "Qué información llega, por qué canal y quién participa antes de atender la solicitud.",
  },
  {
    number: "2",
    tag: "Reglas",
    title: "Aclaramos qué debe revisarse",
    description:
      "Qué datos son obligatorios, cómo se validan y qué situaciones requieren confirmación.",
  },
  {
    number: "3",
    tag: "Viabilidad",
    title: "Separamos tareas y excepciones",
    description:
      "Revisamos qué partes podrían automatizarse y cuáles necesitan criterio humano.",
  },
  {
    number: "4",
    tag: "Siguiente paso",
    title: "Definimos si tiene sentido avanzar",
    description:
      "Si hay encaje, conversamos sobre alcance, sistemas involucrados y cómo evaluar el resultado.",
  },
];

export default function Process({ locale }: { locale: Locale }) {
  const english = isEnglish(locale);
  const steps = english
      ? [
        { number: "1", tag: "Current workflow", title: "Map the process", description: "What information arrives, through which channel, and who is involved before the request is handled." },
        { number: "2", tag: "Rules", title: "Clarify what needs checking", description: "Required details, how they are validated, and which situations need confirmation." },
        { number: "3", tag: "Feasibility", title: "Separate tasks from exceptions", description: "Review which parts could be automated and which need human judgment." },
        { number: "4", tag: "Next step", title: "Decide whether to move forward", description: "If there is a fit, discuss scope, systems involved, and how to assess the result." },
      ]
      : spanishSteps;
  return (
    <section id="como-funciona" className="bg-paper py-24 text-ink lg:py-36">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.48fr)] lg:items-center lg:gap-16">
          <div className="max-w-3xl">
            <Reveal delay={80}>
              <p className="mb-5 font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-muted">
                {english ? "How the conversation works" : "Cómo es la conversación"}
              </p>
              <h2 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                {english
                  ? "First, understand how the request moves through your operation"
                  : "Primero entendemos cómo avanza una solicitud en tu operación"}
              </h2>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <p className="max-w-sm border-t border-ink/20 pt-6 leading-7 text-muted lg:max-w-md lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
              {english
                ? "The first step is understanding your actual inputs, rules, handoffs, and exceptions."
                : "El primer paso es entender las entradas, reglas, traspasos y excepciones reales."}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 90}>
              <article className="group h-full">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center border border-ink/25 font-mono text-sm text-muted transition-colors duration-300 group-hover:border-volt group-hover:bg-volt group-hover:text-ink">
                    {step.number}
                  </div>

                  <span className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-muted">
                    {step.tag}
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-semibold tracking-tight lg:mt-10">
                  {step.title}
                </h3>

                <p className="mt-4 max-w-xs leading-7 text-muted">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
