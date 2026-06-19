"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { IMAGES, VIDEOS } from "@/lib/assets";
import { WHATSAPP_HREF } from "@/lib/contact";

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const rise = {
  hidden: { y: 60, opacity: 0, filter: "blur(12px)" },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease },
  },
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [reduceMotionActive, setReduceMotionActive] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  useEffect(() => {
    const reduceMotion = Boolean(shouldReduceMotion);
    setReduceMotionActive(reduceMotion);

    const section = ref.current;
    const video = videoRef.current;
    if (!section || !video) return;

    let isHeroVisible = true;
    const syncVideoPlayback = () => {
      if (
        reduceMotion ||
        document.visibilityState === "hidden" ||
        !isHeroVisible
      ) {
        video.pause();
        return;
      }

      void video.play().catch(() => {
        // Autoplay can be blocked by browser policy; the poster remains visible.
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isHeroVisible = entry.isIntersecting;
        syncVideoPlayback();
      },
      { threshold: 0.05 },
    );

    observer.observe(section);
    document.addEventListener("visibilitychange", syncVideoPlayback);
    syncVideoPlayback();

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", syncVideoPlayback);
    };
  }, [shouldReduceMotion]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative h-[100svh] w-full overflow-hidden"
    >
      {/* Background media */}
      <motion.div
        style={reduceMotionActive ? undefined : { scale, y }}
        className="absolute inset-0"
      >
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={IMAGES.heroPoster}
        >
          <source src={VIDEOS.hero} type="video/mp4" />
        </video>
        {/* Ken Burns fallback layer (poster) sits behind via poster; add grain */}
        <div className="absolute inset-0 bg-grain opacity-40" />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/48 via-ink/14 to-ink/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/48 via-transparent to-ink/28" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(5,5,5,0.5)_65%,rgba(5,5,5,0.62)_100%)]" />

      {/* Content */}
      <motion.div
        style={reduceMotionActive ? undefined : { y: textY, opacity }}
        className="relative z-10 flex h-full flex-col justify-center px-6 lg:px-20"
      >
        <motion.div
          variants={container}
          initial={false}
          animate="show"
        >
          <motion.h1
            variants={rise}
            className="font-display text-[13vw] leading-[0.85] tracking-tight text-white sm:text-[10vw] lg:text-[8vw]"
          >
            OPTIMUM
            <br />
            <span className="text-gradient-gold animate-shimmer">
              FITNESS CLUB
            </span>
          </motion.h1>

          <motion.p
            variants={rise}
            className="mt-3 font-display text-[3.5vw] font-light tracking-[0.3em] text-white/60 sm:text-[2.5vw] lg:text-[1.6vw]"
          >
            ELAZIĞ · 1982
          </motion.p>

          <motion.p
            variants={rise}
            className="mt-8 max-w-xl text-base font-light leading-relaxed text-white/75 lg:text-lg"
          >
            Kadın ve erkek üyeler için ayrı antrenman alanları; kardiyo,
            ağırlık, grup dersleri ve Ataşehir şubesiyle Optimum deneyimi.
          </motion.p>

          <motion.div variants={rise} className="mt-12 flex flex-wrap gap-4">
            <a
              href="#membership"
              className="group relative overflow-hidden rounded-full bg-gold px-9 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-ink"
            >
              <span className="relative z-10">Üyelikleri İncele</span>
              <span className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 ease-luxe group-hover:translate-x-0" />
            </a>
            <a
              href={WHATSAPP_HREF}
              className="group flex items-center gap-3 rounded-full border border-white/20 px-9 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors duration-500 hover:border-gold hover:text-gold"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp ile İletişim
              <span className="transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

    </section>
  );
}
