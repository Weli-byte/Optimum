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
      { label: "WhatsApp", href: "https://wa.me/905336888282", external: true },
      {
        label: "Yol Tarifi",
        href: "https://www.google.com/maps/search/?api=1&query=Optimum%20Fitness%20Club%20Elaz%C4%B1%C4%9F",
        external: true,
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
      },
      {
        label: "Facebook",
        href: "https://www.facebook.com/optimumfitnessclub",
        external: true,
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
          <div className="flex gap-6">
            <a href="tel:+905336888282" className="hover:text-white">
              Ara
            </a>
            <a href="https://wa.me/905336888282" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              WhatsApp
            </a>
            <a href="https://www.google.com/maps/search/?api=1&query=Optimum%20Fitness%20Club%20Elaz%C4%B1%C4%9F" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              Harita
            </a>
          </div>
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
