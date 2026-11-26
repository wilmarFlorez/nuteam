"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export default function WorkflowSequence({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  const listRef = useRef<HTMLOListElement>(null);

  useGSAP(
    (_, contextSafe) => {
      const list = listRef.current;
      if (!list || !contextSafe) return;

      const steps = Array.from(
        list.querySelectorAll<HTMLElement>("[data-flow-step]"),
      );
      if (!steps.length) return;

      const motion = gsap.matchMedia();
      motion.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(steps, { opacity: 0, y: 18, scale: 0.985 });

        const revealBatch = contextSafe((targets: Element[]) => {
          const cards = targets.filter(
            (target): target is HTMLElement => target instanceof HTMLElement,
          );
          const markers = cards
            .map((card) =>
              card.querySelector<HTMLElement>("[data-flow-marker]"),
            )
            .filter((marker): marker is HTMLElement => marker !== null);

          gsap.to(cards, {
            opacity: 1,
            y: 0,
            scale: 1,
            clearProps: "opacity,transform,visibility",
            duration: 0.56,
            ease: "power3.out",
            stagger: 0.1,
            overwrite: "auto",
          });

          if (markers.length) {
            gsap.fromTo(
              markers,
              { opacity: 0.65, scale: 0.45 },
              {
                opacity: 1,
                scale: 1,
                clearProps: "opacity,transform,visibility",
                delay: 0.06,
                duration: 0.34,
                ease: "back.out(1.6)",
                stagger: 0.08,
              },
            );
          }
        });

        const triggers = ScrollTrigger.batch(steps, {
          batchMax: 4,
          interval: 0.1,
          once: true,
          start: "top 84%",
          onEnter: revealBatch,
        });

        return () => triggers.forEach((trigger) => trigger.kill());
      });

      return () => motion.revert();
    },
    { scope: listRef },
  );

  return (
    <ol ref={listRef} className={className}>
      {children}
    </ol>
  );
}
