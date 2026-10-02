import Image from "next/image";
import Reveal from "./reveal";
import TrackedLink from "./tracked_link";
import { isEnglish, type Locale } from "@/lib/locale";

const demoUrl = "https://freight-pilot-flame.vercel.app/";
const repositoryUrl = "https://github.com/wilmarFlorez/freight_pilot";

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
              Freight <span className="text-volt">Pilot.</span>
            </h2>
            <h3 className="mt-5 max-w-xl text-xl font-medium leading-tight tracking-tight text-white/90 sm:text-2xl">
              {english
                ? "From a scattered message to a request ready for quotation."
                : "De un mensaje disperso a una solicitud lista para cotizar."}
            </h3>
            <p className="mt-5 max-w-xl leading-7 text-white/60">
              {english
                ? "It extracts transport data with AI, normalizes it, applies business rules, and sends incomplete or ambiguous requests to an operator for review."
                : "Extrae datos de transporte con IA, los normaliza, aplica reglas de negocio y envía las solicitudes incompletas o ambiguas a revisión del operador."}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackedLink
                href={demoUrl}
                target="_blank"
                rel="noreferrer"
                ctaName="ver_demo_freight_pilot"
                location="freight_pilot"
                className="group inline-flex items-center justify-center gap-2 bg-volt px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-volt"
              >
                {english ? "View Freight Pilot demo" : "Ver demo de Freight Pilot"}
                <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>
                  ↗
                </span>
              </TrackedLink>
              <a
                href={repositoryUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center border border-white/20 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-volt"
              >
                {english ? "View source code" : "Ver código fuente"}
              </a>
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
                  {english ? "Open demo ↗" : "Abrir demo ↗"}
                </span>
              </div>
              <div className="relative aspect-[1106/789] overflow-hidden">
                <Image
                  src="/freight-pilot/image.png"
                  alt={english
                    ? "Freight Pilot operator review screen showing a transport request ready for quotation and its structured data."
                    : "Pantalla de revisión del operador de Freight Pilot con una solicitud de transporte lista para cotizar y sus datos estructurados."}
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
