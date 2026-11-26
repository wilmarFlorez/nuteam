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
      className="border-t border-white/10 bg-coal py-24 text-white lg:py-36"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="max-w-3xl">
          <Reveal delay={80}>
            <h2 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              {english
                ? "Other processes we could assess"
                : "Otros procesos que podríamos evaluar"}
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-3 md:grid-cols-2">
          {cases.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <article className="group h-full border border-white/10 bg-ink p-7 transition-colors duration-300 hover:border-volt/40 hover:bg-white/[0.03] lg:p-9">
                <div className="flex items-center">
                  <span className="flex size-11 items-center justify-center border border-volt/30 bg-volt/[0.05] text-volt transition-colors group-hover:bg-volt group-hover:text-ink">
                    <item.icon size={20} strokeWidth={1.6} aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-semibold tracking-tight transition-colors group-hover:text-volt">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-lg leading-7 text-white/55">
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
