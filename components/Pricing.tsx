"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const FEATURES = [
  "Kardiyo Alanı",
  "Ağırlık Alanı",
  "Kadın-Erkek Salonları",
  "Grup Dersleri",
  "Profesyonel Destek",
];

const PLANS = [
  { title: "1 AYLIK", price: "1.999 ₺" },
  { title: "3 AYLIK", price: "4.999 ₺" },
  { title: "6 AYLIK", price: "8.999 ₺" },
  { title: "9 AYLIK", price: "11.999 ₺" },
  { title: "12 AYLIK", price: "14.999 ₺", featured: true },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative w-full overflow-hidden bg-ink px-6 py-28 lg:px-20 lg:py-36"
    >
      <div className="mx-auto max-w-[1400px]">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-6 block text-center text-xs uppercase tracking-[0.4em] text-gold"
        >
          Üyelik Planları
        </motion.span>

        <motion.h2
          initial={{ y: 40, opacity: 0, filter: "blur(12px)" }}
          whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.1, ease }}
          className="text-center font-display text-[10vw] leading-[0.9] tracking-tight text-white lg:text-[4.5vw]"
        >
          SANA UYGUN{" "}
          <span className="text-gradient-gold animate-shimmer">PLANI</span>{" "}
          SEÇ
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.title}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease, delay: i * 0.08 }}
              data-cursor="hover"
              className={`group relative flex flex-col rounded-2xl border p-8 shadow-2xl transition-all duration-500 ease-luxe hover:-translate-y-2 ${
                plan.featured
                  ? "border-gold/40 bg-white text-ink shadow-gold/10"
                  : "border-white/8 bg-carbon text-white hover:border-gold/30"
              }`}
            >
              {plan.featured && (
                <span className="mb-4 inline-flex w-fit items-center rounded-full bg-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-ink">
                  En Çok Tercih Edilen
                </span>
              )}

              <h3
                className={`font-display text-2xl tracking-tight ${
                  plan.featured ? "text-ink" : "text-white"
                }`}
              >
                {plan.title}
              </h3>

              <p
                className={`mt-4 font-display text-4xl tracking-tight lg:text-5xl ${
                  plan.featured ? "text-ink" : "text-gradient-gold"
                }`}
              >
                {plan.price}
              </p>

              <p
                className={`mt-2 text-sm font-light ${
                  plan.featured ? "text-ink/60" : "text-white/50"
                }`}
              >
                Spor salonu üyeliği
              </p>

              <ul className="mt-8 flex flex-col gap-3 text-sm">
                {FEATURES.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-center gap-2 ${
                      plan.featured ? "text-ink/80" : "text-white/70"
                    }`}
                  >
                    <span
                      className={
                        plan.featured ? "text-ink" : "text-gold"
                      }
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
