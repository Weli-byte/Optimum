"use client";

import { motion } from "framer-motion";
import Locations from "@/components/Locations";
import {
  ADDRESS_DISPLAY,
  EMAIL_DISPLAY,
  EMAIL_HREF,
  INSTAGRAM_HREF,
  FACEBOOK_HREF,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/lib/contact";

const ease = [0.22, 1, 0.36, 1] as const;

const INFO_CARDS = [
  {
    title: "İletişim",
    rows: [
      { label: "Telefon", value: PHONE_DISPLAY, href: PHONE_HREF },
      { label: "E-posta", value: EMAIL_DISPLAY, href: EMAIL_HREF },
      { label: "Adres", value: ADDRESS_DISPLAY },
    ],
  },
  {
    title: "Çalışma Saatleri",
    rows: [
      { label: "Pazartesi – Cumartesi", value: "10:00 – 22:00" },
      { label: "Pazar", value: "Bayan bölümü kapalı" },
      { label: "Ramazan Ayı", value: "11:00 – 23:00, Pazar kapalı" },
      { label: "Zumba & Pilates Seansları", value: "Pzt / Sal / Per / Cuma / Cmt 19:00" },
    ],
  },
  {
    title: "Sosyal Kanıt",
    rows: [
      { label: "Instagram", value: "7.669 takipçi", href: INSTAGRAM_HREF },
      { label: "Facebook", value: "3,4K takipçi", href: FACEBOOK_HREF },
      { label: "Tavsiye Oranı", value: "%98" },
    ],
  },
  {
    title: "Ataşehir Şubesi",
    rows: [
      { label: "Durum", value: "Yakında Açılıyor" },
      { label: "Alan", value: "2.200 m²" },
      { label: "Özellikler", value: "Modern Ekipmanlar · Uzman Antrenörler · Kadın ve Erkek Bölümleri Ayrı" },
    ],
  },
];

export default function ClubInfo() {
  return (
    <section className="relative w-full overflow-hidden bg-ink px-6 py-24 lg:px-20 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-4 inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-gold"
        >
          <span className="h-px w-10 bg-gold" />
          Kulüp Bilgileri
        </motion.span>

        <motion.h2
          initial={{ y: 40, opacity: 0, filter: "blur(12px)" }}
          whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.1, ease }}
          className="font-display text-5xl leading-none tracking-tight text-white lg:text-7xl"
        >
          Elazığ'ın En Büyük ve{" "}
          <span className="text-gradient-gold">En Donanımlı</span> Spor Salonu
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/65"
        >
          4000 m² Bay ve Bayan Ayrı Salonlarımızla Hizmetinizdeyiz.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INFO_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease, delay: i * 0.08 }}
              className="rounded-2xl border border-white/8 bg-carbon p-7"
            >
              <h3 className="font-display text-xl tracking-wide text-gold">
                {card.title}
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {card.rows.map((row) => (
                  <li key={row.label} className="text-sm">
                    <span className="block text-white/40">{row.label}</span>
                    {row.href ? (
                      <a
                        href={row.href}
                        target={row.href.startsWith("http") ? "_blank" : undefined}
                        rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="mt-0.5 block font-light text-white/85 transition-colors hover:text-gold"
                      >
                        {row.value}
                      </a>
                    ) : (
                      <span className="mt-0.5 block font-light text-white/85">
                        {row.value}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <Locations />
      </div>
    </section>
  );
}
