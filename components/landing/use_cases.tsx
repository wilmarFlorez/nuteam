import Eyebrow from "./eyebrow";
import Reveal from "./reveal";

const useCases = [
  {
    title: "Atención al cliente",
    description:
      "Automatiza conversaciones, solicitudes y tareas de soporte.",
  },
  {
    title: "Ventas",
    description: "Califica leads, responde preguntas y ejecuta seguimientos.",
  },
  {
    title: "Cobranza",
    description:
      "Automatiza contacto, recordatorios y seguimiento de pagos.",
  },
  {
    title: "Operaciones",
    description:
      "Ejecuta tareas repetitivas entre diferentes sistemas.",
  },
  {
    title: "Backoffice",
    description:
      "Procesa información, documentos y solicitudes automáticamente.",
  },
];

export default function UseCases() {
  return (
    <section id="casos-de-uso" className="border-t border-white/10 bg-coal py-24 text-white lg:py-36">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow index="03">Casos de uso</Eyebrow>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mt-7 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
                Automatización donde el trabajo manual cuesta dinero.
              </h2>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <p className="max-w-sm leading-7 text-white/45">
              Cada implementación comienza con un proceso concreto y una
              oportunidad de impacto medible.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 border-t border-white/10">
          {useCases.map((useCase, index) => (
            <Reveal key={useCase.title} delay={index * 60}>
              <article className="group grid gap-3 border-b border-white/10 py-7 transition-colors hover:bg-white/[0.02] md:grid-cols-[72px_1fr_auto] md:items-baseline md:gap-8 md:py-9">
                <span className="font-mono text-sm text-white/25 transition-colors group-hover:text-volt">
                  0{index + 1}
                </span>

                <div>
                  <h3 className="text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-2 sm:text-[1.75rem]">
                    {useCase.title}
                  </h3>

                  <p className="mt-2 max-w-lg leading-7 text-white/45">
                    {useCase.description}
                  </p>
                </div>

                <span
                  className="hidden font-mono text-lg text-white/20 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-volt md:block"
                  aria-hidden
                >
                  →
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}