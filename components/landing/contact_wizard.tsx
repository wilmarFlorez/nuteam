"use client";

import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import { getAttribution, trackEvent } from "@/lib/analytics";
import { isEnglish, type Locale } from "@/lib/locale";

const inputClass =
  "min-h-12 w-full rounded-xl border border-ink/15 bg-ink/[0.025] px-4 py-3 text-[15px] text-ink outline-none transition-[border-color,background-color,box-shadow] placeholder:text-muted/70 focus:border-volt/80 focus:bg-white/70 focus:ring-2 focus:ring-volt/25";

const labelClass = "mb-2.5 block text-sm font-medium text-ink/85";

const requiredMarker = (
  <span aria-hidden="true" className="ml-1 font-bold text-volt">
    *
  </span>
);

type FormValues = {
  name: string;
  email: string;
  company: string;
  role: string;
  phone: string;
  process: string;
  volume: string;
  impact: string;
};

const initialValues: FormValues = {
  name: "",
  email: "",
  company: "",
  role: "",
  phone: "",
  process: "",
  volume: "",
  impact: "",
};

export default function ContactWizard({ locale }: { locale: Locale }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [values, setValues] = useState(initialValues);
  const hasStarted = useRef(false);
  const hasMovedStep = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);
  const stepHeadingRef = useRef<HTMLHeadingElement>(null);
  const english = isEnglish(locale);

  const stepTitles = english
    ? [
        "How do freight requests arrive and get prepared for review?",
        "How much time does this process take?",
        "What happens when a request is incomplete or delayed?",
        "Who should we contact about this process?",
      ]
    : [
        "¿Cómo llegan y se preparan las solicitudes de transporte para revisión?",
        "¿Cuánto tiempo dedica tu equipo a este proceso?",
        "¿Qué ocurre cuando una solicitud está incompleta o se demora?",
        "¿Con quién podemos conversar sobre este proceso?",
      ];
  const stepDescriptions = english
    ? [
        null,
        "Choose an approximate range, or select “I do not know.”",
        "Tell us what your team does when information is missing or review takes longer.",
        "Share your work contact details so we can review your request.",
      ]
    : [
        null,
        "Elige un rango aproximado o selecciona «No lo sé».",
        "Cuéntanos qué hace tu equipo cuando falta información o la revisión tarda.",
        "Déjanos tus datos de trabajo para revisar tu solicitud.",
      ];
  const totalSteps = stepTitles.length;

  useEffect(() => {
    if (!hasMovedStep.current) {
      hasMovedStep.current = true;
      return;
    }

    stepHeadingRef.current?.focus();
  }, [currentStep]);

  function handleFieldChange(
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = event.currentTarget;
    setValues((current) => ({ ...current, [name]: value }));
  }

  function goToNextStep() {
    if (!formRef.current?.reportValidity()) return;
    setCurrentStep((step) => Math.min(step + 1, totalSteps - 1));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) return;

    const endpoint = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_ENDPOINT;
    if (!endpoint) {
      setHasError(true);
      return;
    }

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
          name: values.name,
          company: values.company,
          role: values.role,
          email: values.email,
          phone: values.phone,
          process: values.process,
          volume: values.volume,
          impact: values.impact,
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
      <div className="flex flex-col items-center justify-center rounded-[1.5rem] border border-ink/10 bg-white/45 px-6 py-16 text-center sm:py-20">
        <span className="flex size-14 items-center justify-center rounded-full border border-volt/40 bg-volt/[0.08] font-mono text-lg text-volt">
          ✓
        </span>
        <h3 className="mt-6 text-2xl font-semibold text-ink">
          {english ? "Request received" : "Solicitud recibida"}
        </h3>
        <p className="mx-auto mt-3 max-w-md leading-7 text-muted">
          {english
            ? "We will review the information you shared and get in touch."
            : "Analizaremos la información que compartiste y nos pondremos en contacto contigo."}
        </p>
        <p className="mt-8 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted">
          {english ? "Status · Under review" : "Estado · En análisis"}
        </p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      onFocusCapture={() => {
        if (hasStarted.current) return;
        hasStarted.current = true;
        trackEvent("form_start", { form_name: "contacto" });
      }}
      className="space-y-7 sm:space-y-8"
    >
      <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-ink/65">
        {english
          ? `Step ${currentStep + 1} of ${totalSteps}`
          : `Paso ${currentStep + 1} de ${totalSteps}`}
      </p>

      <div
        role="progressbar"
        aria-label={english ? "Form progress" : "Progreso del formulario"}
        aria-valuemin={1}
        aria-valuemax={totalSteps}
        aria-valuenow={currentStep + 1}
        aria-valuetext={
          english
            ? `Step ${currentStep + 1} of ${totalSteps}`
            : `Paso ${currentStep + 1} de ${totalSteps}`
        }
        className="grid grid-cols-4 gap-2"
      >
        {stepTitles.map((title, index) => (
          <span
            key={title}
            aria-hidden="true"
            className={`h-1.5 rounded-full transition-colors duration-300 ${
              index <= currentStep ? "bg-volt" : "bg-ink/10"
            }`}
          />
        ))}
      </div>

      <div key={currentStep} className="animate-fade-up">
        <h3
          ref={stepHeadingRef}
          tabIndex={-1}
          className="mt-7 text-balance text-2xl font-semibold leading-tight tracking-[-0.04em] text-ink outline-none sm:text-3xl"
        >
          {stepTitles[currentStep]}
        </h3>
        {stepDescriptions[currentStep] ? (
          <p className="mt-2 text-sm leading-6 text-muted">
            {stepDescriptions[currentStep]}
          </p>
        ) : null}

        <div className="mt-7">
          {currentStep === 0 && (
            <div>
              <label htmlFor="process" className="sr-only">
                {english
                  ? "How do freight requests arrive and get prepared for review?"
                  : "¿Cómo llegan y se preparan las solicitudes de transporte para revisión?"}
                {requiredMarker}
              </label>
              <textarea
                id="process"
                name="process"
                required
                rows={5}
                value={values.process}
                onChange={handleFieldChange}
                className={`${inputClass} resize-y`}
                placeholder={
                  english
                    ? "Describe the steps your team follows, who is involved, and what details they need to check."
                    : "Describe los pasos que sigue tu equipo, quién participa y qué información necesita revisar."
                }
              />
            </div>
          )}

          {currentStep === 1 && (
            <div>
              <label htmlFor="volume" className="sr-only">
                {english
                  ? "About how many hours per week does your team spend on this process?"
                  : "¿Cuántas horas por semana dedica aproximadamente tu equipo a este proceso?"}
                {requiredMarker}
              </label>
              <div className="relative">
                <select
                  id="volume"
                  name="volume"
                  required
                  value={values.volume}
                  onChange={handleFieldChange}
                  className={`${inputClass} appearance-none pr-10 invalid:text-muted`}
                >
                  <option value="" disabled className="bg-paper text-ink">
                    {english ? "Select an option" : "Selecciona una opción"}
                  </option>
                  <option value="less-10" className="bg-paper text-ink">
                    {english ? "Less than 10 hours/week" : "Menos de 10 horas/semana"}
                  </option>
                  <option value="10-30" className="bg-paper text-ink">
                    {english ? "10–30 hours/week" : "10–30 horas/semana"}
                  </option>
                  <option value="30-60" className="bg-paper text-ink">
                    {english ? "30–60 hours/week" : "30–60 horas/semana"}
                  </option>
                  <option value="more-60" className="bg-paper text-ink">
                    {english ? "More than 60 hours/week" : "Más de 60 horas/semana"}
                  </option>
                  <option value="unknown" className="bg-paper text-ink">
                    {english ? "I do not know" : "No lo sé"}
                  </option>
                </select>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 font-mono text-sm text-volt"
                >
                  ▾
                </span>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <label htmlFor="impact" className="sr-only">
                {english
                  ? "What happens when a request is incomplete or takes longer to review?"
                  : "¿Qué ocurre cuando una solicitud está incompleta o tarda en revisarse?"}
                {requiredMarker}
              </label>
              <textarea
                id="impact"
                name="impact"
                required
                rows={4}
                value={values.impact}
                onChange={handleFieldChange}
                className={`${inputClass} resize-y`}
                placeholder={
                  english
                    ? "For example: extra follow-up, a delayed handoff, or another step for the team."
                    : "Por ejemplo: seguimiento adicional, un traspaso tardío u otro paso para el equipo."
                }
              />
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    {english ? "Name" : "Nombre"}
                    {requiredMarker}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={values.name}
                    onChange={handleFieldChange}
                    className={inputClass}
                    placeholder={english ? "Your name" : "Tu nombre"}
                  />
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    {english ? "Work email" : "Email corporativo"}
                    {requiredMarker}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={values.email}
                    onChange={handleFieldChange}
                    className={inputClass}
                    placeholder="nombre@empresa.com"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="company" className={labelClass}>
                    {english ? "Company" : "Empresa"}
                    {requiredMarker}
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    autoComplete="organization"
                    value={values.company}
                    onChange={handleFieldChange}
                    className={inputClass}
                    placeholder={english ? "Company name" : "Nombre de la empresa"}
                  />
                </div>

                <div>
                  <label htmlFor="role" className={labelClass}>
                    {english ? "Role" : "Cargo"}
                    {requiredMarker}
                  </label>
                  <input
                    id="role"
                    name="role"
                    type="text"
                    required
                    autoComplete="organization-title"
                    value={values.role}
                    onChange={handleFieldChange}
                    className={inputClass}
                    placeholder={english ? "Your role" : "Tu cargo"}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className={labelClass}>
                  {english
                    ? "WhatsApp / phone (optional)"
                    : "WhatsApp / teléfono (opcional)"}
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={values.phone}
                  onChange={handleFieldChange}
                  className={inputClass}
                  placeholder="+57 300 000 0000"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {hasError && (
        <p
          className="rounded-xl border border-red-400/30 bg-red-950/30 px-4 py-3 text-sm leading-6 text-red-100"
          role="alert"
        >
          {english
            ? "We could not send your request. Check your connection and try again."
            : "No pudimos enviar tu solicitud. Revisa tu conexión e inténtalo de nuevo."}
        </p>
      )}

      <div
        className={`grid gap-3 ${
          currentStep === 0 ? "grid-cols-1" : "grid-cols-[auto_minmax(0,1fr)]"
        }`}
      >
        {currentStep > 0 && (
          <button
            type="button"
            onClick={() => setCurrentStep((step) => Math.max(step - 1, 0))}
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-ink/15 px-6 py-3.5 text-sm font-medium text-ink/75 transition-colors hover:border-ink/30 hover:bg-ink/[0.04] hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-volt"
          >
            {english ? "Back" : "Volver"}
          </button>
        )}

        {currentStep < totalSteps - 1 ? (
          <button
            type="button"
            onClick={goToNextStep}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-volt px-7 py-3.5 text-sm font-semibold text-ink transition-transform duration-200 hover:scale-[1.01] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-volt"
          >
            {english ? "Continue" : "Continuar"}
          </button>
        ) : (
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-volt px-7 py-3.5 text-sm font-semibold text-ink transition-transform duration-200 hover:scale-[1.01] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-volt disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting
              ? english
                ? "Sending..."
                : "Enviando..."
              : hasError
                ? english
                  ? "Try sending again"
                  : "Reintentar envío"
                : english
                  ? "Evaluate this process"
                  : "Evaluar este proceso"}
          </button>
        )}
      </div>

      {currentStep === totalSteps - 1 && (
        <>
          <p className="text-center text-sm leading-6 text-muted">
            {english ? (
              <>
                Fields marked with{" "}
                <span className="font-bold text-volt">*</span> are required.
                WhatsApp / phone is optional.
              </>
            ) : (
              <>
                Los campos marcados con{" "}
                <span className="font-bold text-volt">*</span> son obligatorios.
                WhatsApp / teléfono es opcional.
              </>
            )}
          </p>
          <p className="text-center text-xs leading-5 text-muted sm:text-[13px]">
            {english
              ? "By submitting this form, you agree that NuTeam may contact you about your request. "
              : "Al enviar este formulario, aceptas que NuTeam te contacte respecto a tu solicitud. "}
            <Link
              href={english ? "/en/privacy" : "/privacidad"}
              className="text-ink/80 underline decoration-ink/25 underline-offset-4 transition-colors hover:text-ink hover:decoration-volt focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-volt"
            >
              {english
                ? "Read our privacy policy."
                : "Consulta la política de privacidad."}
            </Link>
          </p>
        </>
      )}
    </form>
  );
}
