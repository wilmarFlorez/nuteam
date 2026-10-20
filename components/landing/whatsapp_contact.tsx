import Image from "next/image";
import TrackedLink from "./tracked_link";
import { isEnglish, type Locale } from "@/lib/locale";

const phoneNumber = "573236835590";

export default function WhatsappContact({ locale }: { locale: Locale }) {
  const english = isEnglish(locale);
  const message = english
    ? "Hi Ana. I would like to discuss an operational process at my company and find out whether it could be automated with AI."
    : "Hola, Ana. Quiero conversar sobre un proceso operativo de mi empresa y saber si podría automatizarse con IA.";
  const href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <TrackedLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      ctaName="hablar_con_ana"
      location="whatsapp_floating_button"
      aria-label={
        english
          ? "Chat with Ana, NuTeam's AI agent, on WhatsApp. A message is ready to send."
          : "Habla con Ana, agente de IA de NuTeam, por WhatsApp. Se abrirá un mensaje listo para enviar."
      }
      className="group fixed bottom-4 right-4 z-40 inline-flex items-center gap-2.5 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-volt sm:bottom-6 sm:right-6"
    >
      <span className="rounded-full bg-paper px-4 py-2.5 text-left text-ink shadow-[0_10px_32px_rgba(0,0,0,0.32)] transition duration-200 group-hover:-translate-y-0.5 group-hover:shadow-[0_14px_36px_rgba(0,0,0,0.4)] sm:px-5">
        <span className="block text-[13px] font-semibold leading-tight tracking-tight sm:text-sm">
          {english ? "Need a hand?" : "¿Necesitas ayuda?"}
        </span>
      </span>

      <span className="relative h-[68px] w-[68px] shrink-0 rounded-full border-2 border-volt bg-[#073d35] shadow-[0_8px_28px_rgba(0,0,0,0.45)] transition-transform duration-200 group-hover:scale-[1.04] sm:h-[76px] sm:w-[76px]">
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <Image
            src="/images/agent.png"
            alt=""
            width={1254}
            height={1254}
            sizes="(min-width: 640px) 76px, 68px"
            className="h-full w-full scale-[1.24] object-cover"
          />
        </span>
        <span className="absolute -bottom-0.5 -right-0.5 flex h-8 w-8 items-center justify-center rounded-full border-[3px] border-ink bg-[#25D366] text-white shadow-md sm:h-[34px] sm:w-[34px]">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-[17px] w-[17px] sm:h-[19px] sm:w-[19px]"
            fill="none"
          >
            <path
              d="M20.4 11.8a8.35 8.35 0 0 1-12.35 7.34L3.6 20.4l1.3-4.32A8.35 8.35 0 1 1 20.4 11.8Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
            />
            <path
              d="M9.1 8.5c.15-.35.3-.36.48-.37h.42c.14 0 .34.05.52.45.18.4.62 1.52.68 1.63.06.12.1.25.02.4-.08.15-.12.24-.24.37-.12.14-.25.3-.36.4-.12.12-.24.25-.1.49.15.24.64 1.06 1.38 1.72.94.84 1.73 1.1 1.98 1.23.25.12.4.1.55-.07.15-.18.63-.73.8-.98.17-.25.34-.2.57-.12.23.08 1.43.67 1.68.8.25.12.42.18.48.28.06.1.06.58-.14 1.14-.2.56-1.16 1.1-1.6 1.17-.42.06-.96.1-1.55-.09-.36-.12-.83-.27-1.43-.53-2.52-1.09-4.17-3.63-4.3-3.8-.13-.17-1.03-1.38-1.03-2.63 0-1.25.65-1.86.88-2.12.23-.25.5-.32.67-.32Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </span>
    </TrackedLink>
  );
}
