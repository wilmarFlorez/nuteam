import { isEnglish, type Locale } from "@/lib/locale";

const WHATSAPP_NUMBER = "573236835590";

export default function WhatsAppButton({
  locale,
  chatWidgetVisible = false,
}: {
  locale: Locale;
  chatWidgetVisible?: boolean;
}) {
  const english = isEnglish(locale);
  const message = english
    ? "Hello, I'd like to discuss how our team handles freight transport requests."
    : "Hola, quiero conversar sobre cómo gestionamos las solicitudes de transporte de carga.";
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  const label = english
    ? "Message NuTeam on WhatsApp about freight requests"
    : "Escríbenos por WhatsApp sobre solicitudes de transporte";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className={`whatsapp-button ${
        chatWidgetVisible ? "whatsapp-button--above-chat" : ""
      }`}
    >
      <span className="sr-only">{label}</span>
    </a>
  );
}
