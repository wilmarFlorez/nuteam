export default function CTA() {
    return (
      <section className="bg-white px-6 py-24 text-black lg:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-black/40">
            Empieza por tu operación
          </p>
  
          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-7xl">
            Descubre qué procesos
            <br />
            puedes automatizar.
          </h2>
  
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/50">
            Cuéntanos cómo funciona actualmente una operación de tu empresa y
            evaluaremos si existe una oportunidad real de automatización.
          </p>
  
          <a
            href="#contacto"
            className="mt-10 inline-flex rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition hover:bg-black/80"
          >
            Analizar mi operación
          </a>
        </div>
      </section>
    );
  }