"use client";

import { FormEvent, useRef, useState } from "react";
import { getAttribution, trackEvent } from "@/lib/analytics";

const inputClass =
  "w-full border-b border-white/15 bg-transparent pb-3 text-white outline-none transition-colors placeholder:text-white/20 focus:border-volt";

const labelClass =
  "mb-3 block font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-white/65";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasError, setHasError] = useState(false);
  const hasStarted = useRef(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) return;

    const endpoint = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_ENDPOINT;
    if (!endpoint) {
      setHasError(true);
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const attribution = getAttribution();
    const utm = attribution
      ? {
          source: attribution.source,
          medium: attribution.medium,
          campaign: attribution.campaign,
          term: attribution.term,
          content: attribution.content,
        }
      : { source: "", medium: "", campaign: "", term: "", content: "" };

    setIsSubmitting(true);
    setHasError(false);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          name: formData.get("name"),
          company: formData.get("company"),
          role: formData.get("role"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          process: formData.get("process"),
          volume: formData.get("volume"),
          impact: formData.get("impact"),
          source: utm.source || "landing",
          utm,
          ...(attribution ? { attribution } : {}),
        }),
      });

      if (!response.ok) throw new Error("Request failed");

      const result: unknown = await response.json();
      if (
        !result ||
        typeof result !== "object" ||
        !("success" in result) ||
        result.success !== true
      ) {
        throw new Error("Lead was not accepted");
      }

      trackEvent("form_submit", {
        form_name: "contacto",
        process_type: "evaluacion_operativa",
      });
      setSubmitted(true);
    } catch {
      setHasError(true);
    } finally {
      setIsSubmitting(false);
    }
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

        <p className="mt-8 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-white/60">
          Status · En análisis
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      onFocusCapture={() => {
        if (hasStarted.current) return;
        hasStarted.current = true;
        trackEvent("form_start", { form_name: "contacto" });
      }}
      className="space-y-9"
    >
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
          className={inputClass}
          placeholder="+57 300 000 0000"
        />
      </div>

      <div>
        <label htmlFor="process" className={labelClass}>
          ¿Qué proceso genera más trabajo manual o demoras?
        </label>

        <textarea
          id="process"
          name="process"
          required
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder="Describe qué ocurre hoy, quién participa, con qué frecuencia ocurre y qué parte se repite."
        />
      </div>

      <div>
        <label htmlFor="volume" className={labelClass}>
          ¿Qué volumen maneja aproximadamente este proceso?
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
        disabled={isSubmitting}
        className="group inline-flex w-full items-center justify-center gap-2 bg-volt px-7 py-4 text-sm font-semibold text-ink transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-volt disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting
          ? "Enviando..."
          : hasError
            ? "No pudimos enviar tu solicitud. Inténtalo nuevamente."
            : "Evaluar este proceso"}
        {!isSubmitting && !hasError && (
          <span className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        )}
      </button>

      <p className="text-center font-mono text-[11px] leading-5 text-white/60">
        Al enviar este formulario aceptas ser contactado por Nu Team respecto a
        tu solicitud.
      </p>
    </form>
  );
}
