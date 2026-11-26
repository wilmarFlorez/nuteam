import Reveal from "./reveal";
import WorkflowSequence from "./workflow_sequence";
import { isEnglish, type Locale } from "@/lib/locale";

const spanishSteps = [
  {
    title: "Recibir",
    description: "Una solicitud llega por los canales que la operación ya utiliza.",
  },
  {
    title: "Ordenar",
    description: "La información relevante se organiza en un formato común.",
  },
  {
    title: "Validar",
    description: "Se aplican los campos y reglas que defina el equipo.",
  },
  {
    title: "Revisar",
    description: "Lo incompleto o ambiguo queda para revisión de una persona.",
  },
];

const englishSteps = [
  {
    title: "Receive",
    description: "A request arrives through the channels the operation already uses.",
  },
  {
    title: "Structure",
    description: "Relevant information is organized in a consistent format.",
  },
  {
    title: "Validate",
    description: "The team’s fields and rules are applied.",
  },
  {
    title: "Review",
    description: "Incomplete or ambiguous details go to a person for review.",
  },
];

export default function Solutions({ locale }: { locale: Locale }) {
  const english = isEnglish(locale);
  const steps = english ? englishSteps : spanishSteps;

  return (
    <section id="soluciones" className="bg-ink py-24 text-white sm:py-28 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.48fr)] lg:items-end lg:gap-16">
          <div className="max-w-3xl">
            <Reveal delay={80}>
              <h2 className="text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                {english
                  ? "From an incoming request to a clear next step"
                  : "De una solicitud recibida a un siguiente paso claro"}
              </h2>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <p className="max-w-md border-t border-white/15 pt-5 leading-7 text-white/60 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
              {english
                ? "A possible flow—not a ready-made product. The channels, data, rules, and handoffs depend on how your operation works."
                : "Un flujo posible, no un producto prediseñado. Los canales, datos, reglas y traspasos dependen de cómo funciona tu operación."}
            </p>
          </Reveal>
        </div>

        <WorkflowSequence className="mt-12 grid gap-3 sm:mt-16 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} data-flow-step="">
              <article className="group relative h-full rounded-[1.5rem] border border-white/10 bg-coal/70 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-volt/35 hover:bg-coal lg:min-h-64 lg:rounded-[1.75rem] lg:p-7">
                <div className="flex items-center gap-3 border-b border-white/10 pb-5">
                  <span
                    aria-hidden="true"
                    data-flow-marker=""
                    className="size-1.5 rounded-full bg-volt/80"
                  />
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">
                    {english ? `Step ${index + 1}` : `Paso ${index + 1}`}
                  </span>
                </div>
                <h3 className="mt-7 text-2xl font-semibold tracking-[-0.035em] transition-colors group-hover:text-volt">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xs leading-7 text-white/60">
                  {step.description}
                </p>
              </article>
            </li>
          ))}
        </WorkflowSequence>
      </div>
    </section>
  );
}
