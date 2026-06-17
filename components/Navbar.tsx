"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LINKS = [
  { label: "Story", href: "#story" },
  { label: "Gallery", href: "#gallery" },
  { label: "Services", href: "#services" },
  { label: "Club", href: "#club" },
  { label: "Members", href: "#testimonials" },
];

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
          className="group flex items-baseline gap-1 font-display text-2xl tracking-[0.2em] text-white"
        >
          OPTIMUM
          <span className="text-gold transition-transform duration-500 group-hover:translate-x-1">
            .
          </span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-xs font-medium uppercase tracking-[0.18em] text-white/70 transition-colors hover:text-white"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 ease-luxe group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#membership"
          className="hidden overflow-hidden rounded-full border border-gold/40 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold transition-colors duration-500 hover:bg-gold hover:text-ink md:inline-block"
        >
          Join Now
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
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
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-6">
              {LINKS.concat({ label: "Join Now", href: "#membership" }).map(
                (l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
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
