import Eyebrow from "./eyebrow";
import Reveal from "./reveal";

const differentiators = [
  {
    title: "Diseñado para tu operación",
    description:
      "La solución se adapta a tus procesos, reglas y necesidades específicas.",
  },
  {
    title: "Integrado con tus sistemas",
    description:
      "La IA trabaja con las herramientas que tu equipo ya utiliza.",
  },
  {
    title: "Impacto medible",
    description:
      "Cada implementación debe tener una métrica operativa o económica que permita evaluar el resultado.",
  },
];

export default function Differentiators() {
  return (
    <section className="relative overflow-hidden bg-ink pb-28 pt-24 text-white lg:pb-40 lg:pt-36">
      <div className="absolute inset-0 bg-dots" />
      <div className="absolute -left-48 bottom-0 h-[460px] w-[460px] rounded-full bg-volt/[0.04] blur-3xl" />

      <div className="relative mx-auto grid max-w-[1440px] gap-14 px-6 lg:grid-cols-12 lg:gap-10 lg:px-10">
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow index="05">Por qué Nu Team</Eyebrow>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-7 text-4xl font-semibold leading-[1.02] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              No vendemos IA.
              <br />
              Automatizamos <span className="text-volt">operaciones.</span>
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-10 flex items-center gap-3 font-mono text-[10px] font-medium uppercase tracking-[0.26em] text-white/65">
              <span className="h-2 w-2 bg-volt" aria-hidden />
              Enfoque en impacto operativo
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={120}>
            <div className="border-t border-white/10">
              {differentiators.map((item) => (
                <article
                  key={item.title}
                  className="group relative grid gap-4 border-b border-white/10 py-8 pl-4 transition-colors duration-300 hover:bg-white/[0.03] md:grid-cols-[40px_1fr] md:gap-6 md:py-10"
                >
                  <div>
                    <span className="flex h-8 w-8 items-center justify-center border border-white/20 bg-white/[0.02] font-mono text-sm text-volt transition-colors duration-300 group-hover:border-volt/60 group-hover:bg-volt/[0.06]" aria-hidden>
                      ✓
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-volt sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-xl leading-7 text-white/60">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
