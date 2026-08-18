"use client";

import { useEffect } from "react";
import { captureAttribution, trackEvent } from "@/lib/analytics";

export default function AnalyticsTracker() {
  useEffect(() => {
    captureAttribution();
    trackEvent("page_view");

    const thresholds = new Set([50, 90]);
    function handleScroll() {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight <= 0) return;

      const percentage = (window.scrollY / scrollableHeight) * 100;
      thresholds.forEach((threshold) => {
        if (percentage >= threshold) {
          trackEvent(`scroll_${threshold}`);
          thresholds.delete(threshold);
        }
      });
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
