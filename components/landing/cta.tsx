import Reveal from "./reveal";
import TrackedLink from "./tracked_link";
import { isEnglish, type Locale } from "@/lib/locale";

export default function CTA({ locale }: { locale: Locale }) {
  const english = isEnglish(locale);
  return (
    <section className="relative overflow-hidden border-t-4 border-volt bg-paper py-24 text-ink lg:py-40">
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
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.26em] text-muted">
            {english ? "Start with your operation" : "Empieza por tu operación"}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mx-auto mt-7 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            {english ? "Assess an operational process." : "Evalúa un proceso operativo."}
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-muted">
            {english
              ? "Tell us how a process in your company works today and we will assess whether there is a reasonable automation opportunity."
              : "Cuéntanos cómo funciona actualmente un proceso de tu empresa y revisaremos si existe una oportunidad razonable de automatización."}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex justify-center">
            <TrackedLink
              href="#contacto"
              ctaName="analizar_operacion"
              location="final_cta"
              className="group inline-flex items-center justify-center gap-2 bg-ink px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              {english ? "Evaluate a process" : "Evaluar un proceso"}
              <span className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </TrackedLink>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <div className="mx-auto mt-14 flex max-w-3xl items-center justify-center gap-x-8 gap-y-2 border-t border-ink/20 pt-6 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-muted">
            <span>{english ? "Initial assessment" : "Análisis inicial"}</span>
            <span className="hidden h-px w-8 bg-ink/30 sm:block" />
            <span>{english ? "Viability assessment" : "Evaluación de viabilidad"}</span>
            <span className="hidden h-px w-8 bg-ink/30 sm:block" />
            <span>{english ? "Impact metrics" : "Métricas de impacto"}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
