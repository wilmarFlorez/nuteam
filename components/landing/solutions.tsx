import Eyebrow from "./eyebrow";
import Reveal from "./reveal";

const solutions = [
  {
    title: "Voz",
    description:
      "Agentes capaces de realizar y recibir llamadas para ejecutar procesos y atender solicitudes.",
  },
  {
    title: "WhatsApp",
    description:
      "Automatiza conversaciones y procesos operativos directamente desde el canal que tus clientes ya utilizan.",
  },
  {
    title: "Email",
    description:
      "Procesa mensajes, clasifica solicitudes y ejecuta acciones sin intervención manual en cada paso.",
  },
  {
    title: "Workflows",
    description:
      "Conecta agentes de IA con las herramientas y sistemas que ya utiliza tu empresa.",
  },
];

export default function Solutions() {
  return (
    <section id="soluciones" className="bg-ink py-24 text-white lg:py-36">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow index="02">Soluciones</Eyebrow>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mt-7 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                Agentes de IA para ejecutar trabajo real.
              </h2>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <p className="max-w-sm leading-7 text-white/45">
              Diseñamos soluciones alrededor de procesos concretos, no alrededor
              de una tecnología genérica.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
          {solutions.map((solution, index) => (
            <Reveal
              key={solution.title}
              delay={index * 90}
              className="group relative bg-ink p-8 transition-colors hover:bg-coal lg:p-10"
            >
              <h3 className="mt-6 text-2xl font-semibold tracking-tight lg:text-[1.75rem]">
                {solution.title}
              </h3>

              <p className="mt-4 max-w-md leading-7 text-white/50">
                {solution.description}
              </p>

              <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">
                  Canal de ejecución
                </span>

                <span
                  className="h-1.5 w-1.5 bg-volt opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
