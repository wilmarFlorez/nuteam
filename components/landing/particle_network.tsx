"use client";

import { useEffect, useRef } from "react";

type Particle = {
  strand: number;
  step: number;
  x: number;
  y: number;
};

type Pointer = {
  x: number;
  y: number;
} | null;

function strandOffsetFor(strand: number, count: number) {
  return (strand / (count - 1) - 0.5) * 2;
}

function smoothStep(start: number, end: number, value: number) {
  const progress = Math.max(0, Math.min(1, (value - start) / (end - start)));
  return progress * progress * (3 - 2 * progress);
}

export default function ParticleNetwork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerRef = useRef<Pointer>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!container || !canvas || !context) return;

    let width = 0;
    let height = 0;
    let strandCount = 0;
    let pointsPerStrand = 0;
    let particles: Particle[] = [];
    let frame = 0;
    let isVisible = true;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reducedMotion = motionQuery.matches;

    const resize = () => {
      const bounds = container.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;

      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      strandCount =
        width < 520 ? 10 : Math.min(25, Math.max(17, Math.round(width / 60)));
      pointsPerStrand =
        width < 420 ? 28 : Math.min(80, Math.max(38, Math.round(width / 18)));
      particles = Array.from(
        { length: strandCount * pointsPerStrand },
        (_, index) => ({
          strand: Math.floor(index / pointsPerStrand),
          step: index % pointsPerStrand,
          x: width / 2,
          y: height / 2,
        }),
      );

      render(0);
      start();
    };

    const render = (time: number) => {
      if (!width || !height || !strandCount || !pointsPerStrand) return;

      const centerY = height * 0.5;
      const pointer = reducedMotion ? null : pointerRef.current;
      const pointerRadius = Math.min(width, height) * 0.42;
      const pointerShiftX = pointer ? (pointer.x / width - 0.5) * 22 : 0;
      const pointerShiftY = pointer ? (pointer.y / height - 0.5) * 22 : 0;

      context.clearRect(0, 0, width, height);

      const coreGlow = context.createRadialGradient(
        width * 0.52,
        centerY,
        0,
        width * 0.52,
        centerY,
        height * 0.52,
      );
      coreGlow.addColorStop(0, "rgba(255, 112, 20, 0.16)");
      coreGlow.addColorStop(0.44, "rgba(255, 143, 0, 0.065)");
      coreGlow.addColorStop(1, "rgba(255, 184, 0, 0)");
      context.fillStyle = coreGlow;
      context.fillRect(0, 0, width, height);

      for (const particle of particles) {
        const progress = particle.step / (pointsPerStrand - 1);
        const strandOffset = (particle.strand / (strandCount - 1) - 0.5) * 2;
        const gathering = smoothStep(0.12, 0.52, progress);
        const outgoing = smoothStep(0.52, 0.86, progress);
        const inputDisorder = 1 - gathering;
        const laneSpread = 0.025 + inputDisorder * 0.42 + outgoing * 0.13;
        const turbulence =
          (Math.sin(progress * 24 + particle.strand * 7.3 - time * 0.5) * 0.62 +
            Math.cos(progress * 13 - particle.strand * 4.7 + time * 0.38) * 0.38) *
          (9 + Math.abs(strandOffset) * 27) *
          inputDisorder;
        const cleanWave =
          Math.sin(progress * Math.PI * 3 - time * 0.42 + particle.strand * 0.08) *
          (3 + Math.abs(strandOffset) * 5) *
          outgoing;
        const inputJitterX =
          Math.sin(progress * 20 + particle.strand * 8 + time * 0.25) *
          inputDisorder *
          (1 + Math.abs(strandOffset) * 9);
        let targetX =
          width * (0.035 + progress * 0.93) +
          inputJitterX +
          pointerShiftX;
        let targetY =
          centerY +
          strandOffset * height * laneSpread +
          turbulence +
          cleanWave +
          pointerShiftY;

        if (pointer) {
          const deltaX = pointer.x - targetX;
          const deltaY = pointer.y - targetY;
          const distance = Math.hypot(deltaX, deltaY);

          if (distance < pointerRadius && distance > 0) {
            const falloff = Math.exp(-distance / (pointerRadius * 0.46));
            const pulse = Math.sin(distance * 0.045 - time * 3.8) * falloff * 30;
            const pull = (1 - distance / pointerRadius) ** 2 * 10;
            const displacement = pulse + pull;
            targetX += (deltaX / distance) * displacement;
            targetY += (deltaY / distance) * displacement;
          }
        }

        const easing = reducedMotion ? 1 : 0.075;
        particle.x += (targetX - particle.x) * easing;
        particle.y += (targetY - particle.y) * easing;
      }

      for (const particle of particles) {
        const progress = particle.step / (pointsPerStrand - 1);
        const strandOffset = Math.abs(strandOffsetFor(particle.strand, strandCount));
        const core = Math.exp(-Math.pow((progress - 0.5) / 0.2, 2));
        const outgoing = smoothStep(0.52, 0.86, progress);
        const flowPulse =
          (Math.sin(progress * Math.PI * 5 - time * 2.2 + particle.strand * 0.28) +
            1) /
          2;
        const variation =
          0.68 +
          ((Math.sin(particle.strand * 12.9898 + particle.step * 78.233) + 1) / 2) *
            1.1;
        const brightness =
          0.16 +
          (1 - strandOffset) * 0.16 +
          core * 0.3 +
          flowPulse * 0.22 +
          outgoing * 0.1;
        const radius =
          (0.7 +
            core * 1.35 +
            (1 - strandOffset) * 0.4 +
            flowPulse * 0.45 +
            outgoing * 0.15) *
          variation;
        const warmShift = Math.min(
          1,
          core * 0.68 + flowPulse * 0.23 + (1 - progress) * 0.14,
        );
        const green = Math.round(184 - warmShift * 110);
        const blue = Math.round(warmShift * 22);
        context.beginPath();
        context.arc(particle.x, particle.y, radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(255, ${green}, ${blue}, ${brightness})`;
        context.fill();
      }
    };

    const animate = (timestamp: number) => {
      frame = 0;
      if (!isVisible || document.hidden) return;

      render(reducedMotion ? 0 : timestamp / 1000);
      if (!reducedMotion) frame = window.requestAnimationFrame(animate);
    };

    function start() {
      if (!isVisible || document.hidden) return;
      if (reducedMotion) {
        render(0);
      } else if (!frame) {
        frame = window.requestAnimationFrame(animate);
      }
    }

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch" || reducedMotion) return;
      const bounds = container.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      pointerRef.current =
        x >= 0 && x <= bounds.width && y >= 0 && y <= bounds.height
          ? { x, y }
          : null;
    };

    const handlePointerLeave = () => {
      pointerRef.current = null;
    };

    const handlePointerOut = (event: PointerEvent) => {
      if (!event.relatedTarget) handlePointerLeave();
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        window.cancelAnimationFrame(frame);
        frame = 0;
      } else {
        start();
      }
    };

    const handleMotionChange = (event: MediaQueryListEvent) => {
      reducedMotion = event.matches;
      if (reducedMotion) {
        window.cancelAnimationFrame(frame);
        frame = 0;
        render(0);
      } else {
        start();
      }
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) start();
        else {
          window.cancelAnimationFrame(frame);
          frame = 0;
        }
      },
      { rootMargin: "100px" },
    );
    intersectionObserver.observe(container);

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerout", handlePointerOut, { passive: true });
    window.addEventListener("blur", handlePointerLeave);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    motionQuery.addEventListener("change", handleMotionChange);

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerout", handlePointerOut);
      window.removeEventListener("blur", handlePointerLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none relative h-full w-full"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="hero-particle-canvas pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      />
    </div>
  );
}
