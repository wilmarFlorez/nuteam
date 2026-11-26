import Reveal from "./reveal";
import TrackedLink from "./tracked_link";
import { isEnglish, type Locale } from "@/lib/locale";

export default function CTA({ locale }: { locale: Locale }) {
  const english = isEnglish(locale);
  return (
    <section className="relative overflow-hidden bg-paper py-28 text-ink sm:py-32 lg:py-44">
      <div className="relative mx-auto max-w-[1440px] px-5 text-center sm:px-6 lg:px-10">
        <Reveal>
          <h2 className="mx-auto max-w-5xl text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            {english
              ? "Let’s review how your freight requests are handled"
              : "Revisemos cómo gestionan hoy tus solicitudes de transporte"}
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-muted sm:mt-8 sm:text-lg sm:leading-8">
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
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-8 py-3.5 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.03] hover:bg-coal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
              >
                {english ? "Evaluate my process" : "Evaluar mi proceso"}
              </TrackedLink>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <div className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-x-5 gap-y-3 border-t border-ink/15 pt-6 font-mono text-[9px] font-medium uppercase tracking-[0.12em] text-muted sm:gap-x-8 sm:tracking-[0.18em]">
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
