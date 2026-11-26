import Reveal from "./reveal";
import { isEnglish, type Locale } from "@/lib/locale";
import { FileText, Network } from "lucide-react";

const relatedCases = [
  {
    title: "Documentación pendiente",
    description:
      "Evaluar cómo identificar documentos faltantes y dirigir cada solicitud al siguiente responsable.",
    icon: FileText,
  },
  {
    title: "Excepciones por revisar",
    description:
      "Entender cómo se detectan datos fuera de regla y cómo recibe el equipo los casos que requieren criterio.",
    icon: Network,
  },
];

const relatedCasesEn = [
  {
    title: "Missing documentation",
    description:
      "Assess how to identify missing documents and route each request to the next person responsible.",
    icon: FileText,
  },
  {
    title: "Exceptions to review",
    description:
      "Understand how out-of-rule details are detected and how the team receives cases that need judgment.",
    icon: Network,
  },
];

export default function UseCases({ locale }: { locale: Locale }) {
  const english = isEnglish(locale);
  const cases = english ? relatedCasesEn : relatedCases;

  return (
    <section
      id="casos-de-uso"
      className="border-t border-white/10 bg-coal py-24 text-white sm:py-28 lg:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-10">
        <div className="max-w-3xl">
          <Reveal delay={80}>
            <h2 className="text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              {english
                ? "Other processes we could assess"
                : "Otros procesos que podríamos evaluar"}
            </h2>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-3 sm:mt-14 md:grid-cols-2 md:gap-4">
          {cases.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <article className="group h-full rounded-[1.75rem] border border-white/10 bg-ink/70 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-ink lg:p-10">
                <div className="flex items-center">
                  <span className="flex size-12 items-center justify-center rounded-full border border-volt/30 bg-volt/[0.08] text-volt transition-colors group-hover:bg-volt group-hover:text-ink">
                    <item.icon size={20} strokeWidth={1.6} aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.035em] transition-colors group-hover:text-volt sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-lg leading-7 text-white/60 sm:text-[17px] sm:leading-8">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
