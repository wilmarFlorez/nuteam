import PrivacyPolicy from "@/components/privacy_policy";
import {
  createSiteMetadata,
  PRIVACY_LANGUAGE_ALTERNATES,
} from "@/lib/seo_metadata";

export const metadata = createSiteMetadata({
  title: "Privacy Policy | NuTeam",
  description:
    "Learn how NuTeam handles information from the website, form, analytics, chat, WhatsApp and its authenticated platform.",
  canonical: "/en/privacy",
  locale: "en",
  languageAlternates: PRIVACY_LANGUAGE_ALTERNATES,
});

export default function EnglishPrivacyPage() {
  return <PrivacyPolicy locale="en" />;
}
