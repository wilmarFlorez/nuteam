"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Keep the initial render identical on the server and the client.
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;

    let frame = 0;
    let observer: IntersectionObserver | null = null;

    // Deferring to the next frame guarantees the observer callback runs after
    // hydration completes, avoiding a server/client class mismatch on mount.
    frame = requestAnimationFrame(() => {
      if (!("IntersectionObserver" in window)) {
        setVisible(true);
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setVisible(true);
            observer?.disconnect();
          }
        },
        { threshold: 0.12, rootMargin: "0px 0px -48px 0px" },
      );

      observer.observe(el);
    });

    return () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [visible]);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
