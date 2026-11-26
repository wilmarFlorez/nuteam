import type { Metadata } from "next";

export const SITE_ORIGIN = "https://www.nuteam.ai";

export const HOME_LANGUAGE_ALTERNATES = {
  es: "/",
  en: "/en",
  "x-default": "/",
};

export const PRIVACY_LANGUAGE_ALTERNATES = {
  es: "/privacidad",
  en: "/en/privacy",
  "x-default": "/privacidad",
};

type SiteLocale = "es" | "en";

type CreateSiteMetadataOptions = {
  title: string;
  description: string;
  canonical: string;
  locale: SiteLocale;
  languageAlternates: Record<string, string>;
  socialImageAlt?: string;
};

const openGraphLocales: Record<SiteLocale, string> = {
  es: "es_CO",
  en: "en_US",
};

const socialImage = "/images/hero-freight-terminal.webp";

export function createSiteMetadata({
  title,
  description,
  canonical,
  locale,
  languageAlternates,
  socialImageAlt,
}: CreateSiteMetadataOptions): Metadata {
  const alternateLocale = locale === "es" ? "en" : "es";
  const images = socialImageAlt
    ? [
        {
          url: socialImage,
          width: 1672,
          height: 941,
          alt: socialImageAlt,
        },
      ]
    : undefined;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: languageAlternates,
    },
    openGraph: {
      type: "website",
      siteName: "NuTeam",
      title,
      description,
      url: canonical,
      locale: openGraphLocales[locale],
      alternateLocale: [openGraphLocales[alternateLocale]],
      ...(images ? { images } : {}),
    },
    twitter: {
      card: images ? "summary_large_image" : "summary",
      title,
      description,
      ...(images ? { images: [socialImage] } : {}),
    },
  };
}
