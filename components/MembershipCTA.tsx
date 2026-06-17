"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { IMAGES, VIDEOS } from "@/lib/assets";

const ease = [0.22, 1, 0.36, 1] as const;

export default function MembershipCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <section
      id="membership"
      ref={ref}
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden"
    >
      <motion.div style={{ scale }} className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={IMAGES.membershipPoster}
        >
          <source src={VIDEOS.cta} type="video/mp4" />
        </video>
      </motion.div>

      <div className="absolute inset-0 bg-ink/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(5,5,5,0.9)_100%)]" />

      <div className="relative z-10 px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-block text-xs uppercase tracking-[0.4em] text-gold"
        >
          Limited Founding Memberships
        </motion.span>

        <motion.h2
          initial={{ y: 60, opacity: 0, filter: "blur(12px)" }}
          whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.1, ease }}
          className="font-display text-[14vw] leading-[0.85] tracking-tight text-white lg:text-[9vw]"
        >
          READY TO
          <br />
          <span className="text-gradient-gold animate-shimmer">TRANSFORM?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mx-auto mt-8 max-w-lg text-lg font-light text-white/70"
        >
          Your first session is on us. Step inside and feel the difference a
          standard makes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-12"
        >
          <a
            href="#top"
            data-cursor="hover"
            className="group relative inline-flex overflow-hidden rounded-full bg-gold px-12 py-5 text-sm font-semibold uppercase tracking-[0.2em] text-ink"
          >
            <span className="relative z-10 flex items-center gap-3">
              Book A Free Trial
              <span className="transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </span>
            <span className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 ease-luxe group-hover:translate-x-0" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
