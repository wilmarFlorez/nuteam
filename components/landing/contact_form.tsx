"use client";

import { FormEvent, useState } from "react";

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
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/10">
          ✓
        </div>

        <h3 className="mt-6 text-2xl font-semibold text-white">
          Solicitud recibida.
        </h3>

        <p className="mx-auto mt-3 max-w-md leading-7 text-white/50">
          Analizaremos la información que compartiste y nos pondremos en
          contacto contigo.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm text-white/60"
          >
            Nombre
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-white outline-none transition placeholder:text-white/20 focus:border-white/30"
            placeholder="Tu nombre"
          />
        </div>

        <div>
          <label
            htmlFor="company"
            className="mb-2 block text-sm text-white/60"
          >
            Empresa
          </label>

          <input
            id="company"
            name="company"
            type="text"
            required
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-white outline-none transition placeholder:text-white/20 focus:border-white/30"
            placeholder="Nombre de la empresa"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="role"
            className="mb-2 block text-sm text-white/60"
          >
            Cargo
          </label>

          <input
            id="role"
            name="role"
            type="text"
            required
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-white outline-none transition placeholder:text-white/20 focus:border-white/30"
            placeholder="Tu cargo"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm text-white/60"
          >
            Email corporativo
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-white outline-none transition placeholder:text-white/20"
            placeholder="nombre@empresa.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="phone"
          className="mb-2 block text-sm text-white/60"
        >
          WhatsApp / teléfono
        </label>

        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-white outline-none transition placeholder:text-white/20"
          placeholder="+57 300 000 0000"
        />
      </div>

      <div>
        <label
          htmlFor="process"
          className="mb-2 block text-sm text-white/60"
        >
          ¿Qué proceso te gustaría automatizar?
        </label>

        <textarea
          id="process"
          name="process"
          required
          rows={5}
          className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-white outline-none transition placeholder:text-white/20 focus:border-white/30"
          placeholder="Cuéntanos cómo funciona actualmente el proceso..."
        />
      </div>

      <div>
        <label
          htmlFor="volume"
          className="mb-2 block text-sm text-white/60"
        >
          ¿Cuánto trabajo representa aproximadamente?
        </label>

        <select
          id="volume"
          name="volume"
          required
          defaultValue=""
          className="w-full appearance-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-white outline-none transition focus:border-white/30"
        >
          <option value="" disabled className="bg-black">
            Selecciona una opción
          </option>

          <option value="less-10" className="bg-black">
            Menos de 10 horas/semana
          </option>

          <option value="10-30" className="bg-black">
            10–30 horas/semana
          </option>

          <option value="30-60" className="bg-black">
            30–60 horas/semana
          </option>

          <option value="more-60" className="bg-black">
            Más de 60 horas/semana
          </option>

          <option value="unknown" className="bg-black">
            No lo sé
          </option>
        </select>
      </div>

      <div>
        <label
          htmlFor="impact"
          className="mb-2 block text-sm text-white/60"
        >
          ¿Qué ocurre cuando este proceso no se ejecuta correctamente o a tiempo?
        </label>

        <textarea
          id="impact"
          name="impact"
          required
          rows={4}
          className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-white outline-none transition placeholder:text-white/20 focus:border-white/30"
          placeholder="Ej. pérdida de ventas, retrasos, horas de trabajo..."
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:bg-white/90"
      >
        Quiero analizar este proceso
      </button>

      <p className="text-center text-xs leading-5 text-white/30">
        Al enviar este formulario aceptas ser contactado por Nu Team respecto
        a tu solicitud.
      </p>
    </form>
  );
}