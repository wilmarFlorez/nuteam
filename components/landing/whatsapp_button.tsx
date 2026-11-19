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
    ? "Hello, I'd like to learn how NuTeam can help me organize our processes."
    : "Hola, quiero conocer cómo NuTeam puede ayudarme a organizar mis procesos.";
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  const label = english ? "Message NuTeam on WhatsApp" : "Escríbenos por WhatsApp a NuTeam";

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
