"use client";

import { motion } from "framer-motion";
import { ADDRESS_DISPLAY } from "@/lib/contact";

const ease = [0.22, 1, 0.36, 1] as const;

const ELAZIG_MAPS_HREF =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(ADDRESS_DISPLAY);
const ELAZIG_EMBED_SRC =
  "https://www.google.com/maps?q=" +
  encodeURIComponent(ADDRESS_DISPLAY) +
  "&output=embed";

const BRANCHES = [
  {
    name: "Elazığ Ana Şube",
    address: ADDRESS_DISPLAY,
    mapsHref: ELAZIG_MAPS_HREF,
    embedSrc: ELAZIG_EMBED_SRC,
  },
  {
    name: "Ataşehir Şubesi",
    address: "Yakında Açılıyor",
    mapsHref: null,
    embedSrc: null,
  },
];

export default function Locations() {
  return (
    <section className="relative w-full overflow-hidden bg-carbon px-6 py-24 lg:px-20 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-4 inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-gold"
        >
          <span className="h-px w-10 bg-gold" />
          Konumlarımız
        </motion.span>

        <motion.h2
          initial={{ y: 40, opacity: 0, filter: "blur(12px)" }}
          whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.1, ease }}
          className="font-display text-5xl leading-none tracking-tight text-white lg:text-7xl"
        >
          Bizi <span className="text-gradient-gold">Ziyaret Edin</span>
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {BRANCHES.map((branch, i) => (
            <motion.div
              key={branch.name}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease, delay: i * 0.1 }}
              className="overflow-hidden rounded-2xl border border-white/8 bg-ink"
            >
              <div className="p-7">
                <h3 className="font-display text-2xl tracking-wide text-white">
                  {branch.name}
                </h3>
                <p className="mt-2 text-sm font-light text-white/55">
                  {branch.address}
                </p>
              </div>

              {branch.embedSrc ? (
                <a
                  href={branch.mapsHref!}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  className="group relative block h-64 w-full overflow-hidden border-t border-white/8"
                >
                  <iframe
                    src={branch.embedSrc}
                    title={`${branch.name} Harita`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="pointer-events-none h-full w-full grayscale transition-all duration-500 ease-luxe group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-ink/10 transition-opacity duration-500 group-hover:opacity-0" />
                </a>
              ) : (
                <div className="flex h-64 w-full items-center justify-center border-t border-white/8 bg-ink/60">
                  <span className="rounded-full border border-gold/40 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    Yakında Açılıyor
                  </span>
                </div>
              )}

              <div className="p-7 pt-5">
                {branch.mapsHref ? (
                  <a
                    href={branch.mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="group relative inline-flex overflow-hidden rounded-full bg-gold px-7 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink"
                  >
                    <span className="relative z-10">Haritada Aç</span>
                    <span className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 ease-luxe group-hover:translate-x-0" />
                  </a>
                ) : (
                  <span className="inline-flex rounded-full border border-white/15 px-7 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                    Haritada Aç
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
