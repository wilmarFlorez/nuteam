"use client";

import type { AnchorHTMLAttributes } from "react";
import { trackEvent } from "@/lib/analytics";
import { requestContactModalOpen } from "./contact_modal_events";

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  ctaName: string;
  location: string;
};

export default function TrackedLink({ ctaName, location, onClick, ...props }: TrackedLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        onClick?.(event);
        if (props.href === "#contacto" && !event.defaultPrevented) {
          event.preventDefault();
          requestContactModalOpen();
        }
        trackEvent("cta_click", { cta_name: ctaName, location });
      }}
    />
  );
}
