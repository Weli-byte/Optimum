import type { ReactNode } from "react";

const SOCIAL_ICONS: Record<string, ReactNode> = {
  instagram: (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]">
      <defs>
        <radialGradient id="ig-gradient" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="5.5" fill="url(#ig-gradient)" />
      <rect
        x="6.2"
        y="6.2"
        width="11.6"
        height="11.6"
        rx="3.6"
        fill="none"
        stroke="#fff"
        strokeWidth="1.4"
      />
      <circle cx="12" cy="12" r="3.1" fill="none" stroke="#fff" strokeWidth="1.4" />
      <circle cx="16.1" cy="7.9" r="0.9" fill="#fff" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]">
      <circle cx="12" cy="12" r="10" fill="#1877F2" />
      <path
        d="M13.6 21v-6.7h2.25l.34-2.6h-2.59V9.85c0-.75.21-1.27 1.29-1.27h1.38V6.24c-.24-.03-1.06-.1-2.02-.1-2 0-3.37 1.22-3.37 3.46v1.93H8.6v2.6h2.28V21h2.72z"
        fill="#fff"
      />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]">
      <circle cx="12" cy="12" r="10" fill="#25D366" />
      <path
        d="M16.4 7.6a5.9 5.9 0 0 0-9.34 7.1l-.66 2.4 2.46-.64a5.9 5.9 0 0 0 7.54-9.86Zm-4.4 9.04a4.9 4.9 0 0 1-2.5-.69l-.18-.1-1.74.45.46-1.69-.12-.18a4.9 4.9 0 1 1 4.08 2.21Zm2.69-3.67c-.15-.07-.87-.43-1-.48-.14-.05-.24-.07-.34.07-.1.15-.39.48-.48.58-.09.1-.18.11-.33.04-.96-.45-1.59-.81-2.23-1.83-.17-.29.17-.27.49-.9.05-.1.03-.2-.02-.28-.05-.07-.39-.94-.53-1.28-.14-.34-.28-.29-.39-.3-.1 0-.22 0-.34 0-.12 0-.31.05-.48.23-.16.18-.62.61-.62 1.48 0 .87.63 1.71.72 1.83.09.12 1.21 1.86 2.96 2.53 1.46.55 1.76.44 2.08.41.32-.03 1-.42 1.14-.82.14-.4.14-.74.1-.82-.04-.07-.13-.11-.28-.18Z"
        fill="#fff"
      />
    </svg>
  ),
};

const COLUMNS = [
  {
    title: "Kulüp",
    links: [
      { label: "Hakkında", href: "#story" },
      { label: "Üyelikler", href: "#membership" },
      { label: "Galeri", href: "#gallery" },
    ],
  },
  {
    title: "İletişim",
    links: [
      { label: "0533 688 82 82", href: "tel:+905336888282" },
      {
        label: "WhatsApp",
        href: "https://wa.me/905336888282",
        external: true,
        icon: "whatsapp",
      },
    ],
  },
  {
    title: "Sosyal",
    links: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/optimum_fitness_elazig/",
        external: true,
        icon: "instagram",
      },
      {
        label: "Facebook",
        href: "https://www.facebook.com/optimumfitnessclub",
        external: true,
        icon: "facebook",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-white/5 bg-ink pb-20 pt-20 md:pb-0"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a
              href="#top"
              className="font-display text-4xl tracking-[0.2em] text-white"
            >
              OPTIMUM<span className="text-gold">.</span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
              Optimum Fitness Club · Elazığ 1982. Spor salonu, grup dersleri ve
              üyelik bilgileri için bize ulaşın.
            </p>
            <a
              href="https://wa.me/905336888282"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-gold/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold transition-colors duration-500 hover:bg-gold hover:text-ink"
            >
              WhatsApp'tan Yaz
            </a>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="mb-5 text-xs uppercase tracking-[0.25em] text-white/40">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      data-cursor="hover"
                      className="group inline-flex items-center text-sm text-white/70 transition-colors hover:text-gold"
                    >
                      <span className="mr-0 h-px w-0 bg-gold transition-all duration-500 ease-luxe group-hover:mr-2 group-hover:w-4" />
                      {"icon" in link && link.icon && (
                        <span className="mr-2 inline-flex shrink-0 items-center transition-opacity duration-500 group-hover:opacity-80">
                          {SOCIAL_ICONS[link.icon]}
                        </span>
                      )}
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 py-8 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Optimum Fitness Club. Tüm hakları saklıdır.</p>
        </div>
      </div>

      {/* Oversized brand watermark */}
      <div className="pointer-events-none select-none overflow-hidden">
        <p className="-mb-6 whitespace-nowrap text-center font-display text-[26vw] leading-none tracking-tight text-white/[0.03] lg:-mb-12">
          OPTIMUM
        </p>
      </div>
    </footer>
  );
}
