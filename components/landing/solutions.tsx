import Reveal from "./reveal";
import { isEnglish, type Locale } from "@/lib/locale";
import { Mail, MessageCircle, Phone, Workflow } from "lucide-react";

const spanishSolutions = [
  {
    title: "Voz",
    icon: Phone,
    description:
      "Agentes capaces de realizar y recibir llamadas para ejecutar procesos y atender solicitudes.",
  },
  {
    title: "WhatsApp",
    icon: MessageCircle,
    description:
      "Automatiza conversaciones y procesos operativos directamente desde el canal que tus clientes ya utilizan.",
  },
  {
    title: "Email",
    icon: Mail,
    description:
      "Procesa mensajes, clasifica solicitudes y ejecuta acciones sin intervención manual en cada paso.",
  },
  {
    title: "Workflows",
    icon: Workflow,
    description:
      "Conecta agentes de IA con las herramientas y sistemas que ya utiliza tu empresa.",
  },
];

export default function Solutions({ locale }: { locale: Locale }) {
  const english = isEnglish(locale);
  const solutions = english
    ? [
        {
          title: "Voice",
          icon: Phone,
          description:
            "Agents able to make and receive calls to run processes and handle requests.",
        },
        {
          title: "WhatsApp",
          icon: MessageCircle,
          description:
            "Automate conversations and operational processes directly in the channel your customers already use.",
        },
        {
          title: "Email",
          icon: Mail,
          description:
            "Process messages, classify requests, and perform actions without manual intervention at every step.",
        },
        {
          title: "Workflows",
          icon: Workflow,
          description:
            "Connect AI agents with the tools and systems your company already uses.",
        },
      ]
    : spanishSolutions;
  return (
    <section id="soluciones" className="bg-ink py-24 text-white lg:py-36">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.48fr)] lg:items-center lg:gap-16">
          <div className="max-w-3xl">
            <Reveal delay={80}>
              <h2 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                {english ? "AI agents that do real work." : "Agentes de IA para ejecutar trabajo real."}
              </h2>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <p className="max-w-sm border-t border-white/15 pt-6 leading-7 text-white/55 lg:max-w-md lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
              {english
                ? "We design solutions around specific processes, not generic technology."
                : "Diseñamos soluciones alrededor de procesos concretos, no alrededor de una tecnología genérica."}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
          {solutions.map((solution) => (
            <Reveal
              key={solution.title}
              className="group relative bg-ink p-8 transition-colors hover:bg-coal lg:p-10"
            >
              <div className="flex items-center gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center border border-volt/35 bg-volt/[0.06] text-volt transition-colors group-hover:border-volt group-hover:bg-volt group-hover:text-ink">
                  <solution.icon size={20} strokeWidth={1.6} aria-hidden="true" />
                </span>
                <h3 className="text-2xl font-semibold tracking-tight lg:text-[1.75rem]">
                  {solution.title}
                </h3>
              </div>

              <p className="mt-4 max-w-md leading-7 text-white/50">
                {solution.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
