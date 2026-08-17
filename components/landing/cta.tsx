import Reveal from "./reveal";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-volt py-24 text-ink lg:py-40">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgb(10 10 11 / 0.08) 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1440px] px-6 text-center lg:px-10">
        <Reveal>
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.26em] text-ink/50">
            Empieza por tu operación
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mx-auto mt-7 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Descubre qué procesos puedes automatizar.
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-ink/60">
            Cuéntanos cómo funciona actualmente una operación de tu empresa y
            evaluaremos si existe una oportunidad real de automatización.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex justify-center">
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-2 bg-ink px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              Analizar mi operación
              <span className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <div className="mx-auto mt-14 flex max-w-3xl items-center justify-center gap-x-8 gap-y-2 border-t border-ink/20 pt-6 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-ink/45">
            <span>Análisis inicial</span>
            <span className="hidden h-px w-8 bg-ink/30 sm:block" />
            <span>Evaluación de viabilidad</span>
            <span className="hidden h-px w-8 bg-ink/30 sm:block" />
            <span>Métricas de impacto</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}