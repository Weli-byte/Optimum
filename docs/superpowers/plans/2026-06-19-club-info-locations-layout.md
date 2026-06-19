# Club Info and Locations Layout Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Move the existing branch location cards directly below the club information cards, replace the oversized visit heading with a small “Konumlarımız” label, and preserve all existing map behavior and Turkish content.

**Architecture:** Keep `ClubInfo` as the single full-width section wrapper and render `Locations` inside it after `INFO_CARDS`. Refactor `Locations` into a focused child block that owns branch data, map links, animations, and responsive branch cards without adding another section shell.

**Tech Stack:** Next.js 14 App Router, React 18, TypeScript, Tailwind CSS, Framer Motion, Node.js built-in test runner.

---

## File Structure

- Create `tests/club-info-locations.test.mjs`: source-level regression tests for page composition, headings, content, and map behavior.
- Modify `components/Locations.tsx`: remove the independent `<section>` wrapper and oversized heading; render a compact “Konumlarımız” label plus the existing branch grid.
- Modify `components/ClubInfo.tsx`: import and render `Locations` immediately after the information card grid.
- Modify `app/page.tsx`: remove the top-level `Locations` import and render call.

### Task 1: Add layout regression coverage

**Files:**
- Create: `tests/club-info-locations.test.mjs`
- Test: `tests/club-info-locations.test.mjs`

- [ ] **Step 1: Write the failing regression tests**

Create the file with:

```js
import { readFileSync } from "node:fs";
import { test } from "node:test";
import assert from "node:assert/strict";

const read = (path) => readFileSync(path, "utf8");

test("club info owns the locations block and the page does not render it separately", () => {
  const page = read("app/page.tsx");
  const clubInfo = read("components/ClubInfo.tsx");

  assert.doesNotMatch(page, /import\s+Locations\s+from/);
  assert.doesNotMatch(page, /<Locations\s*\/>/);
  assert.match(clubInfo, /import\s+Locations\s+from/);
  assert.match(clubInfo, /<Locations\s*\/>/);

  const cardsIndex = clubInfo.indexOf("INFO_CARDS.map");
  const locationsIndex = clubInfo.indexOf("<Locations");
  assert.ok(cardsIndex >= 0);
  assert.ok(locationsIndex > cardsIndex);
});

test("locations use a compact Turkish label without the old visit heading", () => {
  const locations = read("components/Locations.tsx");

  assert.match(locations, /Konumlarımız/);
  assert.doesNotMatch(locations, /Bizi\s*[\s\S]*Ziyaret Edin/);
  assert.doesNotMatch(locations, /<section/);
});

test("club and branch details remain available", () => {
  const clubInfo = read("components/ClubInfo.tsx");
  const locations = read("components/Locations.tsx");

  for (const expected of [
    "İletişim",
    "Çalışma Saatleri",
    "Sosyal Kanıt",
    "Ataşehir Şubesi",
    "7.669 takipçi",
    "3,4K takipçi",
    "%98",
    "2.200 m²",
  ]) {
    assert.match(clubInfo, new RegExp(expected));
  }

  assert.match(locations, /Elazığ Ana Şube/);
  assert.match(locations, /Ataşehir Şubesi/);
  assert.match(locations, /output=embed/);
  assert.match(locations, /Haritada Aç/);
  assert.match(locations, /Yakında Açılıyor/);
});
```

- [ ] **Step 2: Run the new test and verify RED**

Run:

```powershell
node --test tests\club-info-locations.test.mjs
```

Expected: FAIL because `app/page.tsx` still imports/renders `Locations`, `ClubInfo` does not render it, and `Locations` still contains the old section heading.

- [ ] **Step 3: Commit the failing test**

```powershell
git add -- tests/club-info-locations.test.mjs
git commit -m "test: cover club info locations layout"
```

### Task 2: Nest locations below the information cards

**Files:**
- Modify: `components/ClubInfo.tsx`
- Modify: `components/Locations.tsx`
- Modify: `app/page.tsx`
- Test: `tests/club-info-locations.test.mjs`

- [ ] **Step 1: Render `Locations` from `ClubInfo`**

Add:

```tsx
import Locations from "@/components/Locations";
```

After the closing element of the `INFO_CARDS` grid, add:

```tsx
<Locations />
```

- [ ] **Step 2: Remove the separate page-level locations section**

Delete from `app/page.tsx`:

```tsx
import Locations from "@/components/Locations";
```

Delete the final page-level render:

```tsx
<Locations />
```

- [ ] **Step 3: Convert `Locations` to an embedded block**

Keep the existing imports, constants, and `BRANCHES` data, then replace the complete `Locations` function with:

```tsx
export default function Locations() {
  return (
    <div className="mt-20 border-t border-white/8 pt-14 lg:mt-24 lg:pt-16">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-gold"
      >
        <span className="h-px w-10 bg-gold" />
        Konumlarımız
      </motion.span>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {BRANCHES.map((branch, i) => (
          <motion.div
            key={branch.name}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease, delay: i * 0.1 }}
            className="overflow-hidden rounded-2xl border border-white/8 bg-ink"
          >
            <div className="p-7">
              <h3 className="font-display text-2xl tracking-wide text-white">
                {branch.name}
              </h3>
              <p className="mt-2 text-sm font-light text-white/55">
                {branch.address}
              </p>
            </div>

            {branch.embedSrc ? (
              <a
                href={branch.mapsHref!}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="group relative block h-64 w-full overflow-hidden border-t border-white/8"
              >
                <iframe
                  src={branch.embedSrc}
                  title={`${branch.name} Harita`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="pointer-events-none h-full w-full grayscale transition-all duration-500 ease-luxe group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-ink/10 transition-opacity duration-500 group-hover:opacity-0" />
              </a>
            ) : (
              <div className="flex h-64 w-full items-center justify-center border-t border-white/8 bg-ink/60">
                <span className="rounded-full border border-gold/40 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Yakında Açılıyor
                </span>
              </div>
            )}

            <div className="p-7 pt-5">
              {branch.mapsHref ? (
                <a
                  href={branch.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  className="group relative inline-flex overflow-hidden rounded-full bg-gold px-7 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink"
                >
                  <span className="relative z-10">Haritada Aç</span>
                  <span className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 ease-luxe group-hover:translate-x-0" />
                </a>
              ) : (
                <span className="inline-flex rounded-full border border-white/15 px-7 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                  Haritada Aç
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Run the focused regression test and verify GREEN**

Run:

```powershell
node --test tests\club-info-locations.test.mjs
```

Expected: 3 tests pass.

- [ ] **Step 5: Commit the implementation**

```powershell
git add -- app/page.tsx components/ClubInfo.tsx components/Locations.tsx
git commit -m "Move locations below club information"
```

### Task 3: Verify the complete site

**Files:**
- Verify: `tests/*.test.mjs`
- Verify: production build

- [ ] **Step 1: Run all source-level tests**

Run:

```powershell
node --test tests\*.test.mjs
```

Expected: all tests pass with zero failures.

- [ ] **Step 2: Run the production build**

Run:

```powershell
npm run build
```

Expected: build exits with code 0 and the `/` route compiles successfully.

- [ ] **Step 3: Inspect the final diff**

Run:

```powershell
git diff HEAD~2 -- app/page.tsx components/ClubInfo.tsx components/Locations.tsx tests/club-info-locations.test.mjs
git status --short
```

Expected: only the approved layout/test files are included in these commits; pre-existing unrelated changes to `components/Hero.tsx`, the video asset, and `tests/video-performance.test.mjs` remain untouched.

- [ ] **Step 4: Perform browser verification**

Start or reuse the local development server and verify:

- The large “Bizi Ziyaret Edin” heading is absent.
- “Konumlarımız” appears beneath the four information cards.
- Elazığ and Ataşehir cards are directly below the label.
- Desktop uses two branch columns; mobile uses one.
- Elazığ map and “Haritada Aç” remain usable.
- No browser console errors appear.

- [ ] **Step 5: Commit any test-only corrections if required**

If verification requires a correction, repeat RED/GREEN first, then stage only the approved files and commit with:

```powershell
git add -- app/page.tsx components/ClubInfo.tsx components/Locations.tsx tests/club-info-locations.test.mjs
git commit -m "Fix club information locations regression"
```
