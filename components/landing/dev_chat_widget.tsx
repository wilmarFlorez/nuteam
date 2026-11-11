import Script from "next/script";

export default function DevChatWidget() {
  const enabled =
    process.env.NODE_ENV === "development" &&
    process.env.NEXT_PUBLIC_NUTEAM_CHAT_DEV_ENABLED === "true";
  const widgetId = process.env.NEXT_PUBLIC_NUTEAM_CHAT_WIDGET_ID;
  const supabaseUrl = process.env.NEXT_PUBLIC_NUTEAM_CHAT_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_NUTEAM_CHAT_SUPABASE_ANON_KEY;

  if (!enabled || !widgetId || !supabaseUrl || !supabaseAnonKey) {
    return null;
  }

  return (
    <Script
      id="nuteam-chat-dev-widget"
      src={
        process.env.NEXT_PUBLIC_NUTEAM_CHAT_LOADER_URL ||
        "http://127.0.0.1:3000/chat-widget/v3/loader.js"
      }
      strategy="afterInteractive"
      data-widget-id={widgetId}
      data-api-url={
        process.env.NEXT_PUBLIC_NUTEAM_CHAT_API_URL || "http://127.0.0.1:8000"
      }
      data-supabase-url={supabaseUrl}
      data-supabase-anon-key={supabaseAnonKey}
    />
  );
}
