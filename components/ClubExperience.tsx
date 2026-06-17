"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { IMAGES } from "@/lib/assets";

const ease = [0.22, 1, 0.36, 1] as const;

const BLOCKS = [
  {
    eyebrow: "The Space",
    title: "Architected For Performance",
    copy: "Floor-to-ceiling glass, blackened steel and warm light. A 2,000m² sanctuary engineered so every detail elevates how you move and feel.",
    image: IMAGES.club[0],
    reverse: false,
  },
  {
    eyebrow: "The Recovery Wing",
    title: "Rest Is A Weapon",
    copy: "Contrast pools, infrared saunas and cryotherapy chambers. Recovery treated with the same precision as training — because that is where progress is made.",
    image: IMAGES.club[1],
    reverse: true,
  },
  {
    eyebrow: "The Members' Lounge",
    title: "Where The City Connects",
    copy: "Specialty coffee, curated workspaces and a community of high performers. A private club atmosphere that extends far beyond the workout.",
    image: IMAGES.club[2],
    reverse: false,
  },
];

function Block({ block }: { block: (typeof BLOCKS)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1, 1.12]);

  return (
    <div
      ref={ref}
      className="mx-auto grid max-w-[1400px] items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-24"
    >
      <motion.div
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        whileInView={{ clipPath: "inset(0 0 0% 0)" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease }}
        className={`relative aspect-[5/4] overflow-hidden rounded-2xl ${
          block.reverse ? "lg:order-2" : ""
        }`}
      >
        <motion.img
          src={block.image}
          alt={block.title}
          loading="lazy"
          style={{ y, scale }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
      </motion.div>

      <div className={block.reverse ? "lg:order-1" : ""}>
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-5 inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-gold"
        >
          <span className="h-px w-10 bg-gold" />
          {block.eyebrow}
        </motion.span>
        <motion.h3
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease }}
          className="font-display text-5xl leading-[0.9] tracking-tight text-white lg:text-7xl"
        >
          {block.title}
        </motion.h3>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease, delay: 0.12 }}
          className="mt-6 max-w-md text-lg font-light leading-relaxed text-white/60"
        >
          {block.copy}
        </motion.p>
      </div>
    </div>
  );
}

export default function ClubExperience() {
  return (
    <section id="club" className="relative bg-carbon py-16 lg:py-24">
      {BLOCKS.map((b) => (
        <Block key={b.title} block={b} />
      ))}
    </section>
  );
}
