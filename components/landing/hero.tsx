import Reveal from "./reveal";
import TrackedLink from "./tracked_link";
import { isEnglish, type Locale } from "@/lib/locale";

export default function Hero({ locale }: { locale: Locale }) {
  const english = isEnglish(locale);
  return (
    <section className="relative isolate overflow-hidden bg-ink pb-10 pt-28 sm:pt-32 lg:pb-14 lg:pt-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,184,0,0.12),transparent_68%)]"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl text-center">
          <Reveal>
            <h1 className="mx-auto max-w-6xl text-balance text-[2.8rem] font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl md:text-7xl xl:text-[6.25rem]">
              {english
                ? "AI agents for organizing freight requests."
                : "Agentes de IA para organizar solicitudes de transporte."}
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 sm:mt-8 sm:text-lg sm:leading-8">
              {english
                ? "At NuTeam, we design agents to help structure request details and flag missing information according to your operation’s rules. Your team reviews exceptions and ambiguous cases; together, we decide what makes sense to automate."
                : "En NuTeam diseñamos agentes que ayudan a estructurar los datos de cada solicitud y a señalar lo que falta, según las reglas de tu operación. Tu equipo revisa las excepciones y los casos ambiguos; juntos definimos qué conviene automatizar."}
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center">
              <TrackedLink
                href="#contacto"
                ctaName="analizar_operacion"
                location="hero"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-volt px-7 py-3.5 text-sm font-semibold text-ink transition-transform duration-200 hover:scale-[1.03] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-volt"
              >
                {english ? "Evaluate my process" : "Evaluar mi proceso"}
              </TrackedLink>

              <a
                href="#demo"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-medium text-white/85 transition-colors hover:border-white/35 hover:bg-white/[0.07] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-volt"
              >
                {english ? "See the Freight Pilot demo" : "Ver la demo de Freight Pilot"}
              </a>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
