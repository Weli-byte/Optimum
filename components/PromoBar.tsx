"use client";

import { motion } from "framer-motion";

const OFFERS = [
  "🎁 3 Aylık Üyelikte +1 Ay Hediye",
  "🎁 6 Aylık Üyelikte +1 Ay Hediye",
];

export default function PromoBar() {
  return (
    <section className="relative w-full overflow-hidden border-y border-gold/20 bg-gradient-to-r from-ink via-carbon to-ink py-6 lg:py-7">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08),transparent_70%)]" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto flex max-w-[1400px] flex-col items-center justify-center gap-4 px-6 text-center lg:flex-row lg:gap-10 lg:px-10"
      >
        <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
          🔥 10. Yıl Kampanyası
        </span>

        <span className="hidden h-5 w-px bg-white/15 lg:inline-block" />

        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-8">
          {OFFERS.map((offer) => (
            <span
              key={offer}
              className="text-sm font-light text-white/85 transition-colors duration-300 hover:text-gold lg:text-base"
            >
              {offer}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
