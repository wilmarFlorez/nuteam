import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "@/lib/seo_metadata";

const homeLanguages = {
  es: `${SITE_ORIGIN}/`,
  en: `${SITE_ORIGIN}/en`,
  "x-default": `${SITE_ORIGIN}/`,
};

const privacyLanguages = {
  es: `${SITE_ORIGIN}/privacidad`,
  en: `${SITE_ORIGIN}/en/privacy`,
  "x-default": `${SITE_ORIGIN}/privacidad`,
};

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_ORIGIN}/`,
      alternates: { languages: homeLanguages },
    },
    {
      url: `${SITE_ORIGIN}/en`,
      alternates: { languages: homeLanguages },
    },
    {
      url: `${SITE_ORIGIN}/privacidad`,
      alternates: { languages: privacyLanguages },
    },
    {
      url: `${SITE_ORIGIN}/en/privacy`,
      alternates: { languages: privacyLanguages },
    },
  ];
}
