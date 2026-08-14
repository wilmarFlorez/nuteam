import ContactForm from "./contact_form";

export default function ContactSection() {
  return (
    <section id="contacto" className="bg-black py-24 text-white lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/40">
            Hablemos
          </p>
3502578809
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            Cuéntanos qué proceso quieres automatizar.
          </h2>

          <p className="mt-6 max-w-md leading-7 text-white/45">
            Analizaremos el proceso, su volumen y su impacto para determinar
            si existe una oportunidad real de automatización.
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}