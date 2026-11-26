"use client";

import { useEffect, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { isEnglish, type Locale } from "@/lib/locale";
import { requestContactModalOpen } from "./contact_modal_events";

export default function Navbar({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const english = isEnglish(locale);
  const links = english
    ? [
        { label: "The workflow", href: "#soluciones" },
        { label: "Related processes", href: "#casos-de-uso" },
        { label: "How we work", href: "#como-funciona" },
      ]
    : [
        { label: "El flujo", href: "#soluciones" },
        { label: "Procesos relacionados", href: "#casos-de-uso" },
        { label: "Cómo trabajamos", href: "#como-funciona" },
      ];
  const languageHref = english ? "/" : "/en";
  const languageLabel = english ? "ES" : "EN";
  const evaluateLabel = english ? "Evaluate my process" : "Evaluar mi proceso";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-white/[0.08] bg-ink/85 text-white backdrop-blur-2xl">
        <nav className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 sm:px-6 lg:px-10">
          <a href="#" className="text-[22px] font-semibold tracking-[-0.055em] sm:text-2xl lg:text-[21px]">
            <span className="text-volt">Nu</span><span className="text-white">Team</span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[13px] font-medium text-white/65 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}

            <a
              href={languageHref}
              lang={english ? "es" : "en"}
              className="text-[13px] font-medium text-white/65 transition-colors hover:text-volt"
              aria-label={english ? "Ver sitio en español" : "View site in English"}
            >
              {languageLabel}
            </a>

            <a
              href="#contacto"
              onClick={(event) => {
                event.preventDefault();
                trackEvent("cta_click", { cta_name: "analizar_operacion", location: "navbar" });
                requestContactModalOpen();
              }}
              className="inline-flex min-h-10 items-center rounded-full bg-volt px-5 py-2.5 text-[13px] font-semibold text-ink transition-transform duration-200 hover:scale-[1.03] hover:bg-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-volt"
            >
              {evaluateLabel}
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={english ? "Open menu" : "Abrir menú"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-volt lg:hidden"
          >
            <span className="relative block h-4 w-8">
              <span className="absolute left-0 top-1 block h-px w-full bg-white" />
              <span className="absolute bottom-1 left-0 block h-px w-full bg-white" />
            </span>
          </button>
        </nav>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-ink/95 text-white backdrop-blur-2xl lg:hidden">
          <div className="flex h-full flex-col px-6 pb-8 pt-5 sm:px-10 sm:pb-10">
            <div className="flex items-center justify-between">
              <span className="text-[22px] font-semibold tracking-[-0.055em] sm:text-2xl">
                <span className="text-volt">Nu</span><span className="text-white">Team</span>
              </span>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={english ? "Close menu" : "Cerrar menú"}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-volt"
              >
                <span className="relative block h-3.5 w-3.5">
                  <span className="absolute left-0 top-1/2 block h-px w-full -translate-y-1/2 rotate-45 bg-white" />
                  <span className="absolute left-0 top-1/2 block h-px w-full -translate-y-1/2 -rotate-45 bg-white" />
                </span>
              </button>
            </div>

            <nav className="mt-10">
              <ul className="mt-2 divide-y divide-white/10 border-t border-white/10">
                {links.map((item, index) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline gap-5 py-5 sm:py-6"
                    >
                      <span className="font-mono text-xs text-volt/80">
                        {index + 1}
                      </span>
                      <span className="text-3xl font-semibold tracking-[-0.04em] transition-colors group-hover:text-volt sm:text-4xl">
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
              className="mt-8 text-sm font-medium text-volt"
            >
              {english ? "Ver en español" : "View in English"}
            </a>

            <a
              href="#contacto"
              onClick={(event) => {
                event.preventDefault();
                setOpen(false);
                trackEvent("cta_click", { cta_name: "analizar_operacion", location: "navbar_mobile" });
                requestContactModalOpen();
              }}
              className="mt-auto inline-flex min-h-12 items-center justify-center rounded-full bg-volt px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-volt"
            >
              {evaluateLabel}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
