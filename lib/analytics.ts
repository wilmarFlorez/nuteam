export type AnalyticsParams = Record<string, string | number | boolean>;

export type Attribution = {
  source: string;
  medium: string;
  campaign: string;
  term: string;
  content: string;
  landing_page: string;
  referrer: string;
  timestamp: string;
};

const ATTRIBUTION_KEY = "nuteam_attribution";
const UTM_KEYS = [
  ["utm_source", "source"],
  ["utm_medium", "medium"],
  ["utm_campaign", "campaign"],
  ["utm_term", "term"],
  ["utm_content", "content"],
] as const;

declare global {
  interface Window {
    dataLayer?: unknown[][];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params: AnalyticsParams = {}) {
  if (!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || typeof window === "undefined") {
    return;
  }

  if (window.gtag) {
    window.gtag("event", name, params);
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(["event", name, params]);
}

export function captureAttribution(): Attribution | null {
  if (typeof window === "undefined") return null;

  try {
    const stored = sessionStorage.getItem(ATTRIBUTION_KEY);
    if (stored) return JSON.parse(stored) as Attribution;

    const params = new URLSearchParams(window.location.search);
    const attribution: Attribution = {
      source: "",
      medium: "",
      campaign: "",
      term: "",
      content: "",
      landing_page: window.location.href,
      referrer: document.referrer,
      timestamp: new Date().toISOString(),
    };

    UTM_KEYS.forEach(([queryKey, attributionKey]) => {
      attribution[attributionKey] = params.get(queryKey) || "";
    });

    sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(attribution));
    return attribution;
  } catch {
    return null;
  }
}

export function getAttribution(): Attribution | null {
  if (typeof window === "undefined") return null;

  try {
    const stored = sessionStorage.getItem(ATTRIBUTION_KEY);
    return stored ? (JSON.parse(stored) as Attribution) : captureAttribution();
  } catch {
    return null;
  }
}
