"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Cursor follower + glow spotlight.
 * - A small gold dot tracks the pointer 1:1.
 * - A large soft glow lags behind for a premium, weighty feel.
 * - Grows / shifts to "magnetic" state over interactive elements.
 */
export default function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return;
    setEnabled(true);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let glowX = mouseX;
    let glowY = mouseY;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
    };

    const onOver = (e: MouseEvent) => {
      const t = (e.target as HTMLElement)?.closest(
        'a, button, [data-cursor="hover"]'
      );
      dotRef.current?.classList.toggle("cursor-active", !!t);
      glowRef.current?.classList.toggle("glow-active", !!t);
    };

    const loop = () => {
      glowX += (mouseX - glowX) * 0.12;
      glowY += (mouseY - glowY) * 0.12;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowX}px, ${glowY}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    loop();

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={glowRef}
        className="pointer-events-none fixed left-0 top-0 z-[60] h-[420px] w-[420px] rounded-full opacity-60 mix-blend-screen transition-[width,height,opacity] duration-500 ease-luxe glow-base"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0.06) 35%, transparent 70%)",
        }}
        aria-hidden
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[61] h-2 w-2 rounded-full bg-gold transition-[width,height,background-color] duration-300 ease-luxe cursor-dot"
        aria-hidden
      />
      <style jsx global>{`
        .cursor-dot.cursor-active {
          width: 56px;
          height: 56px;
          background-color: transparent;
          border: 1px solid rgba(212, 175, 55, 0.8);
        }
        .glow-base.glow-active {
          opacity: 0.9;
          width: 560px;
          height: 560px;
        }
      `}</style>
    </>
  );
}
