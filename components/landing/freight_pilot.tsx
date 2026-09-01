import Eyebrow from "./eyebrow";
import Reveal from "./reveal";
import TrackedLink from "./tracked_link";
import { isEnglish, type Locale } from "@/lib/locale";

const demoUrl = "https://freight-pilot-flame.vercel.app/";
const repositoryUrl = "https://github.com/wilmarFlorez/freight_pilot";

export default function FreightPilot({ locale }: { locale: Locale }) {
  const english = isEnglish(locale);
  const highlights = english
    ? ["Free text input", "Deterministic validation", "Human review", "Traceability"]
    : ["Texto libre", "Validación determinista", "Revisión humana", "Trazabilidad"];

  return (
    <section id="demo" className="overflow-hidden bg-ink py-24 text-white lg:py-36">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.48fr)] lg:items-end lg:gap-16">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow index="03">{english ? "Featured demo" : "Demo destacada"}</Eyebrow>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mt-7 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                Freight <span className="text-volt">Pilot.</span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <p className="max-w-sm border-t border-white/15 pt-6 leading-7 text-white/55 lg:max-w-md lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
              {english
                ? "A portfolio demo for preparing reliable transport requests before the quotation process."
                : "Una demo de portfolio para preparar solicitudes de transporte fiables antes del proceso de cotización."}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid border border-white/10 bg-coal lg:grid-cols-12">
          <Reveal className="border-b border-white/10 p-7 sm:p-10 lg:col-span-7 lg:border-b-0 lg:border-r lg:p-12">
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-volt">
              {english ? "Transport operations" : "Operaciones de transporte"}
            </p>
            <h3 className="mt-6 max-w-2xl text-3xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-4xl">
              {english
                ? "From a scattered message to a request ready for quotation."
                : "De un mensaje disperso a una solicitud lista para cotizar."}
            </h3>
            <p className="mt-6 max-w-2xl leading-7 text-white/60">
              {english
                ? "It extracts transport data with AI, normalizes it, applies business rules, and sends incomplete or ambiguous requests to an operator for review."
                : "Extrae datos de transporte con IA, los normaliza, aplica reglas de negocio y envía las solicitudes incompletas o ambiguas a revisión del operador."}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
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

          <div className="lg:col-span-5">
            <Reveal delay={120} className="h-full">
              <div className="flex h-full flex-col p-7 sm:p-10 lg:p-12">
                <div className="grid grid-cols-2 gap-px border border-white/10 bg-white/10">
                  {highlights.map((highlight, index) => (
                    <div key={highlight} className="bg-coal p-4">
                      <span className="font-mono text-[10px] text-volt">0{index + 1}</span>
                      <p className="mt-5 text-sm font-medium leading-5 text-white/85">{highlight}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 border-t border-white/10 pt-6">
                  <p className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-white/50">
                    {english ? "Current scope" : "Alcance actual"}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/60">
                    {english
                      ? "Manual text input and OpenAI extraction. It does not calculate prices, assign vehicles, or integrate with CRM, TMS, email, or WhatsApp."
                      : "Entrada manual de texto y extracción con OpenAI. No calcula precios, asigna vehículos ni se integra todavía con CRM, TMS, correo o WhatsApp."}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
