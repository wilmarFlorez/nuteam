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
    eyebrow: "Legal · NuTeam",
    title: "Política de privacidad",
    updated: "Última actualización: 18 de noviembre de 2026",
    introduction:
      "Esta política explica qué información tratamos cuando visitas www.nuteam.ai, usas la plataforma autenticada de NuTeam o te comunicas por WhatsApp con NuTeam, cómo la usamos y cómo puedes ejercer tus derechos.",
    sections: [
      {
        title: "1. Responsable y alcance",
        paragraphs: [
          <>NUTEAM S.A.S., identificada con NIT 902125810-9 y domicilio en CL 14 10 23, Calima, Valle del Cauca, Colombia, es responsable del tratamiento de los datos personales recogidos a través de <a className={linkClass} href="https://www.nuteam.ai/">www.nuteam.ai</a>, la plataforma autenticada de NuTeam y las conversaciones de WhatsApp atendidas por NuTeam. Puedes contactar a NUTEAM S.A.S. sobre privacidad en <a className={linkClass} href={`mailto:${contactEmail}`}>{contactEmail}</a> o al <a className={linkClass} href="tel:+573236835590">{contactPhone}</a>.</>,
          "Esta política cubre el formulario para evaluar procesos, la analítica y atribución de visitas, el chat de IA de la página principal, las cuentas y el uso autenticado de app.nuteam.ai, y la atención de solicitudes por WhatsApp mediante WhatsApp Cloud API.",
        ],
      },
      {
        title: "2. Datos que tratamos",
        paragraphs: [
          <><strong>Formulario de evaluación.</strong> Podemos recoger nombre, empresa, cargo, correo electrónico, teléfono opcional, descripción del proceso, volumen e impacto. También recibimos datos de origen y atribución de la visita, como la campaña, la página de llegada, el sitio de referencia y la fecha de la visita.</>,
          <><strong>Chat de IA.</strong> Para iniciar una conversación, el widget solicita nombre, correo electrónico y autorización para usar esos datos con el fin de dar seguimiento a la solicitud. También tratamos los mensajes que escribas y el historial necesario para continuar la conversación, generar una respuesta y, cuando corresponda, pasar el caso al equipo de NuTeam. Los mensajes de texto libre pueden incluir datos personales que decidas compartir.</>,
          <><strong>Plataforma autenticada.</strong> Tratamos los datos necesarios para crear y usar una cuenta, así como la información que ingreses o generes al usar las funciones de la plataforma, incluidos registros de actividad y contenidos de solicitudes o conversaciones, cuando corresponda.</>,
          <><strong>WhatsApp.</strong> Cuando nos escribes por WhatsApp, tratamos el número asociado a la cuenta, la información de perfil que el canal nos facilite, el contenido de tus mensajes y los datos relacionados con la recepción y atención de la conversación. Los mensajes pueden incluir datos personales que decidas compartir.</>,
          <><strong>Analítica y tecnologías del navegador.</strong> Usamos Google Analytics 4 y tecnologías como cookies o almacenamiento del navegador para medir el uso de la landing y atribuir visitas a campañas. Estas tecnologías pueden tratar información técnica del navegador o dispositivo, páginas visitadas, interacciones y datos de origen de la visita. Google Ads se utiliza para medir conversiones de campañas mediante información de Analytics.</>,
        ],
      },
      {
        title: "3. Para qué usamos los datos",
        paragraphs: ["Usamos los datos para:"],
        items: [
          "responder a una solicitud y contactar a la persona respecto de esa solicitud;",
          "comprender y evaluar el proceso operativo que se comparte en el formulario o el chat;",
          "operar el chat de IA de la página principal, generar respuestas y permitir que personal autorizado revise o responda una conversación cuando sea necesario;",
          "atender solicitudes que la persona inicia por WhatsApp, clasificarlas o derivarlas al equipo correspondiente y, cuando corresponda, generar respuestas con IA; personal autorizado de NuTeam puede revisar o responder esas conversaciones;",
          "operar la plataforma autenticada y gestionar las cuentas y solicitudes recibidas a través de ella; y",
          "medir el uso de la landing y el rendimiento de campañas, y mejorar la experiencia y el funcionamiento del sitio.",
        ],
      },
      {
        title: "4. Uso de WhatsApp",
        paragraphs: [
          "NuTeam usa WhatsApp para responder solicitudes iniciadas por las personas. En este canal no enviamos campañas, mensajes mediante plantillas ni seguimientos proactivos. Si quieres que dejemos de comunicarnos contigo por WhatsApp, indícalo en la misma conversación; también puedes escribir a nuestro correo de privacidad. Atenderemos la solicitud y no enviaremos nuevos mensajes por ese canal, salvo los necesarios para cerrar la atención o cumplir obligaciones aplicables.",
        ],
      },
      {
        title: "5. Proveedores y destinatarios",
        paragraphs: ["Los datos pueden ser tratados por proveedores que ayudan a operar estos servicios:"],
        items: [
          <><strong>Google</strong>, para recibir y guardar formularios y atribución mediante Apps Script y Sheets, enviar notificaciones por correo y realizar analítica y medición de campañas;</>,
          <><strong>Vercel</strong>, para alojar la landing y servir el componente del chat;</>,
          <><strong>Supabase</strong>, para la sesión anónima y el almacenamiento de contactos y conversaciones;</>,
          <><strong>Render</strong>, para alojar la API del chat;</>,
          <><strong>OpenAI</strong>, para procesar mensajes y generar respuestas de IA; y</>,
          <><strong>Meta</strong>, mediante WhatsApp Cloud API, para transmitir y gestionar los mensajes enviados o recibidos por WhatsApp.</>,
        ],
      },
      {
        title: "6. Acceso y tratamiento fuera de Colombia",
        paragraphs: [
          <>El personal autorizado de NUTEAM puede acceder a la información necesaria para atender una solicitud, operar la plataforma o revisar y responder una conversación. Algunos proveedores, incluido Meta al prestar WhatsApp Cloud API, pueden tratar datos fuera de Colombia conforme a sus condiciones y políticas. La base de datos del chat de Supabase está alojada en Estados Unidos.</>,
        ],
      },
      {
        title: "7. Cookies y tecnologías similares",
        paragraphs: [
          "La landing utiliza cookies y tecnologías de almacenamiento del navegador para medir interacciones y atribuir la visita a una campaña. Puedes bloquear o borrar estas tecnologías desde la configuración de tu navegador. Si las desactivas, la medición y la atribución de campañas pueden ser menos precisas.",
        ],
      },
      {
        title: "8. Conservación y supresión de los datos",
        paragraphs: [
          "Conservaremos los datos identificables asociados a solicitudes y conversaciones —incluidas las de WhatsApp— mientras sigan activas y, como máximo, durante 12 meses después de la última interacción significativa. Los datos de cuenta y uso de la plataforma autenticada se conservarán durante el tiempo necesario para prestar y administrar el servicio y cumplir las obligaciones aplicables. Después de los plazos que correspondan, eliminaremos o anonimizaremos los datos bajo nuestro control, salvo que una obligación legal o contractual requiera conservarlos por más tiempo. Si solicitas la supresión, NuTeam atenderá la solicitud conforme a la ley y eliminará o anonimizará los datos en los sistemas bajo su control cuando proceda. Los plazos de conservación y eliminación de Meta/WhatsApp y de otros proveedores se rigen por sus propias condiciones y políticas; NuTeam no controla ni puede garantizar la eliminación de datos que permanezcan en sistemas de terceros. Las métricas podrán conservarse por más tiempo solo cuando estén agregadas y ya no permitan identificar a una persona.",
        ],
      },
      {
        title: "9. Tus derechos y cómo ejercerlos",
        paragraphs: [
          "Puedes solicitar acceso a tus datos personales, su actualización o rectificación, pedir información sobre su uso o la prueba de la autorización cuando corresponda, y solicitar la revocación de la autorización o la supresión de los datos cuando proceda. También puedes presentar una queja ante la Superintendencia de Industria y Comercio (SIC).",
          <>NUTEAM S.A.S. recibe las consultas y reclamos relacionados con datos personales. Para presentarlos, escribe a <a className={linkClass} href={`mailto:${contactEmail}`}>{contactEmail}</a> e indica si se trata de una consulta o un reclamo. Si la información corresponde a una conversación atendida por NuTeam en WhatsApp, también puedes solicitarlo en esa misma conversación.</>,
          <>Las consultas se atenderán en un máximo de 10 días hábiles contados desde su recepción. Los reclamos de corrección, actualización o supresión de datos, o por presunto incumplimiento, se atenderán en un máximo de 15 días hábiles contados desde el día siguiente a su recepción. Si no es posible responder dentro del plazo inicial, te informaremos los motivos y la fecha de respuesta; la ampliación no superará 5 días hábiles para consultas ni 8 días hábiles para reclamos, de acuerdo con los artículos 14 y 15 de la <a className={linkClass} href={officialLawUrl}>Ley Estatutaria 1581 de 2012</a>, sin perjuicio de términos menores que resulten aplicables.</>,
        ],
      },
      {
        title: "10. Cambios a esta política",
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
    eyebrow: "Legal · NuTeam",
    title: "Privacy Policy",
    updated: "Last updated: November 18, 2026",
    introduction:
      "This policy explains what information we process when you visit www.nuteam.ai, use NuTeam's authenticated platform, or communicate with NuTeam through WhatsApp, how we use it, and how you can exercise your rights.",
    sections: [
      {
        title: "1. Controller and scope",
        paragraphs: [
          <>NUTEAM S.A.S., identified by Colombian Tax Identification Number (NIT) 902125810-9 and located at CL 14 10 23, Calima, Valle del Cauca, Colombia, is the controller of personal data collected through <a className={linkClass} href="https://www.nuteam.ai/">www.nuteam.ai</a>, the authenticated platform operated by NuTeam, and WhatsApp conversations handled by NuTeam. You may contact NUTEAM S.A.S. about privacy at <a className={linkClass} href={`mailto:${contactEmail}`}>{contactEmail}</a> or at <a className={linkClass} href="tel:+573236835590">{contactPhone}</a>.</>,
          "This policy covers the process-evaluation form, website analytics and visit attribution, the AI chat on the home page, accounts and authenticated use of app.nuteam.ai, and requests handled through WhatsApp using WhatsApp Cloud API.",
        ],
      },
      {
        title: "2. Information we process",
        paragraphs: [
          <><strong>Evaluation form.</strong> We may collect your name, company, job title, email address, optional phone number, process description, volume, and impact. We also receive visit-source and attribution information, such as campaign, landing page, referring website, and visit time.</>,
          <><strong>AI chat.</strong> To start a conversation, the widget asks for your name and email address and your permission to use those details to follow up on your request. We also process the messages you write and the conversation history needed to continue the conversation, generate a response, and, when appropriate, pass the case to the NuTeam team. Free-text messages may contain personal information you choose to share.</>,
          <><strong>Authenticated platform.</strong> We process the information needed to create and use an account, as well as information you enter or generate while using platform features, including activity records and the contents of requests or conversations, where applicable.</>,
          <><strong>WhatsApp.</strong> When you contact us through WhatsApp, we process the number associated with your account, profile information made available to us by the channel, the contents of your messages, and information related to receiving and handling the conversation. Messages may contain personal information you choose to share.</>,
          <><strong>Analytics and browser technologies.</strong> We use Google Analytics 4 and technologies such as cookies or browser storage to measure how the landing page is used and attribute visits to campaigns. These technologies may process technical browser or device information, pages visited, interactions, and visit-source information. Google Ads is used to measure campaign conversions using Analytics information.</>,
        ],
      },
      {
        title: "3. How we use the information",
        paragraphs: ["We use the information to:"],
        items: [
          "respond to a request and contact the person about that request;",
          "understand and evaluate the operational process described in the form or chat;",
          "operate the AI chat on the home page, generate responses, and allow authorized personnel to review or respond to a conversation when needed;",
          "respond to requests initiated by a person through WhatsApp, classify or route them to the appropriate team, and, where applicable, generate AI responses; authorized NuTeam personnel may review or respond to these conversations;",
          "operate the authenticated platform and manage accounts and requests received through it; and",
          "measure landing-page use and campaign performance, and improve the site's experience and operation.",
        ],
      },
      {
        title: "4. WhatsApp use",
        paragraphs: [
          "NuTeam uses WhatsApp to respond to requests initiated by people. We do not send campaigns, template messages, or proactive follow-ups through this channel. If you want us to stop communicating with you through WhatsApp, tell us in the same conversation; you may also email our privacy contact. We will honor the request and will not send further messages through that channel, except those needed to close the matter or meet applicable obligations.",
        ],
      },
      {
        title: "5. Providers and recipients",
        paragraphs: ["Service providers that help operate these services may process the information:"],
        items: [
          <><strong>Google</strong>, to receive and store forms and attribution through Apps Script and Sheets, send email notifications, and provide analytics and campaign measurement;</>,
          <><strong>Vercel</strong>, to host the landing page and serve the chat component;</>,
          <><strong>Supabase</strong>, for anonymous sessions and storage of contacts and conversations;</>,
          <><strong>Render</strong>, to host the chat API;</>,
          <><strong>OpenAI</strong>, to process messages and generate AI responses; and</>,
          <><strong>Meta</strong>, through WhatsApp Cloud API, to transmit and handle messages sent or received through WhatsApp.</>,
        ],
      },
      {
        title: "6. Access and processing outside Colombia",
        paragraphs: [
          "Authorized NUTEAM personnel may access information needed to respond to a request, operate the platform, or review and respond to a conversation. Some providers, including Meta when providing WhatsApp Cloud API, may process data outside Colombia under their own terms and policies. The Supabase chat database is hosted in the United States.",
        ],
      },
      {
        title: "7. Cookies and similar technologies",
        paragraphs: [
          "The landing page uses cookies and browser-storage technologies to measure interactions and attribute a visit to a campaign. You can block or delete these technologies through your browser settings. Disabling them may make measurement and campaign attribution less accurate.",
        ],
      },
      {
        title: "8. Retention and deletion",
        paragraphs: [
          "We keep identifiable information associated with requests and conversations—including WhatsApp conversations—while they remain active and for no more than 12 months after the last meaningful interaction. Account and authenticated-platform usage data is kept for as long as needed to provide and administer the service and meet applicable obligations. After the applicable periods, we delete or anonymize information under our control unless a legal or contractual obligation requires longer retention. If you request deletion, NuTeam will handle the request as required by law and delete or anonymize information in systems under its control where applicable. Meta/WhatsApp and other providers apply their own retention and deletion terms and policies; NuTeam does not control or guarantee deletion of information that remains in third-party systems. Metrics may be kept longer only when aggregated so they no longer identify an individual.",
        ],
      },
      {
        title: "9. Your rights and how to exercise them",
        paragraphs: [
          "You may ask to access, update, or correct your personal data; request information about how it is used or proof of authorization where applicable; and request withdrawal of authorization or deletion where allowed. You may also file a complaint with Colombia's Superintendence of Industry and Commerce (SIC).",
          <>NUTEAM S.A.S. receives privacy consultations and claims. To submit one, email <a className={linkClass} href={`mailto:${contactEmail}`}>{contactEmail}</a> and indicate whether it is a consultation or a claim about your personal data. If the information relates to a conversation handled by NuTeam on WhatsApp, you may also make the request in that conversation.</>,
          <>Consultations will be answered within 10 business days from receipt. Claims (reclamos) seeking correction, updating, or deletion of data, or alleging a breach, will be answered within 15 business days starting the day after receipt. If we cannot respond within the initial period, we will inform you of the reasons and the response date; any extension will not exceed 5 additional business days for consultations or 8 for claims, under Articles 14 and 15 of <a className={linkClass} href={officialLawUrl}>Colombian Statutory Law 1581 of 2012</a>, without prejudice to any shorter applicable period.</>,
        ],
      },
      {
        title: "10. Changes to this policy",
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
              {copy.homeLabel}
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
