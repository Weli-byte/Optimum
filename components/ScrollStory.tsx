"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { IMAGES } from "@/lib/assets";

const ease = [0.22, 1, 0.36, 1] as const;

type Chapter = {
  index: string;
  title: string;
  copy: string;
  image: string;
  align: "left" | "right";
};

const CHAPTERS: Chapter[] = [
  {
    index: "01",
    title: "Training",
    copy: "Programmes engineered around you. Every session is intentional, measured and built to move you forward.",
    image: IMAGES.training,
    align: "left",
  },
  {
    index: "02",
    title: "Strength",
    copy: "Raw power, refined. World-class equipment and coaching that turns effort into undeniable results.",
    image: IMAGES.strength,
    align: "right",
  },
  {
    index: "03",
    title: "Recovery",
    copy: "Cryotherapy, contrast pools and guided mobility. Because elite performance is built in the rest.",
    image: IMAGES.recovery,
    align: "left",
  },
  {
    index: "04",
    title: "Community",
    copy: "Surround yourself with people who refuse average. Energy is contagious — ours is relentless.",
    image: IMAGES.community,
    align: "right",
  },
  {
    index: "05",
    title: "Lifestyle",
    copy: "More than a gym. A standard you carry into every part of your life. This is the OPTIMUM way.",
    image: IMAGES.lifestyle,
    align: "left",
  },
];

function Panel({ chapter }: { chapter: Chapter }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1, 1.15]);
  const isRight = chapter.align === "right";

  return (
    <div
      ref={ref}
      className="relative flex min-h-[100svh] items-center px-6 py-24 lg:px-20"
    >
      <div
        className={`mx-auto grid w-full max-w-[1400px] items-center gap-10 lg:grid-cols-2 lg:gap-20 ${
          isRight ? "lg:[direction:rtl]" : ""
        }`}
      >
        {/* Image with parallax + reveal mask */}
        <motion.div
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          whileInView={{ clipPath: "inset(0% 0 0 0)" }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.2, ease }}
          className="relative aspect-[4/5] overflow-hidden rounded-2xl [direction:ltr]"
        >
          <motion.img
            src={chapter.image}
            alt={chapter.title}
            loading="lazy"
            style={{ y: imgY, scale: imgScale }}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
          <span className="absolute left-6 top-6 font-display text-7xl text-white/15">
            {chapter.index}
          </span>
        </motion.div>

        {/* Copy */}
        <div className="[direction:ltr]">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-5 inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-gold"
          >
            <span className="h-px w-10 bg-gold" />
            Chapter {chapter.index}
          </motion.span>

          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease }}
            className="font-display text-[18vw] leading-[0.85] tracking-tight text-white sm:text-[12vw] lg:text-[7vw]"
          >
            {chapter.title}
          </motion.h2>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease, delay: 0.15 }}
            className="mt-6 max-w-md text-lg font-light leading-relaxed text-white/65"
          >
            {chapter.copy}
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default function ScrollStory() {
  return (
    <section id="story" className="relative bg-ink">
      {CHAPTERS.map((c) => (
        <Panel key={c.index} chapter={c} />
      ))}
    </section>
  );
}
