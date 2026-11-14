"use client";

import { useEffect, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { isEnglish, type Locale } from "@/lib/locale";

export default function Navbar({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const english = isEnglish(locale);
  const links = english
    ? [
        { label: "Solutions", href: "#soluciones" },
        { label: "Use cases", href: "#casos-de-uso" },
        { label: "How it works", href: "#como-funciona" },
      ]
    : [
        { label: "Soluciones", href: "#soluciones" },
        { label: "Casos de uso", href: "#casos-de-uso" },
        { label: "Cómo funciona", href: "#como-funciona" },
      ];
  const languageHref = english ? "/" : "/en";
  const languageLabel = english ? "ES" : "EN";
  const evaluateLabel = english ? "Evaluate a process" : "Evaluar un proceso";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-white/10 bg-ink/95 text-white backdrop-blur-md">
        <nav className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-6 sm:h-[84px] sm:px-8 lg:h-[72px] lg:px-10">
          <a href="#" className="text-[22px] font-semibold tracking-tight sm:text-2xl lg:text-[19px]">
            <span className="text-volt">Nu</span><span className="text-white">Team</span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-white/75 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}

            <a
              href={languageHref}
              lang={english ? "es" : "en"}
              className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-white/75 transition-colors hover:text-volt"
              aria-label={english ? "Ver sitio en español" : "View site in English"}
            >
              {languageLabel}
            </a>

            <a
              href="#contacto"
              onClick={() => trackEvent("cta_click", { cta_name: "analizar_operacion", location: "navbar" })}
              className="group inline-flex items-center gap-2 bg-volt px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-volt"
            >
              {evaluateLabel}
              <span className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={english ? "Open menu" : "Abrir menú"}
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-volt lg:hidden"
          >
            <span className="relative block h-4 w-8">
              <span className="absolute left-0 top-1 block h-px w-full bg-white" />
              <span className="absolute bottom-1 left-0 block h-px w-full bg-white" />
            </span>
          </button>
        </nav>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-ink text-white lg:hidden">
          <div className="flex h-full flex-col px-6 pb-10 pt-6">
            <div className="flex items-center justify-between">
              <span className="text-[22px] font-semibold tracking-tight sm:text-2xl">
                <span className="text-volt">Nu</span><span className="text-white">Team</span>
              </span>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={english ? "Close menu" : "Cerrar menú"}
                className="flex h-10 w-10 items-center justify-center"
              >
                <span className="relative block h-3.5 w-3.5">
                  <span className="absolute left-0 top-1/2 block h-px w-full -translate-y-1/2 rotate-45 bg-white" />
                  <span className="absolute left-0 top-1/2 block h-px w-full -translate-y-1/2 -rotate-45 bg-white" />
                </span>
              </button>
            </div>

            <nav className="mt-12">
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
              href={languageHref}
              lang={english ? "es" : "en"}
              className="mt-8 font-mono text-xs font-medium uppercase tracking-[0.22em] text-volt"
            >
              {english ? "Ver en español" : "View in English"}
            </a>

            <a
              href="#contacto"
              onClick={() => {
                setOpen(false);
                trackEvent("cta_click", { cta_name: "analizar_operacion", location: "navbar_mobile" });
              }}
              className="mt-auto inline-flex items-center justify-center gap-2 bg-volt px-7 py-4 text-sm font-semibold text-ink"
            >
              {evaluateLabel}
              <span>→</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
