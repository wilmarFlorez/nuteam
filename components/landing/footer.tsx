export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink text-white">
      <div className="mx-auto max-w-[1440px] px-6 pb-8 pt-14 lg:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <a href="#" className="flex items-center gap-2.5" aria-label="Nu Team">
              <span className="block h-2.5 w-2.5 bg-volt" />
              <span className="text-lg font-semibold tracking-tight">
                Nu<span className="text-white/60">Team</span>
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
            © {new Date().getFullYear()} Nu Team
          </p>
        </div>

        <div className="mt-14 flex items-center gap-3 border-t border-white/10 pt-6">
          <span className="h-1.5 w-1.5 shrink-0 bg-volt" aria-hidden />
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-white/60">
            Diseñamos agentes de IA que ejecutan procesos operativos
          </p>
        </div>

        <div className="pointer-events-none mt-12 select-none overflow-hidden">
          <p
            className="whitespace-nowrap text-center text-[17vw] font-bold leading-[0.75] tracking-[-0.05em] text-white/[0.35]"
            aria-hidden
          >
            Nu Team
          </p>
        </div>
      </div>
    </footer>
  );
}
