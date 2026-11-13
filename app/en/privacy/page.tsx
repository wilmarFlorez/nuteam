import type { Metadata } from "next";
import PrivacyPolicy from "@/components/privacy_policy";

export const metadata: Metadata = {
  title: "Privacy Policy | NuTeam",
  description:
    "Learn how NuTeam processes information submitted through the form, analytics, and chat on www.nuteam.ai.",
  alternates: {
    canonical: "/en/privacy",
    languages: { es: "/privacidad", en: "/en/privacy" },
  },
};

export default function EnglishPrivacyPage() {
  return <PrivacyPolicy locale="en" />;
}
