export default function Hero() {
    return (
      <section className="relative overflow-hidden bg-black pb-20 pt-32 sm:pb-24 sm:pt-40 lg:pb-32 lg:pt-52">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-20 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-white/[0.04] blur-3xl sm:h-[500px] sm:w-[500px]" />
        </div>
  
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">  
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl">
              Tu próximo equipo
              <br />
              también trabaja con IA.
            </h1>
  
            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/55 sm:mt-8 sm:text-xl sm:leading-8">
              Diseñamos agentes de IA que ejecutan procesos operativos,
              interactúan con clientes y trabajan junto a tu equipo.
            </p>
  
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <a
                href="#contacto"
                className="w-full max-w-[260px] rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:bg-white/90 sm:w-auto"
              >
                Analizar mi operación
              </a>
  
              <a
                href="#como-funciona"
                className="w-full max-w-[260px] rounded-full border border-white/15 px-7 py-4 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/5 sm:w-auto"
              >
                Cómo funciona
              </a>
            </div>
          </div>
  
          {/* Visual */}
          <div className="mx-auto mt-14 max-w-5xl sm:mt-20">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] sm:aspect-[16/7]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_55%)]" />
  
              {/* Desktop connection line */}
              <div className="absolute left-[10%] top-1/2 hidden h-px w-[80%] bg-white/10 sm:block" />
  
              {/* Desktop nodes */}
              <div className="absolute left-[18%] top-1/2 hidden h-3 w-3 -translate-y-1/2 rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.5)] sm:block" />
  
              <div className="absolute left-1/2 top-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.5)] sm:block" />
  
              <div className="absolute right-[18%] top-1/2 hidden h-3 w-3 -translate-y-1/2 rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.5)] sm:block" />
  
              {/* Desktop cards */}
              <div className="absolute left-[11%] top-[30%] hidden rounded-lg border border-white/10 bg-black/80 px-4 py-3 sm:block">
                <p className="text-xs text-white/40">Cliente</p>
                <p className="mt-1 text-sm text-white">Solicitud</p>
              </div>
  
              <div className="absolute left-1/2 top-[20%] hidden -translate-x-1/2 rounded-lg border border-white/10 bg-black/80 px-4 py-3 sm:block">
                <p className="text-xs text-white/40">Nu Team</p>
                <p className="mt-1 text-sm text-white">IA ejecutando</p>
              </div>
  
              <div className="absolute right-[11%] top-[30%] hidden rounded-lg border border-white/10 bg-black/80 px-4 py-3 sm:block">
                <p className="text-xs text-white/40">Sistema</p>
                <p className="mt-1 text-sm text-white">Acción ejecutada</p>
              </div>
  
              {/* Mobile visual */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 sm:hidden">
                <div className="rounded-xl border border-white/10 bg-black/80 px-8 py-4 text-center">
                  <p className="text-xs text-white/40">Cliente</p>
                  <p className="mt-1 text-sm text-white">Solicitud</p>
                </div>
  
                <div className="h-8 w-px bg-white/10" />
  
                <div className="rounded-xl border border-white/10 bg-black/80 px-8 py-4 text-center shadow-[0_0_40px_rgba(255,255,255,0.04)]">
                  <p className="text-xs text-white/40">Nu Team</p>
                  <p className="mt-1 text-sm text-white">IA ejecutando</p>
                </div>
  
                <div className="h-8 w-px bg-white/10" />
  
                <div className="rounded-xl border border-white/10 bg-black/80 px-8 py-4 text-center">
                  <p className="text-xs text-white/40">Sistema</p>
                  <p className="mt-1 text-sm text-white">Acción ejecutada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }