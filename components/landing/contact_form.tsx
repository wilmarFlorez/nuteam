"use client";

import { FormEvent, useState } from "react";

const inputClass =
  "w-full border-b border-white/15 bg-transparent pb-3 text-white outline-none transition-colors placeholder:text-white/20 focus:border-volt";

const labelClass =
  "mb-3 block font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-white/40";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Temporalmente solo mostramos el estado de éxito.
    // Posteriormente conectaremos este formulario con el sistema de leads.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center border border-white/10 bg-coal px-6 py-20 text-center">
        <span className="flex h-12 w-12 items-center justify-center border border-volt font-mono text-lg text-volt">
          ✓
        </span>

        <h3 className="mt-6 text-2xl font-semibold text-white">
          Solicitud recibida.
        </h3>

        <p className="mx-auto mt-3 max-w-md leading-7 text-white/50">
          Analizaremos la información que compartiste y nos pondremos en
          contacto contigo.
        </p>

        <p className="mt-8 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-white/30">
          Status · En análisis
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-9">
      <div className="grid gap-9 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Nombre
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            className={inputClass}
            placeholder="Tu nombre"
          />
        </div>

        <div>
          <label htmlFor="company" className={labelClass}>
            Empresa
          </label>

          <input
            id="company"
            name="company"
            type="text"
            required
            className={inputClass}
            placeholder="Nombre de la empresa"
          />
        </div>
      </div>

      <div className="grid gap-9 sm:grid-cols-2">
        <div>
          <label htmlFor="role" className={labelClass}>
            Cargo
          </label>

          <input
            id="role"
            name="role"
            type="text"
            required
            className={inputClass}
            placeholder="Tu cargo"
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email corporativo
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
            placeholder="nombre@empresa.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>
          WhatsApp / teléfono
        </label>

        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className={inputClass}
          placeholder="+57 300 000 0000"
        />
      </div>

      <div>
        <label htmlFor="process" className={labelClass}>
          ¿Qué proceso te gustaría automatizar?
        </label>

        <textarea
          id="process"
          name="process"
          required
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder="Cuéntanos cómo funciona actualmente el proceso..."
        />
      </div>

      <div>
        <label htmlFor="volume" className={labelClass}>
          ¿Cuánto trabajo representa aproximadamente?
        </label>

        <div className="relative">
          <select
            id="volume"
            name="volume"
            required
            defaultValue=""
            className={`${inputClass} appearance-none`}
          >
            <option value="" disabled className="bg-ink">
              Selecciona una opción
            </option>

            <option value="less-10" className="bg-ink">
              Menos de 10 horas/semana
            </option>

            <option value="10-30" className="bg-ink">
              10–30 horas/semana
            </option>

            <option value="30-60" className="bg-ink">
              30–60 horas/semana
            </option>

            <option value="more-60" className="bg-ink">
              Más de 60 horas/semana
            </option>

            <option value="unknown" className="bg-ink">
              No lo sé
            </option>
          </select>

          <span
            className="pointer-events-none absolute bottom-3 right-0 font-mono text-sm text-volt"
            aria-hidden
          >
            ▾
          </span>
        </div>
      </div>

      <div>
        <label htmlFor="impact" className={labelClass}>
          ¿Qué ocurre cuando este proceso no se ejecuta correctamente o a
          tiempo?
        </label>

        <textarea
          id="impact"
          name="impact"
          required
          rows={4}
          className={`${inputClass} resize-none`}
          placeholder="Ej. pérdida de ventas, retrasos, horas de trabajo..."
        />
      </div>

      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2 bg-volt px-7 py-4 text-sm font-semibold text-ink transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-volt"
      >
        Quiero analizar este proceso
        <span className="transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </button>

      <p className="text-center font-mono text-[11px] leading-5 text-white/30">
        Al enviar este formulario aceptas ser contactado por Nu Team respecto a
        tu solicitud.
      </p>
    </form>
  );
}