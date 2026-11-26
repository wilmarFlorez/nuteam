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
    <section className="relative overflow-hidden bg-paper py-24 text-ink lg:py-36">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-6 lg:grid-cols-12 lg:gap-10 lg:px-10">
        <div className="lg:col-span-5">
          <Reveal delay={80}>
            <h2 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-[3.4rem] lg:leading-[1.02]">
              {english
                ? "A freight request often needs work before it is ready for review"
                : "Una solicitud de transporte puede requerir trabajo antes de quedar lista para revisión"}
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-md text-lg leading-8 text-muted">
              {english
                ? "This is an example of a workflow to assess, not a claim that every logistics operation works the same way. The useful starting point is understanding what your team receives and what it needs to check."
                : "Este es un ejemplo de flujo para evaluar, no una afirmación de que todas las operaciones logísticas funcionen igual. El punto de partida es entender qué recibe tu equipo y qué necesita revisar."}
            </p>
          </Reveal>

        </div>

        <div className="lg:col-span-7">
          <Reveal delay={120}>
            <div className="border-t border-ink/15">
              {problems.map((problem) => (
                <article
                  key={problem.title}
                  className="group relative grid gap-2 border-b border-ink/15 py-7 pl-6 transition-colors hover:bg-ink/[0.02] md:grid-cols-[230px_1fr] md:items-baseline md:gap-6 md:py-8"
                >
                  <span
                    className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-volt transition-transform duration-300 group-hover:scale-y-100"
                    aria-hidden
                  />

                  <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                    {problem.title}
                  </h3>

                  <p className="leading-7 text-muted">{problem.description}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
