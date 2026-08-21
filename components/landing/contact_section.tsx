import ContactForm from "./contact_form";
import Eyebrow from "./eyebrow";
import Reveal from "./reveal";

const outcomes = [
  "Evaluación de viabilidad sobre tu proceso real",
  "Evaluación preliminar del proceso",
  "Un siguiente paso claro, sin compromisos",
];

export default function ContactSection() {
  return (
    <section id="contacto" className="bg-ink py-24 text-white lg:py-36">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-10">
        <div>
          <Reveal>
            <Eyebrow index="06">Hablemos</Eyebrow>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-7 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Cuéntanos qué proceso genera más trabajo manual o demoras.
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-md leading-7 text-white/45">
              Analizaremos el proceso, su volumen y su impacto para determinar
              si existe una oportunidad real de automatización.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <ul className="mt-10 border-t border-white/10">
              {outcomes.map((outcome, index) => (
                <li
                  key={outcome}
                  className="flex items-baseline gap-4 border-b border-white/10 py-4"
                >
                  <span className="font-mono text-xs text-volt">
                    0{index + 1}
                  </span>
                  <span className="text-sm leading-6 text-white/60">
                    {outcome}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex items-center gap-3 font-mono text-[10px] font-medium uppercase tracking-[0.26em] text-white/30">
              <span className="h-2 w-2 bg-volt" aria-hidden />
              Tu operación, el punto de partida
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="relative border border-white/10 bg-coal p-6 sm:p-10">
            <span className="absolute -left-px -top-px h-3 w-3 border-l border-t border-volt" />
            <span className="absolute -right-px -bottom-px h-3 w-3 border-b border-r border-volt" />

            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.26em] text-white/30">
              Análisis de viabilidad
            </p>

            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
