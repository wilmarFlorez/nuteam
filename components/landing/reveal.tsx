"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

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

  useGSAP(
    () => {
      const element = ref.current;
      if (!element || typeof window === "undefined") return;

      const motion = gsap.matchMedia();

      motion.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 20 },
          {
            autoAlpha: 1,
            y: 0,
            clearProps: "opacity,transform,visibility",
            delay: delay / 1000,
            duration: 0.68,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          },
        );
      });

      return () => motion.revert();
    },
    { scope: ref, dependencies: [delay], revertOnUpdate: true },
  );

  return (
    <div
      ref={ref}
      data-motion-reveal=""
      className={className}
    >
      {children}
    </div>
  );
}
