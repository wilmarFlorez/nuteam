import Reveal from "./reveal";
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
    <section id="soluciones" className="bg-ink py-24 text-white lg:py-36">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.48fr)] lg:items-end lg:gap-16">
          <div className="max-w-3xl">
            <Reveal delay={80}>
              <h2 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                {english
                  ? "From an incoming request to a clear next step"
                  : "De una solicitud recibida a un siguiente paso claro"}
              </h2>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <p className="max-w-md border-t border-white/15 pt-6 leading-7 text-white/60 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
              {english
                ? "A possible flow—not a ready-made product. The channels, data, rules, and handoffs depend on how your operation works."
                : "Un flujo posible, no un producto prediseñado. Los canales, datos, reglas y traspasos dependen de cómo funciona tu operación."}
            </p>
          </Reveal>
        </div>

        <ol className="mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title}>
              <Reveal className="h-full" delay={index * 60}>
                <article className="group relative h-full border border-white/10 bg-coal p-6 transition-colors duration-300 hover:border-volt/40 hover:bg-white/[0.04] lg:min-h-64 lg:p-7">
                  <div className="flex items-center justify-between border-b border-white/10 pb-5">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
                      {english ? `Step ${index + 1}` : `Paso ${index + 1}`}
                    </span>
                  </div>
                  <h3 className="mt-7 text-2xl font-semibold tracking-tight transition-colors group-hover:text-volt">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-xs leading-7 text-white/55">
                    {step.description}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
