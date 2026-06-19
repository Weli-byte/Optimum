"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/assets";

const LABELS = [
  "Dambıl Alanı",
  "Kadınlara Özel Egzersiz Alanı",
  "Erkek Salonu",
  "Kadın Salonu",
  "Kardiyo Alanı",
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative bg-carbon py-28 lg:py-40">
      <div className="mx-auto mb-14 max-w-[1400px] px-6 lg:px-10">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-6xl leading-none tracking-tight text-white lg:text-8xl"
        >
          Kulübün <span className="text-gradient-gold">İçinde</span>
        </motion.h2>
        <p className="mt-4 max-w-md text-white/55">
          Dambıldan kardiyoya, kadın ve erkek salonlarına uzanan
          OPTIMUM deneyimi.
        </p>
      </div>

      <div
        className="flex h-[60svh] min-h-[420px] w-full gap-2 px-2 lg:gap-3 lg:px-3"
        onMouseLeave={() => setActive(null)}
      >
        {IMAGES.gallery.map((src, i) => {
          const isActive = active === i;
          const dimmed = active !== null && !isActive;
          return (
            <motion.button
              key={src}
              type="button"
              tabIndex={0}
              aria-label={`${LABELS[i]} görselini büyüt`}
              aria-pressed={isActive}
              data-cursor="hover"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              onClick={() => setActive(isActive ? null : i)}
              className="group relative h-full flex-1 overflow-hidden rounded-xl transition-[flex] duration-[600ms] ease-luxe"
              style={{ flexGrow: isActive ? 2.4 : 1 }}
            >
              <Image
                src={src}
                alt={LABELS[i]}
                fill
                sizes="(max-width: 768px) 40vw, 20vw"
                className="absolute inset-0 h-full w-full object-cover transition-all duration-[600ms] ease-luxe"
                style={{
                  transform: isActive ? "scale(1.05)" : "scale(1)",
                  filter: isActive
                    ? "brightness(1.15) saturate(1.1)"
                    : dimmed
                    ? "brightness(0.45)"
                    : "brightness(0.8)",
                  opacity: dimmed ? 0.6 : 1,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />

              {/* gallery label */}
              <div className="absolute bottom-6 left-6 right-6">
                <span
                  className={`block font-display text-2xl tracking-wide text-white transition-all duration-500 ${
                    isActive
                      ? "translate-y-0 opacity-100"
                      : "translate-y-0 opacity-100 md:translate-y-2 md:opacity-0 md:group-hover:opacity-100 md:group-focus:opacity-100"
                  }`}
                >
                  {LABELS[i]}
                </span>
                <span
                  className={`mt-1 block h-px bg-gold transition-all duration-700 ease-luxe ${
                    isActive ? "w-16" : "w-0"
                  }`}
                />
              </div>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
