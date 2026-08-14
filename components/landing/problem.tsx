const problems = [
    {
      number: "01",
      title: "Tareas repetitivas",
      description:
        "Procesos que consumen horas de tu equipo cada semana y requieren poca intervención humana.",
    },
    {
      number: "02",
      title: "Alto volumen",
      description:
        "Miles de llamadas, mensajes, correos o solicitudes que necesitan ser atendidos.",
    },
    {
      number: "03",
      title: "Procesos manuales",
      description:
        "Información que todavía se copia, revisa y transfiere entre diferentes herramientas.",
    },
    {
      number: "04",
      title: "Operaciones fragmentadas",
      description:
        "Equipos trabajando entre WhatsApp, correo, Excel, CRM y múltiples sistemas.",
    },
  ];
  
  export default function Problem() {
    return (
      <section className="bg-white py-24 text-black lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-black/40">
              El problema
            </p>
  
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              Tu equipo no debería dedicar horas a tareas que una IA puede ejecutar.
            </h2>
          </div>
  
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 md:grid-cols-2">
            {problems.map((problem) => (
              <article key={problem.number} className="bg-white p-8 lg:p-10">
                <span className="text-sm text-black/30">{problem.number}</span>
  
                <h3 className="mt-12 text-2xl font-semibold">
                  {problem.title}
                </h3>
  
                <p className="mt-4 max-w-md leading-7 text-black/55">
                  {problem.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }