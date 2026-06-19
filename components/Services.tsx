"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/assets";

const ease = [0.22, 1, 0.36, 1] as const;

const SERVICES = [
  {
    title: "Mentörlük",
    desc: "Optimum'da antrenman tesadüfe bırakılmaz. Deneyimli ekibimiz, yıllardır binlerce üyeye eşlik ettiği bilgi birikimiyle size özel bir program kurar ve her seansta yanınızda olur. Bu, sıradan bir salonda bulamayacağınız gerçek bir rehberlik deneyimidir.",
    image: IMAGES.services.mentor,
  },
  {
    title: "Erkekler için Kalistenik",
    desc: "Burası sadece ağırlık kaldırılan bir köşe değil, bedeninizle özgürce çalıştığınız bağımsız bir antrenman bölgesi. Barfiks istasyonlarından halka sistemlerine kadar geniş donanım, hareket özgürlüğünüzü hiçbir sınıra hapsetmez. Kendi vücut kontrolünüzü ustalaştırmak isteyenler için ayrılmış bu alan, Optimum'u farklı kılan detaylardan biri.",
    image: IMAGES.services.calisthenics,
  },
  {
    title: "Kadınlara Özel Fitness Salonu",
    desc: "Sadece kadın üyelere ayrılan bu bölüm, başka hiçbir gözün olmadığı bir mahremiyet sunar; antrenmanınıza tam konsantre olabilirsiniz. Geniş ve ferah tasarımı sayesinde kalabalık hissi yaşamaz, kendi hızınızda ilerlersiniz. Bu özel önem, şehirdeki çoğu spor salonunda bulamayacağınız bir ayrıcalıktır.",
    image: IMAGES.services.womenFitness,
  },
  {
    title: "Bol Kardiyo Alanı",
    desc: "Tek sıra koşu bandıyla sınırlı kalmazsınız: geniş kardiyo katımızda aynı anda birçok farklı ekipmanı deneme özgürlüğüne sahip olursunuz. Ferah yerleşim planı, yoğun saatlerde bile sıkışmadan antrenman yapmanızı sağlar. Bu bolluk, dayanıklılığınızı geliştirirken sıkılmadan ilerlemenizin garantisidir.",
    image: IMAGES.services.cardio,
  },
  {
    title: "Alet Çeşitliliği",
    desc: "Optimum'un ekipman parkı, tek bir kas grubuna değil vücudunuzun tamamına hitap edecek şekilde planlandı. Bu çeşitlilik, antrenman programınızı yıllarca tekrar etmeden sürekli yenileyebilmenizin anahtarıdır. Profesyonel spor salonu kültürünü burada, elinizin altında bulursunuz.",
    image: IMAGES.services.equipment,
  },
  {
    title: "Ve Daha Fazlası",
    desc: "Optimum'un onlarca yıllık deneyimi artık Ataşehir'de de hayat buluyor. Aynı kurumsal güven, aynı profesyonel yaklaşım, yepyeni ve modern bir mekânda sizi bekliyor. Köklü bir kulübün parçası olmanın ayrıcalığını yeni şubemizde de yaşayabilirsiniz.",
    image: IMAGES.services.atasehir,
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
        <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl">
          <Image
            src={service.image}
            alt={service.title}
            fill
            quality={100}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
          <p className="mt-3 text-sm leading-relaxed text-white/55">
            {service.desc}
          </p>
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
            <h2 className="font-display text-6xl leading-none tracking-tight text-white lg:text-8xl">
              Optimum'da Neler Var?
            </h2>
          </div>
          <p className="max-w-sm text-white/55">
            Elazığ'da Optimum Fitness Club; antrenman, mentörlük ve ekipman
            çeşitliliğini aynı çatı altında toplar.
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
