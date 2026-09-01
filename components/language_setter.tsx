"use client";

import { useEffect } from "react";

export default function LanguageSetter() {
  useEffect(() => {
    document.documentElement.lang = "en";

    return () => {
      document.documentElement.lang = "es";
    };
  }, []);

  return null;
}
