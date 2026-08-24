import Logo from "@/components/landing/logo";

export default function Footer() {
  return (
    <footer className="relative overflow-x-clip border-t border-white/10 bg-ink text-white">
      <div className="mx-auto max-w-[1440px] px-6 pb-10 pt-14 lg:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <a href="#" className="flex items-center gap-2.5" aria-label="NuTeam">
              <Logo className="h-5 w-[26px]" />
              <span className="text-lg font-semibold tracking-tight">
                <span className="text-volt">Nu</span><span>Team</span>
              </span>
            </a>

            <p className="mt-2 font-mono text-[10px] font-medium uppercase tracking-[0.26em] text-white/60">
              AI para operaciones
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.26em] text-white/60">
              Legal
            </p>

            <div className="mt-4 flex gap-8">
              <a
                href="#"
                className="text-sm text-white/50 transition-colors hover:text-volt"
              >
                Privacidad
              </a>

              <a
                href="#"
                className="text-sm text-white/50 transition-colors hover:text-volt"
              >
                Términos
              </a>
            </div>
          </div>

          <p className="font-mono text-xs text-white/60">
             © {new Date().getFullYear()} NuTeam
          </p>
        </div>

        <div className="mt-14 flex items-center gap-3 border-t border-white/10 pt-6">
          <span className="h-1.5 w-1.5 shrink-0 bg-volt" aria-hidden />
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-white/60">
            Evaluamos procesos operativos y automatizamos cuando es viable
          </p>
        </div>

        <div className="pointer-events-none mt-12 select-none">
          <p
            className="whitespace-nowrap text-center text-[clamp(4rem,14vw,13rem)] font-bold leading-[0.9] tracking-[-0.05em] text-white/[0.35]"
            aria-hidden
          >
            NuTeam
          </p>
        </div>
      </div>
    </footer>
  );
}
