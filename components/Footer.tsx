"use client";

const COLUMNS = [
  {
    title: "Club",
    links: ["The Story", "Membership", "Coaches", "Careers"],
  },
  {
    title: "Train",
    links: ["Strength", "Functional", "Recovery", "Classes"],
  },
  {
    title: "Connect",
    links: ["Instagram", "TikTok", "YouTube", "LinkedIn"],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-ink pt-20">
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
              A cinematic luxury fitness club. Elite training, premium recovery
              and a community that refuses average.
            </p>
            <a
              href="#membership"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-gold/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold transition-colors duration-500 hover:bg-gold hover:text-ink"
            >
              Book A Free Trial
            </a>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="mb-5 text-xs uppercase tracking-[0.25em] text-white/40">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      data-cursor="hover"
                      className="group inline-flex items-center text-sm text-white/70 transition-colors hover:text-gold"
                    >
                      <span className="mr-0 h-px w-0 bg-gold transition-all duration-500 ease-luxe group-hover:mr-2 group-hover:w-4" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 py-8 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} OPTIMUM Fitness Club. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Cookies
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
