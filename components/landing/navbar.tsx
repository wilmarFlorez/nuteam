"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Soluciones", href: "#soluciones" },
  { label: "Casos de uso", href: "#casos-de-uso" },
  { label: "Cómo funciona", href: "#como-funciona" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-white/10 bg-ink/85 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 lg:h-[72px] lg:px-10">
          <a href="#" className="group flex items-center gap-2.5" aria-label="Nu Team">
            <span className="block h-2.5 w-2.5 bg-volt transition-colors group-hover:bg-white" />
            <span className="text-[19px] font-semibold tracking-tight">
              Nu<span className="text-white/45">Team</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-white/30">
              AI para operaciones
            </span>

            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-white/55 transition-colors hover:text-volt"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 bg-volt px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-volt"
            >
              Analizar mi operación
              <span className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center lg:hidden"
          >
            <span className="relative block h-3 w-6">
              <span className="absolute left-0 top-0 block h-px w-full bg-white" />
              <span className="absolute left-0 top-1/2 block h-px w-full -translate-y-1/2 bg-white" />
              <span className="absolute bottom-0 left-0 block h-px w-full bg-white" />
            </span>
          </button>
        </nav>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-ink lg:hidden">
          <div className="flex h-full flex-col px-6 pb-10 pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="block h-2.5 w-2.5 bg-volt" />
                <span className="text-[19px] font-semibold tracking-tight">
                  Nu<span className="text-white/45">Team</span>
                </span>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
                className="flex h-10 w-10 items-center justify-center"
              >
                <span className="relative block h-3.5 w-3.5">
                  <span className="absolute left-0 top-1/2 block h-px w-full -translate-y-1/2 rotate-45 bg-white" />
                  <span className="absolute left-0 top-1/2 block h-px w-full -translate-y-1/2 -rotate-45 bg-white" />
                </span>
              </button>
            </div>

            <nav className="mt-12">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/30">
                AI para operaciones
              </p>

              <ul className="mt-2 border-t border-white/10">
                {links.map((item, index) => (
                  <li key={item.href} className="border-b border-white/10">
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline gap-4 py-5"
                    >
                      <span className="font-mono text-xs text-volt">
                        0{index + 1}
                      </span>
                      <span className="text-3xl font-semibold tracking-tight transition-transform group-hover:translate-x-1.5">
                        {item.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-auto inline-flex items-center justify-center gap-2 bg-volt px-7 py-4 text-sm font-semibold text-ink"
            >
              Analizar mi operación
              <span>→</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
