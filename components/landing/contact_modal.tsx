"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { isEnglish, type Locale } from "@/lib/locale";
import ContactWizard from "./contact_wizard";
import { CONTACT_MODAL_OPEN_EVENT } from "./contact_modal_events";

export default function ContactModal({ locale }: { locale: Locale }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const english = isEnglish(locale);

  useEffect(() => {
    const openModal = () => {
      const dialog = dialogRef.current;
      if (dialog && !dialog.open) dialog.showModal();
    };

    window.addEventListener(CONTACT_MODAL_OPEN_EVENT, openModal);
    return () => window.removeEventListener(CONTACT_MODAL_OPEN_EVENT, openModal);
  }, []);

  return (
    <dialog
      ref={dialogRef}
      id="contacto"
      aria-labelledby="contact-modal-title"
      className="m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto border-0 bg-transparent p-4 text-ink backdrop:bg-ink/80 backdrop:backdrop-blur-sm sm:p-8"
      onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close();
      }}
    >
      <div className="mx-auto flex min-h-full max-w-6xl items-center justify-center">
        <div className="my-auto w-full max-w-3xl overflow-hidden rounded-[1.5rem] border border-ink/10 bg-paper text-ink shadow-[0_35px_100px_-35px_rgba(0,0,0,0.65)] sm:rounded-[2rem]">
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
              onClick={() => dialogRef.current?.close()}
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
