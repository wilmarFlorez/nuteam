"use client";

import { FormEvent, useRef, useState } from "react";
import { getAttribution, trackEvent } from "@/lib/analytics";
import { isEnglish, type Locale } from "@/lib/locale";

const inputClass =
  "min-h-12 w-full border border-white/35 bg-ink px-4 py-3 text-[15px] text-white outline-none transition-[border-color,background-color,box-shadow] placeholder:text-white/55 focus:border-volt focus:bg-ink focus:ring-2 focus:ring-volt/30";

const labelClass =
  "mb-3 block font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-white/85";

export default function ContactForm({ locale }: { locale: Locale }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasError, setHasError] = useState(false);
  const hasStarted = useRef(false);
  const english = isEnglish(locale);

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
          {english ? "Request received." : "Solicitud recibida."}
        </h3>

        <p className="mx-auto mt-3 max-w-md leading-7 text-white/75">
          {english
            ? "We will review the information you shared and get in touch."
            : "Analizaremos la información que compartiste y nos pondremos en contacto contigo."}
        </p>

        <p className="mt-8 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-white/60">
          {english ? "Status · Under review" : "Status · En análisis"}
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
            {english ? "Name" : "Nombre"}
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            className={inputClass}
            placeholder={english ? "Your name" : "Tu nombre"}
          />
        </div>

        <div>
          <label htmlFor="company" className={labelClass}>
            {english ? "Company" : "Empresa"}
          </label>

          <input
            id="company"
            name="company"
            type="text"
            required
            className={inputClass}
            placeholder={english ? "Company name" : "Nombre de la empresa"}
          />
        </div>
      </div>

      <div className="grid gap-9 sm:grid-cols-2">
        <div>
          <label htmlFor="role" className={labelClass}>
            {english ? "Role" : "Cargo"}
          </label>

          <input
            id="role"
            name="role"
            type="text"
            required
            className={inputClass}
            placeholder={english ? "Your role" : "Tu cargo"}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            {english ? "Work email" : "Email corporativo"}
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
            {english ? "WhatsApp / phone" : "WhatsApp / teléfono"}
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
            {english
              ? "Which process creates the most manual work or delays?"
              : "¿Qué proceso genera más trabajo manual o demoras?"}
        </label>

        <textarea
          id="process"
          name="process"
          required
          rows={5}
          className={`${inputClass} resize-none`}
            placeholder={english
              ? "Describe what happens today, who is involved, how often it happens, and what part is repeated."
              : "Describe qué ocurre hoy, quién participa, con qué frecuencia ocurre y qué parte se repite."}
        />
      </div>

      <div>
        <label htmlFor="volume" className={labelClass}>
            {english
              ? "What approximate volume does this process handle?"
              : "¿Qué volumen maneja aproximadamente este proceso?"}
        </label>

        <div className="relative">
          <select
            id="volume"
            name="volume"
            required
            defaultValue=""
            className={`${inputClass} appearance-none pr-10 invalid:text-white/55`}
          >
            <option value="" disabled className="bg-ink">
              {english ? "Select an option" : "Selecciona una opción"}
            </option>

            <option value="less-10" className="bg-ink">
              {english ? "Less than 10 hours/week" : "Menos de 10 horas/semana"}
            </option>

            <option value="10-30" className="bg-ink">
              {english ? "10–30 hours/week" : "10–30 horas/semana"}
            </option>

            <option value="30-60" className="bg-ink">
              {english ? "30–60 hours/week" : "30–60 horas/semana"}
            </option>

            <option value="more-60" className="bg-ink">
              {english ? "More than 60 hours/week" : "Más de 60 horas/semana"}
            </option>

            <option value="unknown" className="bg-ink">
              {english ? "I do not know" : "No lo sé"}
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
          {english
            ? "What happens when this process is not performed correctly or on time?"
            : "¿Qué ocurre cuando este proceso no se ejecuta correctamente o a tiempo?"}
        </label>

        <textarea
          id="impact"
          name="impact"
          required
          rows={4}
          className={`${inputClass} resize-none`}
          placeholder={english ? "E.g. lost sales, delays, work hours..." : "Ej. pérdida de ventas, retrasos, horas de trabajo..."}
        />
      </div>

      {hasError && (
        <p
          className="border-l-2 border-red-400 bg-red-950/40 px-4 py-3 text-sm leading-6 text-red-100"
          role="alert"
        >
          {english
            ? "We could not send your request. Check your connection and try again."
            : "No pudimos enviar tu solicitud. Revisa tu conexión e inténtalo de nuevo."}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="group inline-flex w-full items-center justify-center gap-2 bg-volt px-7 py-4 text-sm font-semibold text-ink transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-volt disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting
          ? english ? "Sending..." : "Enviando..."
          : hasError
            ? english ? "Try sending again" : "Reintentar envío"
            : english ? "Evaluate this process" : "Evaluar este proceso"}
        {!isSubmitting && (
          <span className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        )}
      </button>

      <p className="text-center font-mono text-[11px] leading-5 text-white/60">
        {english
          ? "By submitting this form, you agree to be contacted by NuTeam regarding your request."
          : "Al enviar este formulario aceptas ser contactado por Nu Team respecto a tu solicitud."}
      </p>
    </form>
  );
}
