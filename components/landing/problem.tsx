import Reveal from "./reveal";
import { isEnglish, type Locale } from "@/lib/locale";

const spanishProblems = [
  {
    title: "Solicitudes por varios canales",
    description:
      "Los datos del servicio pueden llegar por correo, mensajes o formularios y quedar repartidos entre conversaciones.",
  },
  {
    title: "Información que falta",
    description:
      "Antes de continuar, alguien debe identificar qué dato falta o qué parte necesita confirmación.",
  },
  {
    title: "Datos que se vuelven a escribir",
    description:
      "Un operador puede tener que copiar la información recibida a otra plantilla o sistema.",
  },
  {
    title: "Revisión antes de avanzar",
    description:
      "Los casos incompletos o ambiguos requieren criterio del equipo antes de pasar al siguiente paso.",
  },
];

export default function Problem({ locale }: { locale: Locale }) {
  const english = isEnglish(locale);
  const problems = english
    ? [
        { title: "Requests across channels", description: "Service details may arrive by email, message, or form and remain scattered across conversations." },
        { title: "Missing information", description: "Before moving forward, someone has to identify what is missing or needs confirmation." },
        { title: "Details entered more than once", description: "An operator may need to copy received information into another template or system." },
        { title: "Review before the next step", description: "Incomplete or ambiguous requests need a team member's judgment before they can move forward." },
      ]
    : spanishProblems;
  return (
    <section className="relative overflow-hidden bg-paper py-24 text-ink sm:py-28 lg:py-40">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-10">
        <div className="lg:col-span-5">
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
                ? "This is an example of a workflow to assess, not a claim that every logistics operation works the same way. The useful starting point is understanding what your team receives and what it needs to check."
                : "Este es un ejemplo de flujo para evaluar, no una afirmación de que todas las operaciones logísticas funcionen igual. El punto de partida es entender qué recibe tu equipo y qué necesita revisar."}
            </p>
          </Reveal>

        </div>

        <div className="lg:col-span-7">
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {problems.map((problem, index) => (
              <Reveal key={problem.title} delay={index * 60}>
                <article className="group h-full rounded-[1.5rem] border border-ink/10 bg-white/[0.42] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/70 hover:shadow-[0_24px_50px_-42px_rgba(24,24,24,0.4)] sm:p-7">
                  <span
                    aria-hidden="true"
                    className="mb-8 block h-1 w-9 rounded-full bg-volt transition-all duration-300 group-hover:w-14"
                  />
                  <h3 className="text-xl font-semibold leading-tight tracking-[-0.025em] sm:text-2xl">
                    {problem.title}
                  </h3>
                  <p className="mt-3 leading-7 text-muted">{problem.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
