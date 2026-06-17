"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ITEMS = [
  {
    quote:
      "OPTIMUM doesn't feel like a gym — it feels like a private club that happens to build the best version of you. I've never trained anywhere close to this.",
    name: "Daniel Reyes",
    role: "Member · 2 years",
  },
  {
    quote:
      "The coaching is on another level. They know my numbers, my goals, my off days. I came for the aesthetics and stayed for the results.",
    name: "Sofia Marin",
    role: "Member · 18 months",
  },
  {
    quote:
      "The recovery wing alone is worth it. Cryo, contrast pools, sauna — I leave every session feeling rebuilt, not wrecked.",
    name: "James Okafor",
    role: "Member · 3 years",
  },
  {
    quote:
      "Down 14kg, stronger than I've ever been, and surrounded by people who push me. This place changed how I see myself.",
    name: "Elena Petrova",
    role: "Member · 1 year",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % ITEMS.length);
    }, 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-ink py-28 lg:py-40"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <span className="mb-10 inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-gold">
          <span className="h-px w-10 bg-gold" />
          Member Stories
          <span className="h-px w-10 bg-gold" />
        </span>

        <div className="relative min-h-[280px] sm:min-h-[240px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl lg:p-12"
            >
              <span className="mb-6 block font-display text-6xl leading-none text-gold/50">
                &ldquo;
              </span>
              <p className="text-xl font-light leading-relaxed text-white/90 lg:text-2xl">
                {ITEMS[index].quote}
              </p>
              <footer className="mt-8">
                <p className="font-display text-2xl tracking-wide text-white">
                  {ITEMS[index].name}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-gold">
                  {ITEMS[index].role}
                </p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex justify-center gap-3">
          {ITEMS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              data-cursor="hover"
              aria-label={`Show testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ease-luxe ${
                i === index ? "w-10 bg-gold" : "w-1.5 bg-white/25"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
