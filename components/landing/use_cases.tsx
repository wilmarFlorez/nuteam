const useCases = [
    {
      title: "Atención al cliente",
      description:
        "Automatiza conversaciones, solicitudes y tareas de soporte.",
    },
    {
      title: "Ventas",
      description:
        "Califica leads, responde preguntas y ejecuta seguimientos.",
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
      <section id="casos-de-uso" className="bg-neutral-950 py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/40">
                Casos de uso
              </p>
  
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
                Automatización donde el trabajo manual cuesta dinero.
              </h2>
            </div>
  
            <p className="max-w-md leading-7 text-white/45">
              Cada implementación comienza con un proceso concreto y una
              oportunidad de impacto medible.
            </p>
          </div>
  
          <div className="mt-16 divide-y divide-white/10 border-y border-white/10">
            {useCases.map((useCase, index) => (
              <article
                key={useCase.title}
                className="grid gap-4 py-8 md:grid-cols-[100px_1fr_1fr] md:items-center"
              >
                <span className="text-sm text-white/25">
                  0{index + 1}
                </span>
  
                <h3 className="text-2xl font-medium">{useCase.title}</h3>
  
                <p className="leading-7 text-white/45">
                  {useCase.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }