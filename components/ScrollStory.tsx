"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  type MotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { IMAGES } from "@/lib/assets";

const ease = [0.22, 1, 0.36, 1] as const;

type Chapter = {
  index: string;
  eyebrow: string;
  title: string;
  copy: string;
  images: string[];
  layout: "single" | "triptych";
  align: "left" | "right";
};

const CHAPTERS: Chapter[] = [
  {
    index: "01",
    eyebrow: "Salonun İçinde",
    title: "Optimum Antrenman Alanları",
    copy: "Çoğu salonda alan daraldıkça motivasyon da düşer; Optimum'da bu sorunu hiç yaşamazsınız. 4.000 m²'yi bulan katımızda serbest ağırlıktan makinelere kadar her ekipmandan yeterince bulunur, en kalabalık saatte bile sırada beklemezsiniz. Şehirde bu büyüklükte bir antrenman alanına eşdeğer bulmak oldukça zordur.",
    images: [IMAGES.story.training],
    layout: "single",
    align: "left",
  },
  {
    index: "02",
    eyebrow: "Ayrı Alanlar",
    title: "Kadın ve Erkek Üyeler İçin",
    copy: "Birçok salon kadınlara sadece küçük bir köşe ayırırken, Optimum kadın üyeleri için bağımsız ve tam donanımlı bir bölüm sunar; kimsenin bakışını hissetmeden kendi başınıza özgürce çalışırsınız. Erkek bölümünde ise güç antrenmanına adanmış geniş bir alan sizi bekler. Bu netlikte bir ayrım, şehirdeki spor salonları arasında nadiren rastlanan bir standarttır.",
    images: [
      IMAGES.story.womenMain,
      IMAGES.story.womenBalls,
      IMAGES.story.womenEntrance,
    ],
    layout: "triptych",
    align: "right",
  },
  {
    index: "03",
    eyebrow: "Ataşehir Şubesi",
    title: "Optimum Ataşehir",
    copy: "Optimum'u 10 yıldır şehrin en büyük adresi yapan deneyim, şimdi Ataşehir'de yeni ve modern bir mekâna taşınıyor. 2.200 m² alanda kardiyo, serbest ağırlık ve makine bölümleri aynı çatı altında, ferah bir planla bir araya geliyor. Yeni açılan bir salonun belirsizliği yerine, kanıtlanmış bir kulübün güvencesiyle antrenmana başlarsınız.",
    images: [
      IMAGES.story.atasehirCardio,
      IMAGES.story.atasehirSalon,
      IMAGES.story.atasehirSalon2,
    ],
    layout: "triptych",
    align: "left",
  },
];

function StoryMedia({
  chapter,
  y,
  scale,
}: {
  chapter: Chapter;
  y: MotionValue<string>;
  scale: MotionValue<number>;
}) {
  const isSingle = chapter.layout === "single";

  return (
    <div
      className={
        isSingle
          ? "relative aspect-[16/10] overflow-hidden rounded-2xl [direction:ltr]"
          : "grid h-[560px] grid-cols-[1.55fr_1fr] grid-rows-2 gap-3 [direction:ltr] sm:h-[680px]"
      }
    >
      {chapter.images.map((image, imageIndex) => (
        <div
          key={image}
          className={
            isSingle
              ? "relative h-full overflow-hidden rounded-2xl"
              : imageIndex === 0
                ? "relative row-span-2 overflow-hidden rounded-2xl"
                : "relative overflow-hidden rounded-2xl"
          }
        >
          <motion.div
            style={{ y, scale }}
            className="absolute -inset-y-[12%] inset-x-0"
          >
            <Image
              src={image}
              alt={`${chapter.title} ${imageIndex + 1}`}
              fill
              loading="eager"
              quality={100}
              sizes={
                isSingle
                  ? "(max-width: 1024px) 100vw, 50vw"
                  : imageIndex === 0
                    ? "(max-width: 1024px) 60vw, 32vw"
                    : "(max-width: 1024px) 40vw, 20vw"
              }
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
        </div>
      ))}

      <span className="pointer-events-none absolute left-6 top-6 z-10 font-display text-7xl text-white/20">
        {chapter.index}
      </span>
    </div>
  );
}

function Panel({ chapter }: { chapter: Chapter }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.08]);
  const isRight = chapter.align === "right";

  return (
    <div
      ref={ref}
      className="relative flex min-h-[100svh] items-center px-6 py-24 lg:px-20"
    >
      <div
        className={`mx-auto grid w-full max-w-[1400px] items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 ${
          isRight ? "lg:[direction:rtl]" : ""
        }`}
      >
        <StoryMedia chapter={chapter} y={imgY} scale={imgScale} />

        <div className="[direction:ltr]">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-5 inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-gold"
          >
            <span className="h-px w-10 bg-gold" />
            {chapter.eyebrow}
          </motion.span>

          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease }}
            className="font-display text-[15vw] leading-[0.85] tracking-tight text-white sm:text-[10vw] lg:text-[5.5vw]"
          >
            {chapter.title}
          </motion.h2>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease, delay: 0.15 }}
            className="mt-6 max-w-lg text-justify text-lg font-light leading-relaxed text-white/65 [text-align-last:left]"
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
      {CHAPTERS.map((chapter) => (
        <Panel key={chapter.index} chapter={chapter} />
      ))}
    </section>
  );
}
