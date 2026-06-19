# Optimum Production Rescue Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the current premium template into a safer, Turkish, conversion-ready Optimum Fitness Club Elazığ landing page.

**Architecture:** Keep the existing visual system and component structure. Replace unsupported template copy and fake proof with real local media, cautious Turkish messaging, direct contact actions, and small accessibility improvements.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS, Framer Motion, GSAP, Node test runner.

---

## Decisions

- Implement now: Turkish metadata and copy, real phone/WhatsApp/social/map actions, removal of fake stats, removal of stock before/after proof, safer Optimum services/story copy, local imagery, navbar ARIA, focus-visible styling.
- Keep with safe wording: Optimum Fitness Club, Elazığ 1982 as a brand lockup, women’s area, men’s/calistenics area, cardio, equipment variety, mentorship/antrenör support, Ataşehir branch.
- Defer until confirmed: exact address, opening hours, email display, 4.000 m², sauna/Fin hamamı, “Elazığ’ın en büyük/en donanımlı”, follower totals, satisfaction percentages, testimonials, member transformation claims.

## Task 1: Production-readiness tests

**Files:**
- Create: `tests/production-readiness.test.mjs`
- Modify: `tests/gallery-assets.test.mjs`

- [x] Write failing tests for Turkish metadata, contact actions, safe copy, local story assets, stats removal, BeforeAfter removal, navbar ARIA, and marquee cleanup.
- [x] Run `node --test tests\*.test.mjs`.
- [x] Confirm expected red state before production edits: 16 tests, 6 pass, 10 fail.

## Task 2: Content and asset safety

**Files:**
- Modify: `lib/assets.ts`
- Modify: `components/Services.tsx`
- Modify: `components/ScrollStory.tsx`
- Modify: `components/MarqueeType.tsx`

- [x] Replace story and service wording with safe Turkish copy.
- [x] Make `IMAGES.club` point to local `/images/...` assets only.
- [x] Remove `dangerouslySetInnerHTML`.
- [x] Remove risky guarantee wording.
- [x] Replace old English marquee words.
- [x] Run `node --test tests\production-readiness.test.mjs tests\gallery-assets.test.mjs`.

## Task 3: Contact, conversion, and accessibility

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/page.tsx`
- Modify: `components/Hero.tsx`
- Modify: `components/Footer.tsx`
- Modify: `components/Navbar.tsx`
- Modify: `components/Stats.tsx`
- Modify: `components/MembershipCTA.tsx`
- Modify: `app/globals.css`
- Optionally create: `lib/contact.ts`
- Optionally create: `components/MobileContactBar.tsx`

- [x] Set document language and metadata to Turkish.
- [x] Remove `BeforeAfter` from the homepage.
- [x] Replace English hero and CTA copy with Turkish Optimum positioning.
- [x] Add real phone, WhatsApp, social, and map links without dead `href="#"`.
- [x] Replace fake animated counters with factual highlights.
- [x] Add mobile menu ARIA.
- [x] Add focus-visible styling and avoid hiding the system cursor.
- [x] Run `node --test tests\production-readiness.test.mjs tests\brand-assets.test.mjs`.

## Task 4: Verification

**Files:** all changed files.

- [x] Run `node --test tests\*.test.mjs`.
- [x] Run `npm run build`.
- [x] Verify live page at `http://localhost:3000`: Turkish title/lang, no dead links, no old English template phrases, mobile contact actions visible.
