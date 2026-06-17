"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/assets";

const ease = [0.22, 1, 0.36, 1] as const;

const SERVICES = [
  {
    title: "Strength Training",
    desc: "Olympic platforms, free weights and progressive overload coaching.",
    image: IMAGES.strength,
  },
  {
    title: "Functional Training",
    desc: "Athletic movement, mobility and conditioning for real-world power.",
    image: IMAGES.training,
  },
  {
    title: "Personal Coaching",
    desc: "One-to-one programming with elite coaches who know your name.",
    image: IMAGES.community,
  },
  {
    title: "Nutrition",
    desc: "Performance nutrition plans built around your goals and biology.",
    image: IMAGES.lifestyle,
  },
  {
    title: "Recovery",
    desc: "Cryo, sauna, contrast pools and guided regeneration protocols.",
    image: IMAGES.recovery,
  },
  {
    title: "Group Classes",
    desc: "High-energy studio sessions led by the city&apos;s best instructors.",
    image: IMAGES.gallery[1],
  },
];

function Card({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <motion.div
      ref={ref}
      data-cursor="hover"
      onMouseMove={onMove}
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease, delay: (index % 3) * 0.08 }}
      className="group relative overflow-hidden rounded-2xl border border-white/8 bg-carbon p-px transition-transform duration-500 ease-luxe hover:-translate-y-2"
    >
      {/* animated border glow following cursor */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(220px circle at var(--mx) var(--my), rgba(212,175,55,0.35), transparent 60%)",
        }}
      />
      <div className="relative z-10 h-full rounded-2xl bg-carbon">
        <div className="relative h-52 overflow-hidden rounded-t-2xl">
          <img
            src={service.image}
            alt={service.title}
            loading="lazy"
            className="h-full w-full object-cover brightness-75 transition-all duration-700 ease-luxe group-hover:scale-110 group-hover:brightness-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon to-transparent" />
          <span className="absolute right-5 top-5 font-display text-2xl text-white/30">
            0{index + 1}
          </span>
        </div>
        <div className="p-7">
          <h3 className="font-display text-3xl tracking-wide text-white transition-colors duration-500 group-hover:text-gold">
            {service.title}
          </h3>
          <p
            className="mt-3 text-sm leading-relaxed text-white/55"
            dangerouslySetInnerHTML={{ __html: service.desc }}
          />
          <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold opacity-0 transition-all duration-500 group-hover:opacity-100">
            Discover
            <span className="transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative bg-ink py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <span className="mb-4 inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-gold">
              <span className="h-px w-10 bg-gold" />
              What We Offer
            </span>
            <h2 className="font-display text-6xl leading-none tracking-tight text-white lg:text-8xl">
              The Experience
            </h2>
          </div>
          <p className="max-w-sm text-white/55">
            Six disciplines. One standard. Every service engineered to make the
            extraordinary feel routine.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Card key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
