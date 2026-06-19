"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IMAGES } from "@/lib/assets";

const LINKS = [
  { label: "Hakkında", href: "#story" },
  { label: "Galeri", href: "#gallery" },
  { label: "Üyelikler", href: "#membership" },
  {
    label: "Yol Tarifi",
    href: "https://www.google.com/maps/search/?api=1&query=Optimum%20Fitness%20Club%20Elaz%C4%B1%C4%9F",
    external: true,
  },
];

const MOBILE_PANEL_ID = "mobile-navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-luxe ${
        scrolled
          ? "border-b border-white/5 bg-ink/70 py-4 backdrop-blur-xl"
          : "border-b border-transparent py-7"
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <a
          href="#top"
          className="group flex items-center gap-3 text-white"
          aria-label="Optimum Fitness Club - Elazığ 1982"
        >
          <Image
            src={IMAGES.logo}
            alt="Optimum Fitness Club logosu"
            width={189}
            height={181}
            priority
            className="h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-2xl tracking-[0.18em]">
              Optimum Fitness Club
            </span>
            <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">
              Elazığ 1982
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                target={"external" in l && l.external ? "_blank" : undefined}
                rel={"external" in l && l.external ? "noopener noreferrer" : undefined}
                className="group relative text-xs font-medium uppercase tracking-[0.18em] text-white/70 transition-colors hover:text-white"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 ease-luxe group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden overflow-hidden rounded-full border border-gold/40 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold transition-colors duration-500 hover:bg-gold hover:text-ink md:inline-block"
        >
          İletişim
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Menüyü aç/kapat"
          aria-expanded={open}
          aria-controls={MOBILE_PANEL_ID}
        >
          <span
            className={`h-px w-6 bg-white transition-all duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-white transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-white transition-all duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id={MOBILE_PANEL_ID}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-6">
              {LINKS.concat({ label: "İletişim", href: "#contact" }).map(
                (l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target={"external" in l && l.external ? "_blank" : undefined}
                      rel={"external" in l && l.external ? "noopener noreferrer" : undefined}
                      onClick={() => setOpen(false)}
                      className="block py-3 font-display text-3xl tracking-wide text-white/80 hover:text-gold"
                    >
                      {l.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
