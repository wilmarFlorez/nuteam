import Link from "next/link";
import type { Locale } from "@/lib/locale";

export default function Footer({ locale }: { locale: Locale }) {
  const isEnglish = locale === "en";

  return (
    <footer className="relative overflow-x-clip border-t border-white/10 bg-ink text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-6 lg:px-10 lg:py-12">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href={isEnglish ? "/en" : "/"}
              className="w-fit text-xl font-semibold tracking-[-0.055em]"
            >
              <span className="text-volt">Nu</span><span>Team</span>
            </Link>

            <nav aria-label={isEnglish ? "Legal" : "Información legal"}>
              <Link
                href={isEnglish ? "/en/privacy" : "/privacidad"}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/70 transition-colors hover:border-white/25 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-volt"
              >
                {isEnglish ? "Privacy Policy" : "Política de privacidad"}
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-3 border-t border-white/10 pt-5 font-mono text-[10px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} <span aria-hidden="true">·</span> NUTEAM S.A.S.
            </p>
            <p className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="flex h-2 w-3 flex-col overflow-hidden rounded-[1px]"
              >
                <span className="h-1 bg-[#fcd116]" />
                <span className="h-0.5 bg-[#003893]" />
                <span className="h-0.5 bg-[#ce1126]" />
              </span>
              {isEnglish ? "Colombian company" : "Empresa colombiana"}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
