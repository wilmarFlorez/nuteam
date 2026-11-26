import PrivacyPolicy from "@/components/privacy_policy";
import {
  createSiteMetadata,
  PRIVACY_LANGUAGE_ALTERNATES,
} from "@/lib/seo_metadata";

export const metadata = createSiteMetadata({
  title: "Política de privacidad | NuTeam",
  description:
    "Conoce cómo NuTeam trata los datos del sitio, el formulario, la analítica, el chat, WhatsApp y la plataforma autenticada.",
  canonical: "/privacidad",
  locale: "es",
  languageAlternates: PRIVACY_LANGUAGE_ALTERNATES,
});

export default function PrivacyPage() {
  return <PrivacyPolicy locale="es" />;
}
