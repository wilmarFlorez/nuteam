import Reveal from "./reveal";
import ParticleNetwork from "./particle_network";
import TrackedLink from "./tracked_link";
import { isEnglish, type Locale } from "@/lib/locale";

export default function Hero({ locale }: { locale: Locale }) {
  const english = isEnglish(locale);
  return (
    <section className="relative min-h-svh overflow-hidden bg-ink pt-32 sm:pt-36 lg:flex lg:flex-col lg:pt-44">
      <div className="absolute inset-0 bg-dots" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent to-ink" />

      <div className="relative mx-auto grid max-w-[1440px] gap-14 px-6 pb-24 lg:flex-1 lg:items-center lg:grid-cols-12 lg:gap-10 lg:px-10 lg:pb-32">
        <div className="relative z-10 lg:col-span-7 xl:pr-12">
          <Reveal>
            <h1 className="text-[2.75rem] font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
              {english
                ? "From scattered freight requests to information ready for review"
                : "De solicitudes de transporte dispersas a datos listos para revisión"}
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-8 max-w-xl text-lg leading-8 text-white/55">
              {english
                ? "If requests arrive by email or message and your team has to organize the details before reviewing them, we can assess which parts of that process may be worth automating."
                : "Si las solicitudes llegan por mensajes o correo y tu equipo debe ordenar los datos antes de revisarlas, evaluamos qué parte del proceso podría convenir automatizar."}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <TrackedLink
                href="#contacto"
                ctaName="analizar_operacion"
                location="hero"
                className="inline-flex items-center justify-center bg-volt px-7 py-4 text-sm font-semibold text-ink transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-volt"
              >
                {english ? "Evaluate my process" : "Evaluar mi proceso"}
              </TrackedLink>

              <a
                href="#demo"
                className="inline-flex items-center justify-center border border-white/20 px-7 py-4 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-volt"
              >
                {english ? "See the Freight Pilot demo" : "Ver la demo de Freight Pilot"}
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-14 border-t border-white/10 pt-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/50">
                {english ? "A process we can assess" : "Un flujo que podemos evaluar"}
              </span>
              <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-white/75 sm:text-xs">
                <span>{english ? "Request" : "Solicitud"}</span>
                <span className="text-volt" aria-hidden="true">·</span>
                <span>{english ? "Structured details" : "Datos ordenados"}</span>
                <span className="text-volt" aria-hidden="true">·</span>
                <span>{english ? "Team review" : "Revisión del equipo"}</span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="relative order-2 mx-auto hidden aspect-[1.15/1] w-full max-w-[40rem] lg:absolute lg:inset-y-0 lg:-right-[16vw] lg:z-0 lg:mx-0 lg:block lg:aspect-auto lg:w-[70vw] lg:max-w-[90rem]">
          <Reveal delay={200} className="h-full w-full">
            <ParticleNetwork />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
