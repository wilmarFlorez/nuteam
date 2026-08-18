"use client";

import type { AnchorHTMLAttributes } from "react";
import { trackEvent } from "@/lib/analytics";

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
        trackEvent("cta_click", { cta_name: ctaName, location });
      }}
    />
  );
}
