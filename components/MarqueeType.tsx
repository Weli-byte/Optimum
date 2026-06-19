"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Row = {
  words: string[];
  baseX: number; // starting % offset
  speed: number; // scroll-linked drift in %
  className: string;
};

const ROWS: Row[] = [
  {
    words: ["OPTIMUM", "ANTRENMAN", "KARDİYO", "GÜÇ", "MENTÖRLÜK"],
    baseX: 0,
    speed: -18,
    className: "text-white",
  },
  {
    words: ["KALİSTENİK", "AĞIRLIK", "EKİPMAN", "TOPLULUK", "ELAZIĞ"],
    baseX: -20,
    speed: 22,
    className: "text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.25)]",
  },
  {
    words: ["KADINLARA ÖZEL", "ATAŞEHİR", "DAHA FAZLASI", "OPTIMUM"],
    baseX: -10,
    speed: -14,
    className: "text-gradient-gold",
  },
];

export default function MarqueeType() {
  const section = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !section.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".marquee-row").forEach((row) => {
        const speed = parseFloat(row.dataset.speed || "0");
        gsap.to(row, {
          xPercent: speed,
          ease: "none",
          scrollTrigger: {
            trigger: section.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={section}
      className="relative overflow-hidden bg-ink py-28 lg:py-44"
    >
      <div className="flex flex-col gap-2 lg:gap-4">
        {ROWS.map((row, i) => (
          <div
            key={i}
            data-speed={row.speed}
            className="marquee-row flex whitespace-nowrap will-change-transform"
            style={{ transform: `translateX(${row.baseX}%)` }}
          >
            {[...row.words, ...row.words, ...row.words].map((w, j) => (
              <span
                key={j}
                className={`mx-6 font-display text-[11vw] leading-[0.95] tracking-tight lg:text-[9vw] ${row.className}`}
              >
                {w}
                <span className="px-6 text-gold/40">/</span>
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-ink to-transparent" />
    </section>
  );
}
