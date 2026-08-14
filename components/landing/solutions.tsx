const solutions = [
    {
      title: "Voz",
      description:
        "Agentes capaces de realizar y recibir llamadas para ejecutar procesos y atender solicitudes.",
      label: "01",
    },
    {
      title: "WhatsApp",
      description:
        "Automatiza conversaciones y procesos operativos directamente desde el canal que tus clientes ya utilizan.",
      label: "02",
    },
    {
      title: "Email",
      description:
        "Procesa mensajes, clasifica solicitudes y ejecuta acciones sin intervención manual en cada paso.",
      label: "03",
    },
    {
      title: "Workflows",
      description:
        "Conecta agentes de IA con las herramientas y sistemas que ya utiliza tu empresa.",
      label: "04",
    },
  ];
  
  export default function Solutions() {
    return (
      <section id="soluciones" className="bg-black py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/40">
              Soluciones
            </p>
  
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              Agentes de IA para ejecutar trabajo real.
            </h2>
  
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/50">
              Diseñamos soluciones alrededor de procesos concretos, no alrededor
              de una tecnología genérica.
            </p>
          </div>
  
          <div className="mt-16 grid gap-4 md:grid-cols-2">
            {solutions.map((solution) => (
              <article
                key={solution.label}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/20 hover:bg-white/[0.05] lg:p-10"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                    <span className="text-sm text-white/70">
                      {solution.label}
                    </span>
                  </div>
  
                  <span className="text-2xl text-white/20 transition group-hover:text-white/50">
                    ↗
                  </span>
                </div>
  
                <h3 className="mt-16 text-2xl font-semibold">
                  {solution.title}
                </h3>
  
                <p className="mt-4 max-w-md leading-7 text-white/50">
                  {solution.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }