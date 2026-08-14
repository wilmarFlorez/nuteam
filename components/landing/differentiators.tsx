const differentiators = [
    {
      title: "Diseñado para tu operación",
      description:
        "La solución se adapta a tus procesos, reglas y necesidades específicas.",
    },
    {
      title: "Integrado con tus sistemas",
      description:
        "La IA trabaja con las herramientas que tu equipo ya utiliza.",
    },
    {
      title: "Impacto medible",
      description:
        "Cada implementación debe tener una métrica operativa o económica que permita evaluar el resultado.",
    },
  ];
  
  export default function Differentiators() {
    return (
      <section className="bg-black py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/40">
                Por qué Nu Team
              </p>
  
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
                No vendemos IA.
                <br />
                Automatizamos operaciones.
              </h2>
            </div>
  
            <div className="divide-y divide-white/10 border-y border-white/10">
              {differentiators.map((item, index) => (
                <article
                  key={item.title}
                  className="grid gap-6 py-8 md:grid-cols-[80px_1fr]"
                >
                  <span className="text-sm text-white/25">
                    0{index + 1}
                  </span>
  
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
  
                    <p className="mt-3 max-w-xl leading-7 text-white/45">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }