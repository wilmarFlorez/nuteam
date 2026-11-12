import Script from "next/script";

const PRODUCTION_WIDGET_CONFIG = {
  widgetId: "59b86d92-c6a3-44a5-9dfb-f42f7590c259",
  supabaseUrl: "https://knoygajcotdekimtcpye.supabase.co",
  loaderUrl: "https://app.nuteam.ai/chat-widget/v3/loader.js",
  apiUrl: "https://platform-api.nuteam.ai",
};

export default function ChatWidget() {
  const isProductionDeployment = process.env.VERCEL_ENV === "production";
  const isDevelopment = process.env.NODE_ENV === "development";
  const enabled =
    isProductionDeployment ||
    (isDevelopment && process.env.NEXT_PUBLIC_NUTEAM_CHAT_DEV_ENABLED === "true");
  const widgetId = isProductionDeployment
    ? PRODUCTION_WIDGET_CONFIG.widgetId
    : process.env.NEXT_PUBLIC_NUTEAM_CHAT_WIDGET_ID;
  const supabaseUrl = isProductionDeployment
    ? PRODUCTION_WIDGET_CONFIG.supabaseUrl
    : process.env.NEXT_PUBLIC_NUTEAM_CHAT_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_NUTEAM_CHAT_SUPABASE_ANON_KEY;
  const loaderUrl = isProductionDeployment
    ? PRODUCTION_WIDGET_CONFIG.loaderUrl
    : process.env.NEXT_PUBLIC_NUTEAM_CHAT_LOADER_URL ||
      "http://127.0.0.1:3000/chat-widget/v3/loader.js";
  const apiUrl = isProductionDeployment
    ? PRODUCTION_WIDGET_CONFIG.apiUrl
    : process.env.NEXT_PUBLIC_NUTEAM_CHAT_API_URL || "http://127.0.0.1:8000";

  if (!enabled) {
    return null;
  }

  if (isProductionDeployment && !supabaseAnonKey) {
    throw new Error(
      "NEXT_PUBLIC_NUTEAM_CHAT_SUPABASE_ANON_KEY is required for the production chat widget.",
    );
  }

  if (!widgetId || !supabaseUrl || !supabaseAnonKey) return null;

  return (
    <Script
      id="nuteam-chat-widget"
      src={loaderUrl}
      strategy={isProductionDeployment ? "lazyOnload" : "afterInteractive"}
      data-widget-id={widgetId}
      data-api-url={apiUrl}
      data-supabase-url={supabaseUrl}
      data-supabase-anon-key={supabaseAnonKey}
    />
  );
}
