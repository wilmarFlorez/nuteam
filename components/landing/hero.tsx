import Reveal from "./reveal";
import TrackedLink from "./tracked_link";

const channels = ["Voz", "WhatsApp", "Email", "Workflows"];

const logLines = [
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

function AgentPanel() {
  return (
    <div className="relative border border-white/10 bg-coal">
      <span className="absolute -left-px -top-px h-3 w-3 border-l border-t border-volt" />
       <span className="absolute -right-px -top-px h-3 w-3 border-r border-t border-electric" />
      <span className="absolute -bottom-px -left-px h-3 w-3 border-b border-l border-volt" />
      <span className="absolute -bottom-px -right-px h-3 w-3 border-b border-r border-volt" />

      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-volt opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-volt" />
          </span>
           <span className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-white/75">
            Agente en vivo
          </span>
        </div>

        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-volt">
          ● ejecutando
        </span>
      </div>

      <div className="space-y-2.5 px-5 py-6 font-mono text-[11px] leading-5 sm:text-xs">
        {logLines.map((line) => (
          <p key={line.text} className="flex flex-wrap gap-x-3 gap-y-1">
            <span className="text-white/50">{line.time}</span>
            <span className="text-white/90">{line.tag}</span>
            <span className="text-volt">→</span>
            <span className="text-white/75">{line.text}</span>
          </p>
        ))}
      </div>

      <div className="relative mx-5 h-px overflow-hidden bg-white/10">
        <span className="absolute inset-y-0 w-1/3 animate-scan bg-gradient-to-r from-transparent via-volt to-transparent" />
      </div>

      <div className="mt-5 grid grid-cols-3 divide-x divide-white/10 border-t border-white/10">
        <div className="px-5 py-4">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/50">
            Modo
          </p>
          <p className="mt-1 text-sm font-medium text-white/90">Proceso definido</p>
        </div>

        <div className="px-5 py-4">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/50">
            Canales
          </p>
          <p className="mt-1 text-sm font-medium text-white/90">Voz · WhatsApp</p>
        </div>

        <div className="px-5 py-4">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/50">
            Sistemas
          </p>
          <p className="mt-1 text-sm font-medium text-white/90">Por evaluar</p>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
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
              IA aplicada a operaciones
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-8 text-[2.75rem] font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
              ¿Cuánto trabajo manual se acumula en tu operación?
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-8 max-w-xl text-lg leading-8 text-white/55">
              Evaluamos procesos repetitivos, de alto volumen o repartidos entre
              varios sistemas para determinar si una automatización con IA puede
              ser viable.
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
                Evaluar un proceso
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </TrackedLink>

              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 border border-white/20 px-7 py-4 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-volt"
              >
                Cómo funciona
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/55">
                Canales
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
              <AgentPanel />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
