"use client";

import { useRef } from "react";
import { X } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { isEnglish, type Locale } from "@/lib/locale";
import ContactWizard from "./contact_wizard";
import { CONTACT_MODAL_OPEN_EVENT } from "./contact_modal_events";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export default function ContactModal({ locale }: { locale: Locale }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeModalRef = useRef<(() => void) | null>(null);
  const isClosingRef = useRef(false);
  const reduceMotionRef = useRef(false);
  const english = isEnglish(locale);

  useGSAP(
    (_, contextSafe) => {
      const dialog = dialogRef.current;
      const panel = panelRef.current;
      if (!dialog || !panel || !contextSafe) return;

      const motion = gsap.matchMedia();
      motion.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          standardMotion: "(prefers-reduced-motion: no-preference)",
        },
        ({ conditions }) => {
          reduceMotionRef.current = Boolean(conditions?.reduceMotion);
        },
      );

      const openModal = contextSafe(() => {
        if (dialog.open) return;

        dialog.showModal();
        isClosingRef.current = false;

        if (reduceMotionRef.current) return;

        gsap.fromTo(
          panel,
          { autoAlpha: 0, scale: 0.975, y: 14 },
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            clearProps: "opacity,transform,visibility",
            duration: 0.34,
            ease: "power3.out",
          },
        );
      });

      const closeModal = contextSafe(() => {
        if (!dialog.open || isClosingRef.current) return;
        if (reduceMotionRef.current) {
          dialog.close();
          return;
        }

        isClosingRef.current = true;
        gsap.to(panel, {
          autoAlpha: 0,
          scale: 0.99,
          y: 8,
          duration: 0.18,
          ease: "power2.in",
          onComplete: () => {
            isClosingRef.current = false;
            dialog.close();
          },
        });
      });

      closeModalRef.current = closeModal;
      window.addEventListener(CONTACT_MODAL_OPEN_EVENT, openModal);

      return () => {
        window.removeEventListener(CONTACT_MODAL_OPEN_EVENT, openModal);
        closeModalRef.current = null;
        isClosingRef.current = false;
        motion.revert();
      };
    },
    { scope: dialogRef },
  );

  return (
    <dialog
      ref={dialogRef}
      id="contacto"
      aria-labelledby="contact-modal-title"
      className="m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto border-0 bg-transparent p-4 text-ink backdrop:bg-ink/80 backdrop:backdrop-blur-sm sm:p-8"
      onClick={(event) => {
        if (event.target === event.currentTarget) closeModalRef.current?.();
      }}
      onCancel={(event) => {
        event.preventDefault();
        closeModalRef.current?.();
      }}
    >
      <div className="mx-auto flex min-h-full max-w-6xl items-center justify-center">
        <div
          ref={panelRef}
          data-contact-modal-panel=""
          className="my-auto w-full max-w-3xl overflow-hidden rounded-[1.5rem] bg-paper text-ink shadow-[0_35px_100px_-35px_rgba(0,0,0,0.65)] sm:rounded-[2rem]"
        >
          <header className="flex items-start justify-between gap-5 border-b border-ink/10 px-5 py-5 sm:px-8 sm:py-6">
            <div className="max-w-xl">
              <h2
                id="contact-modal-title"
                className="text-2xl font-semibold leading-tight tracking-[-0.04em] sm:text-3xl"
              >
                {english ? "Evaluate my process" : "Evaluar mi proceso"}
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted">
                {english
                  ? "Answer a few questions about your freight request workflow and contact details."
                  : "Cuéntanos sobre el recorrido de las solicitudes y déjanos tus datos de contacto."}
              </p>
            </div>

            <button
              type="button"
              aria-label={english ? "Close form" : "Cerrar formulario"}
              onClick={() => closeModalRef.current?.()}
              className="flex size-10 shrink-0 items-center justify-center rounded-full border border-ink/10 text-ink/70 transition-colors hover:border-ink/25 hover:bg-ink/[0.04] hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-volt"
            >
              <X size={18} strokeWidth={1.75} aria-hidden="true" />
            </button>
          </header>

          <div className="p-5 sm:p-8">
            <ContactWizard locale={locale} />
          </div>
        </div>
      </div>
    </dialog>
  );
}
