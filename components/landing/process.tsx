const steps = [
    {
      number: "01",
      title: "Analizamos tu operación",
      description:
        "Entendemos cómo funciona actualmente el proceso y dónde se concentra el trabajo manual.",
    },
    {
      number: "02",
      title: "Identificamos la oportunidad",
      description:
        "Determinamos qué tareas pueden ser ejecutadas por IA y cuál sería su impacto potencial.",
    },
    {
      number: "03",
      title: "Diseñamos e integramos",
      description:
        "Construimos la solución alrededor de tus procesos y la conectamos con tus sistemas.",
    },
    {
      number: "04",
      title: "Medimos el impacto",
      description:
        "Evaluamos resultados mediante métricas operativas y económicas concretas.",
    },
  ];
  
  export default function Process() {
    return (
      <section id="como-funciona" className="bg-white py-24 text-black lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-black/40">
              Cómo funciona
            </p>
  
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              No empezamos por la tecnología. Empezamos por el problema.
            </h2>
          </div>
  
          <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <article key={step.number}>
                <span className="text-sm text-black/30">{step.number}</span>
  
                <div className="mt-6 h-px w-full bg-black/10" />
  
                <h3 className="mt-8 text-xl font-semibold">{step.title}</h3>
  
                <p className="mt-4 leading-7 text-black/50">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }