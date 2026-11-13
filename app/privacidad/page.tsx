import type { Metadata } from "next";
import PrivacyPolicy from "@/components/privacy_policy";

export const metadata: Metadata = {
  title: "Política de privacidad | NuTeam",
  description:
    "Conoce cómo NuTeam trata la información enviada mediante el formulario, la analítica y el chat de www.nuteam.ai.",
  alternates: {
    canonical: "/privacidad",
    languages: { es: "/privacidad", en: "/en/privacy" },
  },
};

export default function PrivacyPage() {
  return <PrivacyPolicy locale="es" />;
}
