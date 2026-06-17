"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/assets";

export default function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const pct = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return;
      const clientX =
        "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      setFromClientX(clientX);
    };
    const up = () => (dragging.current = false);

    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move, { passive: false });
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
    };
  }, [setFromClientX]);

  return (
    <section className="relative bg-ink py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-14 text-center">
          <span className="mb-4 inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-gold">
            <span className="h-px w-10 bg-gold" />
            Real Results
            <span className="h-px w-10 bg-gold" />
          </span>
          <h2 className="font-display text-6xl leading-none tracking-tight text-white lg:text-8xl">
            The Transformation
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          ref={containerRef}
          data-cursor="hover"
          onMouseDown={(e) => {
            dragging.current = true;
            setFromClientX(e.clientX);
          }}
          onTouchStart={(e) => {
            dragging.current = true;
            setFromClientX(e.touches[0].clientX);
          }}
          className="relative mx-auto aspect-[16/10] max-w-5xl select-none overflow-hidden rounded-2xl"
        >
          {/* After (full) */}
          <img
            src={IMAGES.after}
            alt="After"
            className="absolute inset-0 h-full w-full object-cover"
            draggable={false}
          />
          <span className="absolute right-6 top-6 rounded-full border border-white/30 bg-ink/40 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white backdrop-blur">
            After
          </span>

          {/* Before (clipped) */}
          <div
            className="absolute inset-0 h-full overflow-hidden"
            style={{ width: `${pos}%` }}
          >
            <img
              src={IMAGES.before}
              alt="Before"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ width: containerRef.current?.offsetWidth || "100%" }}
              draggable={false}
            />
            <div className="absolute inset-0 bg-ink/20" />
            <span className="absolute left-6 top-6 rounded-full border border-gold/40 bg-ink/40 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold backdrop-blur">
              Before
            </span>
          </div>

          {/* Handle */}
          <div
            className="absolute inset-y-0 z-10 w-px bg-gold"
            style={{ left: `${pos}%` }}
          >
            <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold bg-ink/70 backdrop-blur transition-transform duration-300 hover:scale-110">
              <span className="text-gold">↔</span>
            </div>
          </div>
        </motion.div>
        <p className="mt-6 text-center text-xs uppercase tracking-[0.25em] text-white/40">
          Drag to reveal
        </p>
      </div>
    </section>
  );
}
