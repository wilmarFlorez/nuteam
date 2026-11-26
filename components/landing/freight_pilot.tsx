import Image from "next/image";
import Reveal from "./reveal";
import TrackedLink from "./tracked_link";
import { isEnglish, type Locale } from "@/lib/locale";

const demoUrl = "https://freight.nuteam.ai/";

export default function FreightPilot({ locale }: { locale: Locale }) {
  const english = isEnglish(locale);

  return (
    <section id="demo" className="overflow-hidden bg-ink py-24 text-white lg:py-36">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid border border-white/10 bg-coal lg:grid-cols-[minmax(0,0.9fr)_minmax(20rem,1.1fr)]">
          <Reveal delay={80} className="flex flex-col p-7 sm:p-10 lg:p-12">
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-volt">
              {english ? "Transport operations" : "Operaciones de transporte"}
            </p>
            <h2 className="mt-6 max-w-xl text-3xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-4xl">
              Freight <span className="text-volt">Pilot</span>
            </h2>
            <h3 className="mt-5 max-w-xl text-xl font-medium leading-tight tracking-tight text-white/90 sm:text-2xl">
              {english
                ? "From a scattered message to structured information for review"
                : "De un mensaje disperso a información estructurada para revisión"}
            </h3>
            <p className="mt-5 max-w-xl leading-7 text-white/60">
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
                className="inline-flex items-center justify-center bg-volt px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-volt"
              >
                {english ? "View Freight Pilot demo" : "Ver demo de Freight Pilot"}
              </TrackedLink>
            </div>
          </Reveal>

          <Reveal delay={140} className="border-t border-white/10 p-4 sm:p-6 lg:border-l lg:border-t-0 lg:p-8">
            <TrackedLink
              href={demoUrl}
              target="_blank"
              rel="noreferrer"
              ctaName="ver_demo_freight_pilot"
              location="freight_pilot_preview"
              className="group relative block overflow-hidden border border-white/10 bg-paper shadow-[0_20px_50px_rgb(0_0_0_/_0.2)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-volt"
            >
                <div className="flex items-center justify-between border-b border-ink/10 px-5 py-3 text-ink sm:px-6">
                  <span className="font-mono text-[10px] font-medium uppercase tracking-[0.22em]">
                    {english ? "Operator review" : "Revisión del operador"}
                </span>
                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted transition-colors group-hover:text-ink">
                  {english ? "Open demo" : "Abrir demo"}
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
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </div>
            </TrackedLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
