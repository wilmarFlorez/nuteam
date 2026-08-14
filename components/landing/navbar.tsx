"use client";

import { useState } from "react";

const navItems = [
  { label: "Soluciones", href: "#soluciones" },
  { label: "Casos de uso", href: "#casos-de-uso" },
  { label: "Cómo funciona", href: "#como-funciona" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#" className="text-xl font-semibold tracking-tight text-white">
          Nu<span className="text-white/50">Team</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/60 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contacto"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Analizar mi operación
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          aria-label="Abrir menú"
        >
          <div className="space-y-1.5">
            <span className="block h-px w-6 bg-white" />
            <span className="block h-px w-6 bg-white" />
            <span className="block h-px w-6 bg-white" />
          </div>
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-black px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm text-white/70"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-white px-5 py-3 text-center text-sm font-medium text-black"
            >
              Analizar mi operación
            </a>
          </div>
        </div>
      )}
    </header>
  );
}