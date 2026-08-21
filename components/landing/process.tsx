import Eyebrow from "./eyebrow";
import Reveal from "./reveal";

const steps = [
  {
    number: "01",
    tag: "Diagnóstico",
    title: "Analizamos tu operación",
    description:
      "Entendemos cómo funciona actualmente el proceso y dónde se concentra el trabajo manual.",
  },
  {
    number: "02",
    tag: "Análisis",
    title: "Identificamos la oportunidad",
    description:
      "Determinamos qué tareas pueden ser ejecutadas por IA y cuál sería su impacto potencial.",
  },
  {
    number: "03",
    tag: "Implementación",
    title: "Diseñamos e integramos",
    description:
      "Construimos la solución alrededor de tus procesos y la conectamos con tus sistemas.",
  },
  {
    number: "04",
    tag: "Medición",
    title: "Medimos el impacto",
    description:
      "Evaluamos resultados mediante métricas operativas y económicas concretas.",
  },
];

export default function Process() {
  return (
    <section id="como-funciona" className="bg-paper py-24 text-ink lg:py-36">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.48fr)] lg:items-center lg:gap-16">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow index="04" tone="light">
                Cómo funciona
              </Eyebrow>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mt-7 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                No empezamos por la tecnología. Empezamos por el problema.
              </h2>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <p className="max-w-sm border-t border-ink/20 pt-6 leading-7 text-ink/60 lg:max-w-md lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
              Evaluamos si una automatización es viable, qué parte del proceso
              conviene intervenir y cómo medir su resultado.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 90}>
              <article className="group h-full">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center border border-ink/25 font-mono text-sm text-ink/60 transition-colors duration-300 group-hover:border-volt group-hover:bg-volt group-hover:text-ink">
                    {step.number}
                  </div>

                  <span className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-ink/40">
                    {step.tag}
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-semibold tracking-tight lg:mt-10">
                  {step.title}
                </h3>

                <p className="mt-4 max-w-xs leading-7 text-ink/55">
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
