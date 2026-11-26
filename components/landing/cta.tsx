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
          <h2 className="mx-auto mt-7 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            {english
              ? "Let’s review how your freight requests are handled"
              : "Revisemos cómo gestionan hoy tus solicitudes de transporte"}
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-muted">
            {english
              ? "Tell us what information arrives, where it comes from, and what your team needs to check. We’ll review the process and get in touch to discuss whether automation may make sense."
              : "Cuéntanos qué información reciben, por dónde llega y qué debe revisar tu equipo. Revisaremos el proceso y nos pondremos en contacto para conversar sobre si tiene sentido automatizar una parte."}
          </p>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-10 flex justify-center">
            <TrackedLink
              href="#contacto"
              ctaName="analizar_operacion"
                location="final_cta"
                className="inline-flex items-center justify-center bg-ink px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              >
                {english ? "Evaluate my process" : "Evaluar mi proceso"}
              </TrackedLink>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <div className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-ink/20 pt-6 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-muted sm:gap-x-8 sm:tracking-[0.22em]">
            <span>{english ? "Current workflow" : "Flujo actual"}</span>
            <span className="hidden h-px w-8 bg-ink/30 sm:block" />
            <span>{english ? "Rules and exceptions" : "Reglas y excepciones"}</span>
            <span className="hidden h-px w-8 bg-ink/30 sm:block" />
            <span>{english ? "Possible next step" : "Siguiente paso posible"}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
