import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-archivo",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  title: "Nu Team | Tu próximo equipo también trabaja con IA",
  description:
    "Nu Team diseña agentes de IA que ejecutan procesos operativos, interactúan con clientes y trabajan junto a tu equipo.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html
      lang="es"
      className={`${archivo.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink font-sans text-white">
        {children}
        {measurementId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', ${JSON.stringify(measurementId)}, { send_page_view: false });`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
