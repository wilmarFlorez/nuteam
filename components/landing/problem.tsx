import Image from "next/image";
import { FileText, Mail, UserRound } from "lucide-react";
import Reveal from "./reveal";
import { isEnglish, type Locale } from "@/lib/locale";

const spanishProblems = [
  {
    title: "Solicitudes por varios canales",
    description:
      "Los datos llegan por correo, mensajes o formularios y quedan repartidos.",
  },
  {
    title: "Datos faltantes y recaptura manual",
    description:
      "El equipo identifica qué falta y vuelve a ingresar datos en otra plantilla o sistema.",
  },
  {
    title: "Revisión antes de avanzar",
    description:
      "Los casos incompletos o ambiguos requieren criterio del equipo.",
  },
];

const englishProblems = [
  {
    title: "Requests across channels",
    description:
      "Details arrive by email, messages, or forms and remain scattered.",
  },
  {
    title: "Missing details and repeat entry",
    description:
      "The team identifies what is missing and re-enters details in another template or system.",
  },
  {
    title: "Review before moving forward",
    description:
      "Incomplete or ambiguous cases need the team's judgment.",
  },
];

const spanishRequestScenario = {
  inboxLabel: "Correo recibido",
  requestTitle: "Solicitud de transporte",
  requestType: "Carga terrestre",
  dataLabel: "Datos estructurados",
  dataTitle: "Servicio de carga",
  status: "Requiere revisión",
  fields: [
    { label: "Origen", value: "Identificado" },
    { label: "Destino", value: "Identificado" },
    { label: "Fecha de retiro", value: "Recibida" },
    { label: "Peso de la carga", value: "Por confirmar", pending: true },
  ],
  pending: "Falta confirmar el peso de la carga",
  reviewTitle: "Revisión del operador",
  reviewDescription: "Confirmar el peso antes de continuar",
};

const englishRequestScenario = {
  inboxLabel: "Email received",
  requestTitle: "Freight transport request",
  requestType: "Ground freight",
  dataLabel: "Structured details",
  dataTitle: "Freight shipment",
  status: "Needs review",
  fields: [
    { label: "Origin", value: "Identified" },
    { label: "Destination", value: "Identified" },
    { label: "Pickup date", value: "Received" },
    { label: "Shipment weight", value: "To confirm", pending: true },
  ],
  pending: "Shipment weight needs confirmation",
  reviewTitle: "Operator review",
  reviewDescription: "Confirm the weight before moving forward",
};

export default function Problem({ locale }: { locale: Locale }) {
  const english = isEnglish(locale);
  const problems = english ? englishProblems : spanishProblems;
  const scenario = english ? englishRequestScenario : spanishRequestScenario;

  return (
    <section
      id="soluciones"
      className="relative overflow-hidden bg-paper py-24 text-ink sm:py-28 lg:py-40"
    >
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16 lg:px-10">
        <div className="max-w-2xl">
          <Reveal delay={80}>
            <h2 className="text-balance text-4xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-5xl lg:text-[3.75rem]">
              {english
                ? "A freight request often needs work before it is ready for review"
                : "Una solicitud de transporte puede requerir trabajo antes de quedar lista para revisión"}
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-md text-base leading-7 text-muted sm:mt-8 sm:text-lg sm:leading-8">
              {english
                ? "Every operation has its own channels, data, and rules. The starting point is understanding what your team receives and what it needs to check."
                : "Cada operación tiene sus propios canales, datos y reglas. El punto de partida es entender qué recibe tu equipo y qué necesita revisar."}
            </p>
          </Reveal>

          <Reveal delay={220}>
            <ul className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
              {problems.map((problem) => (
                <li
                  key={problem.title}
                  className="grid grid-cols-[1.5rem_minmax(0,1fr)] gap-3 py-4 sm:py-5"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 block h-1 w-6 rounded-full bg-volt"
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-tight tracking-[-0.02em] sm:text-lg">
                      {problem.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-6 text-muted">
                      {problem.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={180}>
          <figure className="relative overflow-visible lg:aspect-[5/4] lg:overflow-hidden lg:rounded-[1.75rem] lg:bg-ink lg:shadow-[0_30px_80px_-48px_rgba(24,24,24,0.5)]">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-ink shadow-[0_30px_80px_-48px_rgba(24,24,24,0.5)] sm:rounded-[1.75rem] lg:absolute lg:inset-0 lg:aspect-auto lg:rounded-none lg:shadow-none">
              <Image
                src="/images/problem-dispatch-desk.webp"
                alt={
                  english
                    ? "Freight coordinator working between a phone, laptop, and printed transport requests."
                    : "Coordinadora de transporte trabajando entre el teléfono, la computadora y solicitudes impresas."
                }
                fill
                sizes="(max-width: 1023px) calc(100vw - 2.5rem), (max-width: 1440px) 50vw, 720px"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/10 to-ink/15 sm:bg-gradient-to-r sm:from-transparent sm:via-ink/10 sm:to-ink/70"
              />
            </div>

            <ol
              aria-label={
                english
                  ? "Transport request received by email, structured with a missing shipment weight flagged for operator review"
                  : "Solicitud de transporte recibida por correo, estructurada con el peso de carga pendiente para revisión del operador"
              }
              className="relative z-10 m-0 -mt-8 list-none p-0 lg:absolute lg:inset-0 lg:mt-0"
            >
              <li className="sr-only xl:not-sr-only xl:absolute xl:right-[7%] xl:top-[8%] xl:z-20 xl:w-[43%] xl:max-w-[18rem]">
                <article className="rounded-2xl border border-white/15 bg-ink/90 p-3.5 text-white shadow-[0_20px_50px_-24px_rgba(0,0,0,0.8)] backdrop-blur-xl xl:p-4">
                  <div className="flex items-center gap-2.5">
                    <span className="flex size-8 items-center justify-center rounded-lg bg-white/10 text-volt">
                      <Mail size={15} strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/55">
                      {scenario.inboxLabel}
                    </span>
                  </div>
                  <h3 className="mt-3 text-sm font-semibold tracking-[-0.02em]">
                    {scenario.requestTitle}
                  </h3>
                  <p className="mt-1 text-xs text-white/60">
                    {scenario.requestType}
                  </p>
                </article>
              </li>

              <li className="relative mx-3 lg:absolute lg:inset-x-3 lg:bottom-3 lg:mx-0 xl:inset-x-auto xl:right-[4%] xl:top-[31%] xl:bottom-auto xl:z-30 xl:w-[53%] xl:max-w-[25rem]">
                <span
                  aria-hidden="true"
                  className="absolute -top-7 right-8 z-0 hidden h-7 w-px bg-volt/65 xl:block"
                />
                <span
                  aria-hidden="true"
                  className="absolute -bottom-8 left-[12%] z-0 hidden h-8 w-px bg-volt/65 xl:block"
                />
                <article className="relative z-10 rounded-2xl bg-paper p-3.5 text-ink shadow-[0_24px_65px_-24px_rgba(0,0,0,0.75)] sm:rounded-[1.35rem] sm:p-4">
                  <header className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="font-mono text-[8px] font-medium uppercase tracking-[0.17em] text-muted sm:text-[9px]">
                        {scenario.dataLabel}
                      </p>
                      <h3 className="mt-1 text-sm font-semibold leading-tight tracking-[-0.025em] sm:text-base">
                        {scenario.dataTitle}
                      </h3>
                    </div>
                    <span className="shrink-0 rounded-full bg-volt/20 px-2.5 py-1 font-mono text-[8px] font-medium uppercase tracking-[0.1em] text-ink sm:text-[9px]">
                      {scenario.status}
                    </span>
                  </header>

                  <dl className="mt-3 grid grid-cols-2 gap-1.5 sm:mt-4 sm:gap-2">
                    {scenario.fields.map((field) => (
                      <div
                        key={field.label}
                        className={`min-w-0 rounded-lg border p-2 ${
                          field.pending
                            ? "border-volt/45 bg-volt/15"
                            : "border-ink/10 bg-white/65"
                        }`}
                      >
                        <dt className="break-words text-[8px] leading-tight uppercase tracking-[0.08em] text-muted sm:text-[9px]">
                          {field.label}
                        </dt>
                        <dd
                          className={`mt-1 truncate text-[10px] font-semibold sm:text-[11px] ${
                            field.pending ? "text-ink" : "text-ink/75"
                          }`}
                        >
                          {field.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-2.5 flex items-center gap-2 border-t border-ink/10 pt-2.5 text-[10px] font-medium text-muted sm:mt-3 sm:pt-3 sm:text-xs">
                    <FileText
                      size={14}
                      strokeWidth={1.7}
                      className="shrink-0 text-ink"
                      aria-hidden="true"
                    />
                    <span>{scenario.pending}</span>
                  </div>

                  <div className="mt-2.5 flex items-center gap-2.5 border-l-2 border-volt bg-white/60 px-2.5 py-2 xl:hidden">
                    <UserRound
                      size={16}
                      strokeWidth={1.7}
                      className="shrink-0 text-ink"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-[10px] font-semibold text-ink">
                        {scenario.reviewTitle}
                      </p>
                      <p className="mt-0.5 text-[9px] leading-tight text-muted">
                        {scenario.reviewDescription}
                      </p>
                    </div>
                  </div>
                </article>
              </li>

              <li className="sr-only xl:not-sr-only xl:absolute xl:bottom-[8%] xl:left-[5%] xl:z-40 xl:w-[47%] xl:max-w-[19rem]">
                <article className="flex items-center gap-3 rounded-2xl border-l-2 border-volt bg-ink/95 p-3.5 text-white shadow-[0_20px_50px_-24px_rgba(0,0,0,0.8)] backdrop-blur-xl xl:p-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-volt">
                    <UserRound
                      size={17}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-xs font-semibold sm:text-sm">
                      {scenario.reviewTitle}
                    </h3>
                    <p className="mt-1 text-[10px] leading-relaxed text-white/65 sm:text-xs">
                      {scenario.reviewDescription}
                    </p>
                  </div>
                </article>
              </li>
            </ol>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
