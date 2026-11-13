import Link from "next/link";
import type { ReactNode } from "react";
import Footer from "@/components/landing/footer";
import LanguageSetter from "@/components/language_setter";
import type { Locale } from "@/lib/locale";

type PolicySection = {
  title: string;
  paragraphs?: ReactNode[];
  items?: ReactNode[];
};

type PolicyCopy = {
  homeLabel: string;
  languageLabel: string;
  languageHref: string;
  eyebrow: string;
  title: string;
  updated: string;
  introduction: string;
  sections: PolicySection[];
};

const contactEmail = "wflorezsamudio@gmail.com";
const contactPhone = "+57 323 683 5590";
const officialLawUrl =
  "https://www.funcionpublica.gov.co/eva/gestornormativa/norma.php?i=49981";
const linkClass =
  "text-white underline decoration-white/35 underline-offset-4 transition-colors hover:text-volt hover:decoration-volt focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-volt";

const policyCopy: Record<Locale, PolicyCopy> = {
  es: {
    homeLabel: "Volver a NuTeam",
    languageLabel: "English",
    languageHref: "/en/privacy",
    eyebrow: "Legal · NuTeam Landing",
    title: "Política de privacidad",
    updated: "Última actualización: 13 de noviembre de 2026",
    introduction:
      "Esta política explica qué información tratamos cuando visitas www.nuteam.ai, cómo la usamos y cómo puedes ejercer tus derechos.",
    sections: [
      {
        title: "1. Responsable y alcance",
        paragraphs: [
          <>NUTEAM S.A.S., identificada con NIT 902125810-9 y domicilio en CL 14 10 23, Calima, Valle del Cauca, Colombia, es responsable del tratamiento de los datos personales recogidos a través de <a className={linkClass} href="https://www.nuteam.ai/">www.nuteam.ai</a>. Puedes contactar a NUTEAM S.A.S. sobre privacidad en <a className={linkClass} href={`mailto:${contactEmail}`}>{contactEmail}</a> o al <a className={linkClass} href="tel:+573236835590">{contactPhone}</a>.</>,
          "Esta política cubre el formulario para evaluar procesos, la analítica y atribución de visitas, y el chat de IA integrado en la página principal. No cubre las cuentas ni el uso autenticado de la plataforma privada app.nuteam.ai.",
        ],
      },
      {
        title: "2. Datos que tratamos",
        paragraphs: [
          <><strong>Formulario de evaluación.</strong> Podemos recoger nombre, empresa, cargo, correo electrónico, teléfono opcional, descripción del proceso, volumen e impacto. También recibimos datos de origen y atribución de la visita, como la campaña, la página de llegada, el sitio de referencia y la fecha de la visita.</>,
          <><strong>Chat de IA.</strong> Para iniciar una conversación, el widget solicita nombre, correo electrónico y autorización para usar esos datos con el fin de dar seguimiento a la solicitud. También tratamos los mensajes que escribas y el historial necesario para continuar la conversación, generar una respuesta y, cuando corresponda, pasar el caso al equipo de NuTeam. Los mensajes de texto libre pueden incluir datos personales que decidas compartir.</>,
          <><strong>Analítica y tecnologías del navegador.</strong> Usamos Google Analytics 4 y tecnologías como cookies o almacenamiento del navegador para medir el uso de la landing y atribuir visitas a campañas. Estas tecnologías pueden tratar información técnica del navegador o dispositivo, páginas visitadas, interacciones y datos de origen de la visita. Google Ads se utiliza para medir conversiones de campañas mediante información de Analytics.</>,
        ],
      },
      {
        title: "3. Para qué usamos los datos",
        paragraphs: ["Usamos los datos para:"],
        items: [
          "responder a una solicitud y contactar a la persona respecto de esa solicitud;",
          "comprender y evaluar el proceso operativo que se comparte en el formulario o el chat;",
          "operar el chat, generar respuestas mediante inteligencia artificial y permitir que personal autorizado de NuTeam revise y responda una conversación cuando sea necesario; y",
          "medir el uso de la landing y el rendimiento de campañas, y mejorar la experiencia y el funcionamiento del sitio.",
        ],
      },
      {
        title: "4. Proveedores y destinatarios",
        paragraphs: ["Los datos pueden ser tratados por proveedores que ayudan a operar estos servicios:"],
        items: [
          <><strong>Google</strong>, para recibir y guardar formularios y atribución mediante Apps Script y Sheets, enviar notificaciones por correo y realizar analítica y medición de campañas;</>,
          <><strong>Vercel</strong>, para alojar la landing y servir el componente del chat;</>,
          <><strong>Supabase</strong>, para la sesión anónima y el almacenamiento de contactos y conversaciones;</>,
          <><strong>Render</strong>, para alojar la API del chat; y</>,
          <><strong>OpenAI</strong>, para procesar mensajes y generar respuestas de IA.</>,
        ],
      },
      {
        title: "5. Acceso a la información",
        paragraphs: [
          <>El personal autorizado de NUTEAM puede acceder a la información necesaria para atender la solicitud o continuar una conversación. Algunos proveedores pueden tratar datos fuera de Colombia; la base de datos del chat de Supabase está alojada en Estados Unidos.</>,
        ],
      },
      {
        title: "6. Cookies y tecnologías similares",
        paragraphs: [
          "La landing utiliza cookies y tecnologías de almacenamiento del navegador para medir interacciones y atribuir la visita a una campaña. Puedes bloquear o borrar estas tecnologías desde la configuración de tu navegador. Si las desactivas, la medición y la atribución de campañas pueden ser menos precisas.",
        ],
      },
      {
        title: "7. Conservación de los datos",
        paragraphs: [
          "Conservaremos los datos identificables mientras la solicitud o conversación siga activa y por un máximo de 12 meses después de la última interacción significativa. Después de ese plazo, los eliminaremos o anonimizaremos, salvo que una obligación legal o contractual requiera conservarlos por más tiempo. Las métricas podrán conservarse por más tiempo solo cuando estén agregadas y ya no permitan identificar a una persona.",
        ],
      },
      {
        title: "8. Tus derechos y cómo ejercerlos",
        paragraphs: [
          "Puedes solicitar acceso a tus datos personales, su actualización o rectificación, pedir información sobre su uso o la prueba de la autorización cuando corresponda, y solicitar la revocación de la autorización o la supresión de los datos cuando proceda. También puedes presentar una queja ante la Superintendencia de Industria y Comercio (SIC).",
          <>NUTEAM S.A.S. recibe las consultas y reclamos relacionados con datos personales. Para presentarlos, escribe a <a className={linkClass} href={`mailto:${contactEmail}`}>{contactEmail}</a> e indica si se trata de una consulta o un reclamo.</>,
          <>Las consultas se atenderán en un máximo de 10 días hábiles contados desde su recepción. Los reclamos de corrección, actualización o supresión de datos, o por presunto incumplimiento, se atenderán en un máximo de 15 días hábiles contados desde el día siguiente a su recepción. Si no es posible responder dentro del plazo inicial, te informaremos los motivos y la fecha de respuesta; la ampliación no superará 5 días hábiles para consultas ni 8 días hábiles para reclamos, de acuerdo con los artículos 14 y 15 de la <a className={linkClass} href={officialLawUrl}>Ley Estatutaria 1581 de 2012</a>, sin perjuicio de términos menores que resulten aplicables.</>,
        ],
      },
      {
        title: "9. Cambios a esta política",
        paragraphs: [
          "Publicaremos cualquier cambio de esta política en esta página e indicaremos la fecha de su última actualización.",
        ],
      },
    ],
  },
  en: {
    homeLabel: "Back to NuTeam",
    languageLabel: "Español",
    languageHref: "/privacidad",
    eyebrow: "Legal · NuTeam Landing",
    title: "Privacy Policy",
    updated: "Last updated: November 13, 2026",
    introduction:
      "This policy explains what information we process when you visit www.nuteam.ai, how we use it, and how you can exercise your rights.",
    sections: [
      {
        title: "1. Controller and scope",
        paragraphs: [
          <>NUTEAM S.A.S., identified by Colombian Tax Identification Number (NIT) 902125810-9 and located at CL 14 10 23, Calima, Valle del Cauca, Colombia, is the controller of personal data collected through <a className={linkClass} href="https://www.nuteam.ai/">www.nuteam.ai</a>. You may contact NUTEAM S.A.S. about privacy at <a className={linkClass} href={`mailto:${contactEmail}`}>{contactEmail}</a> or at <a className={linkClass} href="tel:+573236835590">{contactPhone}</a>.</>,
          "This policy covers the process-evaluation form, website analytics and visit attribution, and the AI chat embedded on the home page. It does not cover accounts or authenticated use of the private platform at app.nuteam.ai.",
        ],
      },
      {
        title: "2. Information we process",
        paragraphs: [
          <><strong>Evaluation form.</strong> We may collect your name, company, job title, email address, optional phone number, process description, volume, and impact. We also receive visit-source and attribution information, such as campaign, landing page, referring website, and visit time.</>,
          <><strong>AI chat.</strong> To start a conversation, the widget asks for your name and email address and your permission to use those details to follow up on your request. We also process the messages you write and the conversation history needed to continue the conversation, generate a response, and, when appropriate, pass the case to the NuTeam team. Free-text messages may contain personal information you choose to share.</>,
          <><strong>Analytics and browser technologies.</strong> We use Google Analytics 4 and technologies such as cookies or browser storage to measure how the landing page is used and attribute visits to campaigns. These technologies may process technical browser or device information, pages visited, interactions, and visit-source information. Google Ads is used to measure campaign conversions using Analytics information.</>,
        ],
      },
      {
        title: "3. How we use the information",
        paragraphs: ["We use the information to:"],
        items: [
          "respond to a request and contact the person about that request;",
          "understand and evaluate the operational process described in the form or chat;",
          "operate the chat, generate AI responses, and allow authorized NuTeam personnel to review and respond to a conversation when needed; and",
          "measure landing-page use and campaign performance, and improve the site's experience and operation.",
        ],
      },
      {
        title: "4. Providers and recipients",
        paragraphs: ["Service providers that help operate these services may process the information:"],
        items: [
          <><strong>Google</strong>, to receive and store forms and attribution through Apps Script and Sheets, send email notifications, and provide analytics and campaign measurement;</>,
          <><strong>Vercel</strong>, to host the landing page and serve the chat component;</>,
          <><strong>Supabase</strong>, for anonymous sessions and storage of contacts and conversations;</>,
          <><strong>Render</strong>, to host the chat API; and</>,
          <><strong>OpenAI</strong>, to process messages and generate AI responses.</>,
        ],
      },
      {
        title: "5. Access to information",
        paragraphs: [
          "Authorized NUTEAM personnel may access information needed to respond to a request or continue a conversation. Some providers may process data outside Colombia; the Supabase chat database is hosted in the United States.",
        ],
      },
      {
        title: "6. Cookies and similar technologies",
        paragraphs: [
          "The landing page uses cookies and browser-storage technologies to measure interactions and attribute a visit to a campaign. You can block or delete these technologies through your browser settings. Disabling them may make measurement and campaign attribution less accurate.",
        ],
      },
      {
        title: "7. How long we keep information",
        paragraphs: [
          "We keep identifiable information while a request or conversation is active and for no more than 12 months after the last meaningful interaction. After that period, we delete or anonymize it unless a legal or contractual obligation requires longer retention. Metrics may be kept longer only when aggregated so they no longer identify an individual.",
        ],
      },
      {
        title: "8. Your rights and how to exercise them",
        paragraphs: [
          "You may ask to access, update, or correct your personal data; request information about how it is used or proof of authorization where applicable; and request withdrawal of authorization or deletion where allowed. You may also file a complaint with Colombia's Superintendence of Industry and Commerce (SIC).",
          <>NUTEAM S.A.S. receives privacy consultations and claims. To submit one, email <a className={linkClass} href={`mailto:${contactEmail}`}>{contactEmail}</a> and indicate whether it is a consultation or a claim about your personal data.</>,
          <>Consultations will be answered within 10 business days from receipt. Claims (reclamos) seeking correction, updating, or deletion of data, or alleging a breach, will be answered within 15 business days starting the day after receipt. If we cannot respond within the initial period, we will inform you of the reasons and the response date; any extension will not exceed 5 additional business days for consultations or 8 for claims, under Articles 14 and 15 of <a className={linkClass} href={officialLawUrl}>Colombian Statutory Law 1581 of 2012</a>, without prejudice to any shorter applicable period.</>,
        ],
      },
      {
        title: "9. Changes to this policy",
        paragraphs: [
          "We will post any changes to this policy on this page and update the last-updated date.",
        ],
      },
    ],
  },
};

export default function PrivacyPolicy({ locale }: { locale: Locale }) {
  const isEnglish = locale === "en";
  const copy = policyCopy[locale];

  return (
    <>
      {isEnglish && <LanguageSetter />}
      <main className="min-h-screen bg-ink text-white">
        <div className="mx-auto max-w-4xl px-6 pb-24 pt-10 sm:pt-14 lg:px-10">
          <nav
            aria-label={isEnglish ? "Page navigation" : "Navegación de página"}
            className="flex items-center justify-between border-b border-white/10 pb-6 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-white/55"
          >
            <Link
              href={isEnglish ? "/en" : "/"}
              className="transition-colors hover:text-volt focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-volt"
            >
              ← {copy.homeLabel}
            </Link>
            <Link
              href={copy.languageHref}
              lang={isEnglish ? "es" : "en"}
              className="transition-colors hover:text-volt focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-volt"
            >
              {copy.languageLabel}
            </Link>
          </nav>

          <header className="border-b border-white/10 py-12 sm:py-16">
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-volt">
              {copy.eyebrow}
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              {copy.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              {copy.introduction}
            </p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-white/45">
              {copy.updated}
            </p>
          </header>

          <article className="divide-y divide-white/10">
            {copy.sections.map((section) => (
              <section key={section.title} className="space-y-5 py-9 sm:py-11">
                <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  {section.title}
                </h2>
                {section.paragraphs?.map((paragraph, index) => (
                  <p
                    key={`${section.title}-paragraph-${index}`}
                    className="text-[15px] leading-7 text-white/75 sm:text-base sm:leading-8"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.items && (
                  <ul className="list-disc space-y-3 pl-6 text-[15px] leading-7 text-white/75 sm:text-base sm:leading-8">
                    {section.items.map((item, index) => (
                      <li key={`${section.title}-item-${index}`} className="ps-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </article>
        </div>
      </main>
      <Footer locale={locale} />
    </>
  );
}
