import Eyebrow from "./eyebrow";
import Reveal from "./reveal";

const problems = [
  {
    title: "Tareas repetitivas",
    description:
      "Procesos que consumen horas de tu equipo cada semana y requieren poca intervención humana.",
  },
  {
    title: "Alto volumen",
    description:
      "Miles de llamadas, mensajes, correos o solicitudes que necesitan ser atendidos.",
  },
  {
    title: "Procesos manuales",
    description:
      "Información que todavía se copia, revisa y transfiere entre diferentes herramientas.",
  },
  {
    title: "Operaciones fragmentadas",
    description:
      "Equipos trabajando entre WhatsApp, correo, Excel, CRM y múltiples sistemas.",
  },
];

export default function Problem() {
  return (
    <section className="relative overflow-hidden bg-paper py-24 text-ink lg:py-36">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-6 lg:grid-cols-12 lg:gap-10 lg:px-10">
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow index="01" tone="light">
              El problema
            </Eyebrow>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-7 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-[3.4rem] lg:leading-[1.02]">
              Tu equipo no debería dedicar horas a tareas que una IA puede
              ejecutar.
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-md text-lg leading-8 text-ink/60">
              Cuando un proceso depende de copiar información, responder
              solicitudes una por una o revisar datos entre varias herramientas,
              el volumen puede traducirse en más horas, errores y demoras.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex max-w-md items-center gap-4 border border-ink/15 px-5 py-4">
              <span className="h-2 w-2 shrink-0 bg-volt" />
              <p className="font-mono text-[11px] font-medium uppercase leading-5 tracking-[0.14em] text-ink/50">
                Horas de equipo invertidas en trabajo que no crece
              </p>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={120}>
            <div className="border-t border-ink/15">
              {problems.map((problem) => (
                <article
                  key={problem.title}
                  className="group relative grid gap-2 border-b border-ink/15 py-7 pl-6 transition-colors hover:bg-ink/[0.02] md:grid-cols-[230px_1fr] md:items-baseline md:gap-6 md:py-8"
                >
                  <span
                    className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-volt transition-transform duration-300 group-hover:scale-y-100"
                    aria-hidden
                  />

                  <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                    {problem.title}
                  </h3>

                  <p className="leading-7 text-ink/55">{problem.description}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
