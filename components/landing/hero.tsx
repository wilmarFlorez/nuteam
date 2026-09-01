import Reveal from "./reveal";
import TrackedLink from "./tracked_link";
import { isEnglish, type Locale } from "@/lib/locale";

const channels = ["Voz", "WhatsApp", "Email", "Workflows"];

const spanishLogLines = [
  {
    time: "12:41:07",
    tag: "ENTRADA",
    text: "WhatsApp · \"¿Estado de mi pedido?\"",
  },
  {
    time: "12:41:08",
    tag: "CONTEXTO",
    text: "CRM verificado · cliente #2841",
  },
  {
    time: "12:41:09",
    tag: "ACCIÓN",
    text: "Ticket creado · prioridad alta",
  },
  {
    time: "12:41:09",
    tag: "SALIDA",
    text: "Respuesta enviada",
  },
];

function AgentPanel({ locale }: { locale: Locale }) {
  const english = isEnglish(locale);
  const logLines = english
    ? [
        { time: "12:41:07", tag: "INPUT", text: "WhatsApp · \"Where is my order?\"" },
        { time: "12:41:08", tag: "CONTEXT", text: "CRM verified · customer #2841" },
        { time: "12:41:09", tag: "ACTION", text: "Ticket created · high priority" },
        { time: "12:41:09", tag: "OUTPUT", text: "Response sent" },
      ]
    : spanishLogLines;
  return (
    <div className="relative overflow-hidden border border-white/15 bg-coal shadow-[0_24px_80px_rgb(0_0_0_/_0.28)]">
      <span className="absolute -left-px -top-px h-4 w-4 border-l border-t border-volt" />
      <span className="absolute -right-px -bottom-px h-4 w-4 border-b border-r border-volt" />

      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.025] px-5 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-volt opacity-40" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-volt shadow-[0_0_12px_#ffb800]" />
          </span>
          <div>
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-white/90">
              {english ? "Live agent" : "Agente en vivo"}
            </span>
            <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-white/45">
              {english ? "Order support" : "Atención de pedidos"}
            </p>
          </div>
        </div>

        <span className="border border-volt/35 bg-volt/10 px-2.5 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-volt">
          {english ? "Running" : "En ejecución"}
        </span>
      </div>

      <div className="px-5 py-5 sm:px-6">
        <div className="mb-3 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-white/45">
          <span>{english ? "Execution trace" : "Traza de ejecución"}</span>
          <span>{english ? "04 events" : "04 eventos"}</span>
        </div>

        <div className="relative space-y-1 before:absolute before:bottom-3 before:left-[63px] before:top-3 before:w-px before:bg-white/15 sm:before:left-[71px]">
          {logLines.map((line, index) => (
            <div
              key={line.text}
              className="relative grid grid-cols-[48px_7px_minmax(0,1fr)] items-start gap-x-3 py-2 sm:grid-cols-[56px_7px_minmax(0,1fr)]"
            >
              <span className="pt-1 font-mono text-[10px] tabular-nums text-white/45 sm:text-[11px]">
                {line.time}
              </span>
              <span
                className={`z-10 mt-1.5 h-2 w-2 border border-coal ${
                  index === logLines.length - 1 ? "bg-volt shadow-[0_0_8px_#ffb800]" : "bg-white/55"
                }`}
              />
              <div
                className={`min-w-0 px-2.5 py-1.5 ${
                  index === logLines.length - 1 ? "border-l-2 border-volt bg-volt/[0.08]" : ""
                }`}
              >
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 font-mono text-[10px] leading-5 sm:text-[11px]">
                  <span className="font-medium tracking-[0.08em] text-white/90">{line.tag}</span>
                  <span className="text-volt" aria-hidden>→</span>
                  <span className="text-white/70">{line.text}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 divide-y divide-white/10 border-t border-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        <div className="px-5 py-4 sm:px-6">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/55">
            {english ? "Mode" : "Modo"}
          </p>
          <p className="mt-1.5 text-sm font-medium text-white">{english ? "Defined process" : "Proceso definido"}</p>
        </div>

        <div className="px-5 py-4 sm:px-6">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/55">
            {english ? "Channels" : "Canales"}
          </p>
          <p className="mt-1.5 text-sm font-medium text-white">Voz · WhatsApp</p>
        </div>

        <div className="px-5 py-4 sm:px-6">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/55">
            {english ? "Systems" : "Sistemas"}
          </p>
          <p className="mt-1.5 text-sm font-medium text-white">{english ? "To be assessed" : "Por evaluar"}</p>
        </div>
      </div>
    </div>
  );
}

export default function Hero({ locale }: { locale: Locale }) {
  const english = isEnglish(locale);
  return (
    <section className="relative min-h-svh overflow-hidden bg-ink pt-32 sm:pt-36 lg:flex lg:flex-col lg:pt-44">
      <div className="absolute inset-0 bg-dots" />
      <div className="absolute -right-48 top-16 h-[520px] w-[520px] rounded-full bg-volt/[0.05] blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent to-ink" />

      <div className="relative mx-auto grid max-w-[1440px] gap-14 px-6 pb-24 lg:flex-1 lg:items-center lg:grid-cols-12 lg:gap-10 lg:px-10 lg:pb-32">
        <div className="lg:col-span-7 xl:pr-12">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.26em] text-white/65">
              <span className="h-2 w-2 shrink-0 bg-volt" aria-hidden />
              {english ? "AI for operations" : "IA aplicada a operaciones"}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-8 text-[2.75rem] font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
              {english
                ? "How much manual work builds up in your operation?"
                : "¿Cuánto trabajo manual se acumula en tu operación?"}
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-8 max-w-xl text-lg leading-8 text-white/55">
              {english
                ? "We assess repetitive, high-volume processes spread across multiple systems to determine whether AI automation may be viable."
                : "Evaluamos procesos repetitivos, de alto volumen o repartidos entre varios sistemas para determinar si una automatización con IA puede ser viable."}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <TrackedLink
                href="#contacto"
                ctaName="analizar_operacion"
                location="hero"
                className="group inline-flex items-center justify-center gap-2 bg-volt px-7 py-4 text-sm font-semibold text-ink transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-volt"
              >
                {english ? "Evaluate a process" : "Evaluar un proceso"}
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </TrackedLink>

              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 border border-white/20 px-7 py-4 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-volt"
              >
                {english ? "How it works" : "Cómo funciona"}
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/55">
                {english ? "Channels" : "Canales"}
              </span>

              {channels.map((channel) => (
                <span
                  key={channel}
                  className="font-mono text-xs font-medium text-white/60"
                >
                  {channel}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5 lg:pt-8">
          <Reveal delay={200} className="lg:sticky lg:top-28">
            <div className="animate-float">
              <AgentPanel locale={locale} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
