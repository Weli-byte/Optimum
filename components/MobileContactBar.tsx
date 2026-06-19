const ACTIONS = [
  { label: "Ara", href: "tel:+905336888282", external: false },
  { label: "WhatsApp", href: "https://wa.me/905336888282", external: true },
  {
    label: "Yol Tarifi",
    href: "https://www.google.com/maps/search/?api=1&query=Optimum%20Fitness%20Club%20Elaz%C4%B1%C4%9F",
    external: true,
  },
] as const;

export default function MobileContactBar() {
  return (
    <nav
      aria-label="Hızlı iletişim"
      className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-3 overflow-hidden rounded-2xl border border-white/10 bg-ink/95 shadow-2xl backdrop-blur-xl md:hidden"
    >
      {ACTIONS.map((action) => (
        <a
          key={action.label}
          href={action.href}
          target={action.external ? "_blank" : undefined}
          rel={action.external ? "noopener noreferrer" : undefined}
          className="border-r border-white/10 px-2 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.08em] text-white last:border-r-0 hover:bg-gold hover:text-ink"
        >
          {action.label}
        </a>
      ))}
    </nav>
  );
}
