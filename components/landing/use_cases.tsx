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
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.48fr)] lg:items-center lg:gap-16">
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
            <p className="max-w-sm border-t border-white/15 pt-6 leading-7 text-white/55 lg:max-w-md lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
              Cada implementación comienza con un proceso concreto y una
              oportunidad de impacto medible.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px border-y border-white/10 bg-white/10 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <Reveal key={useCase.title} delay={index * 60}>
              <article className="group flex min-h-56 flex-col bg-coal p-7 transition-colors duration-300 hover:bg-white/[0.04] lg:p-8">
                <h3 className="mt-auto text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-volt sm:text-[1.75rem]">
                  {useCase.title}
                </h3>

                <p className="mt-3 max-w-lg leading-7 text-white/55">
                  {useCase.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
