import Link from "next/link";
import Logo from "@/components/landing/logo";
import type { Locale } from "@/lib/locale";

export default function Footer({ locale }: { locale: Locale }) {
  const isEnglish = locale === "en";

  return (
    <footer className="relative overflow-x-clip border-t border-white/10 bg-ink text-white">
      <div className="mx-auto max-w-[1440px] px-6 py-8 lg:px-10 lg:py-9">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href={isEnglish ? "/en" : "/"}
              className="flex w-fit items-center gap-2.5"
              aria-label="NuTeam"
            >
              <Logo className="h-5 w-[26px]" />
              <span className="text-lg font-semibold tracking-tight">
                <span className="text-volt">Nu</span><span>Team</span>
              </span>
            </Link>

            <nav aria-label={isEnglish ? "Legal" : "Información legal"}>
              <Link
                href={isEnglish ? "/en/privacy" : "/privacidad"}
                className="text-sm text-white/70 underline decoration-white/25 underline-offset-4 transition-colors hover:text-volt hover:decoration-volt focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-volt"
              >
                {isEnglish ? "Privacy Policy" : "Política de privacidad"}
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-3 border-t border-white/10 pt-4 font-mono text-[10px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
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
