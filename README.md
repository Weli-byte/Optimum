# OPTIMUM — Cinematic Luxury Fitness Landing

An Awwwards-grade, motion-first premium gym landing experience.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** — custom dark-luxury design system
- **GSAP + ScrollTrigger** — scroll-linked typography & parallax
- **Framer Motion** — reveals, counters, transitions
- **Lenis** — buttery smooth scroll

## Design system

| Token | Value | Use |
|-------|-------|-----|
| `ink` | `#050505` | Primary background |
| `carbon` | `#0D0D0D` | Secondary background |
| `white` | `#FFFFFF` | Text |
| `gold` | `#D4AF37` | Accent |
| `bone` | `#F5F5F5` | Soft accent |

Display type: **Bebas Neue** · Body: **Inter**.

## Sections

1. Cinematic hero (video bg, parallax, scroll indicator)
2. Scroll storytelling — Training · Strength · Recovery · Community · Lifestyle
3. Cinematic expanding gallery (hover spotlight / dim)
4. Animated scroll-linked typography marquees
5. Interactive service cards (cursor-tracking glow border)
6. Animated stat counters
7. Before / After drag comparison slider
8. Club experience — alternating parallax blocks
9. Glassmorphism auto-sliding testimonials
10. Membership CTA (video bg)
11. Luxury minimal footer

Plus: custom cursor follower + glow, scroll progress bar, smooth anchor nav,
reduced-motion support.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
```

Build: `npm run build && npm start`

## Media

Images stream from Unsplash (see `lib/assets.ts`). Add `public/videos/hero.mp4`
and `public/videos/cta.mp4` for the cinematic video backgrounds — until then a
rich poster image is shown. Swap any URL in `lib/assets.ts` for your own brand
photography.
