import Image from "next/image";
import Reveal from "./reveal";
import TrackedLink from "./tracked_link";
import { isEnglish, type Locale } from "@/lib/locale";

const demoUrl = "https://freight.nuteam.ai/";

export default function FreightPilot({ locale }: { locale: Locale }) {
  const english = isEnglish(locale);

  return (
    <section id="demo" className="overflow-hidden bg-ink py-24 text-white sm:py-28 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-10">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,0.88fr)_minmax(20rem,1.12fr)]">
          <Reveal
            delay={80}
            className="flex flex-col rounded-[1.75rem] border border-white/10 bg-coal/75 p-7 sm:p-9 lg:rounded-[2rem] lg:p-12"
          >
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-white/55">
              {english ? "Transport operations" : "Operaciones de transporte"}
            </p>
            <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl">
              Freight <span className="text-volt">Pilot</span>
            </h2>
            <h3 className="mt-5 max-w-xl text-xl font-medium leading-tight tracking-[-0.025em] text-white/90 sm:text-2xl">
              {english
                ? "From a scattered message to structured information for review"
                : "De un mensaje disperso a información estructurada para revisión"}
            </h3>
            <p className="mt-5 max-w-xl leading-7 text-white/65 sm:text-[17px] sm:leading-8">
              {english
                ? "This portfolio demo extracts and normalizes transport details, applies business rules, and flags incomplete or ambiguous requests for an operator to review. It does not calculate rates, create quotes, or assign vehicles."
                : "Esta demo de portafolio extrae y normaliza datos de transporte, aplica reglas de negocio y señala las solicitudes incompletas o ambiguas para que las revise un operador. No calcula tarifas, crea cotizaciones ni asigna vehículos."}
            </p>

            <div className="mt-8">
              <TrackedLink
                href={demoUrl}
                target="_blank"
                rel="noreferrer"
                ctaName="ver_demo_freight_pilot"
                location="freight_pilot"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-volt px-6 py-3.5 text-sm font-semibold text-ink transition-transform duration-200 hover:scale-[1.03] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-volt"
              >
                {english ? "View Freight Pilot demo" : "Ver demo de Freight Pilot"}
              </TrackedLink>
            </div>
          </Reveal>

          <Reveal
            delay={140}
            className="rounded-[1.75rem] border border-white/10 bg-coal/45 p-3 sm:p-4 lg:rounded-[2rem] lg:p-5"
          >
            <div className="relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-paper shadow-[0_28px_80px_-36px_rgba(0,0,0,0.65)] sm:rounded-[1.5rem]">
              <div className="flex items-center border-b border-ink/10 px-4 py-3 text-ink sm:px-6 sm:py-4">
                <span className="font-mono text-[9px] font-medium uppercase tracking-[0.18em] text-muted sm:text-[10px] sm:tracking-[0.22em]">
                  {english ? "Operator review" : "Revisión del operador"}
                </span>
              </div>
              <div className="relative aspect-[1106/789] overflow-hidden">
                <Image
                  src="/freight-pilot/image.png"
                  alt={english
                    ? "Freight Pilot operator review screen showing a structured transport request and its extracted details."
                    : "Pantalla de revisión del operador de Freight Pilot con una solicitud de transporte estructurada y sus datos extraídos."}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
