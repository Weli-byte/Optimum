"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  animate,
} from "framer-motion";

const STATS = [
  { value: 5000, suffix: "+", label: "Members" },
  { value: 50, suffix: "+", label: "Weekly Classes" },
  { value: 20, suffix: "+", label: "Elite Coaches" },
  { value: 10000, suffix: "+", label: "Transformations" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      <span className="text-gold">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-carbon py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-30" />
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-y-14 px-6 lg:grid-cols-4 lg:px-10">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <span className="font-display text-6xl tracking-tight text-white lg:text-8xl">
              <Counter value={s.value} suffix={s.suffix} />
            </span>
            <span className="mt-3 text-xs uppercase tracking-[0.25em] text-white/50">
              {s.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
