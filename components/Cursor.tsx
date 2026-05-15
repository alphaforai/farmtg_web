"use client";

import { useEffect, useRef } from "react";
import { useIsTouchDevice, usePrefersReducedMotion } from "@/hooks/useMediaQuery";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const isTouch = useIsTouchDevice();
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (isTouch || reducedMotion) return;

    let frame = 0;
    let x = 0;
    let y = 0;
    let hovering = false;

    const applyPosition = () => {
      frame = 0;
      const scale = hovering ? 1.4 : 1;
      dotRef.current?.style.setProperty(
        "transform",
        `translate3d(${x - 8}px, ${y - 8}px, 0) scale(${scale})`,
      );
      ringRef.current?.style.setProperty(
        "transform",
        `translate3d(${x - 16}px, ${y - 16}px, 0) scale(${scale})`,
      );
    };

    const onMove = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (!frame) {
        frame = requestAnimationFrame(applyPosition);
      }
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      hovering = Boolean(
        target.closest("a, button, [role='button'], input, textarea, select"),
      );
      if (!frame) {
        frame = requestAnimationFrame(applyPosition);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [isTouch, reducedMotion]);

  if (isTouch || reducedMotion) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-4 w-4 rounded-full bg-[#6ba83d] will-change-transform"
        aria-hidden
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-8 w-8 rounded-full border-2 border-[#6ba83d] will-change-transform"
        aria-hidden
      />
    </>
  );
}
