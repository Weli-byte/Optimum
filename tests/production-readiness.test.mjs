import { readFileSync } from "node:fs";
import { test } from "node:test";
import assert from "node:assert/strict";

const read = (path) => readFileSync(path, "utf8");

test("layout uses Turkish document language and Optimum metadata", () => {
  const source = read("app/layout.tsx");

  assert.match(source, /<html[^>]+lang="tr"/);
  assert.match(source, /title:\s*["'`][^"'`]*Optimum Fitness Club/i);
  assert.match(source, /description:\s*["'`][^"'`]*(Elazığ|Elazig|Optimum)/i);

  for (const oldTemplateCopy of [
    "Forge Your Next Version",
    "Elite training",
    "Premium experience",
    "No limits",
    "cinematic luxury fitness club",
  ]) {
    assert.doesNotMatch(source, new RegExp(oldTemplateCopy, "i"));
  }
});

test("hero uses Turkish CTA and copy instead of the old Forge template", () => {
  const source = read("components/Hero.tsx");

  for (const oldCopy of [
    "FORGE YOUR",
    "NEXT VERSION",
    "Start Your Journey",
    "Elite Training",
    "No Limits",
  ]) {
    assert.doesNotMatch(source, new RegExp(oldCopy, "i"));
  }

  assert.match(
    source,
    /(Üyelik|İletişim|Katıl|Başla|Keşfet|Kulübü|Antrenman|Elazığ)/,
    "hero should contain Turkish-facing CTA or value copy",
  );
});

test("footer exposes real contact, social, and map actions without dead links", () => {
  const source = read("components/Footer.tsx");

  assert.doesNotMatch(source, /href="#"/);
  assert.match(source, /href=["']tel:\+905336888282["']/);
  assert.match(source, /wa\.me\/905336888282/);
  assert.match(source, /facebook\.com\/optimumfitnessclub/);
  assert.match(source, /instagram\.com\/optimum_fitness_elazig/);
  assert.match(source, /(google\.com\/maps|maps\.app\.goo\.gl|maps\/search)/i);
});

test("stats do not use fake counters or English template labels", () => {
  const source = read("components/Stats.tsx");

  for (const fakeCounter of ["5000", "50", "20", "10000"]) {
    assert.doesNotMatch(source, new RegExp(`value:\\s*${fakeCounter}\\b`));
  }

  for (const englishLabel of [
    "Members",
    "Weekly Classes",
    "Elite Coaches",
    "Transformations",
  ]) {
    assert.doesNotMatch(source, new RegExp(englishLabel));
  }
});

test("home page does not render BeforeAfter", () => {
  const source = read("app/page.tsx");

  assert.doesNotMatch(source, /import\s+BeforeAfter\s+from/);
  assert.doesNotMatch(source, /<BeforeAfter\s*\/>/);
});

test("scroll story uses safe Turkish local-club copy and local assets", () => {
  const storySource = read("components/ScrollStory.tsx");
  const assetsSource = read("lib/assets.ts");

  for (const unsupportedClaim of [
    "2,000m²",
    "2,000m",
    "Cryotherapy",
    "cryotherapy",
    "contrast pools",
    "specialty coffee",
    "curated workspaces",
  ]) {
    assert.doesNotMatch(storySource, new RegExp(unsupportedClaim, "i"));
  }

  assert.doesNotMatch(storySource, /unsplash/i);
  assert.doesNotMatch(assetsSource, /club:\s*\[[\s\S]*?u\(/);
  assert.match(assetsSource, /club:\s*\[[\s\S]*?\/images\//);
});

test("services avoid unsafe HTML injection and risky guarantee wording", () => {
  const source = read("components/Services.tsx");

  assert.doesNotMatch(source, /dangerouslySetInnerHTML/);

  for (const riskyCopy of [
    "sıra bekletmeyen",
    "sira bekletmeyen",
    "güvenli",
    "guvenli",
    "1982 ruhuyla",
  ]) {
    assert.doesNotMatch(source, new RegExp(riskyCopy, "i"));
  }
});

test("navbar mobile menu button exposes expanded state and controlled panel", () => {
  const source = read("components/Navbar.tsx");

  assert.match(source, /aria-expanded=\{open\}/);
  assert.match(source, /aria-controls=/);
});

test("marquee type does not use the old English training sequence", () => {
  const source = read("components/MarqueeType.tsx");

  for (const oldWord of ["TRAIN", "RECOVER", "REPEAT", "DISCIPLINE"]) {
    assert.doesNotMatch(source, new RegExp(`"${oldWord}"`));
  }
});

test("hero provides reduced-motion and video playback controls", () => {
  const source = read("components/Hero.tsx");

  assert.match(source, /useReducedMotion/);
  assert.match(source, /aria-pressed=/);
  assert.match(source, /(Videoyu Duraklat|Videoyu Oynat)/);
});

test("gallery labels and expansion work for touch and keyboard users", () => {
  const source = read("components/Gallery.tsx");

  assert.match(source, /tabIndex=\{0\}/);
  assert.match(source, /onFocus=/);
  assert.match(source, /onBlur=/);
  assert.match(source, /opacity-100/);
});

test("rendered club imagery uses Next image optimization", () => {
  const gallery = read("components/Gallery.tsx");
  const services = read("components/Services.tsx");
  const story = read("components/ScrollStory.tsx");

  assert.match(gallery, /from ["']next\/image["']/);
  assert.match(services, /from ["']next\/image["']/);
  assert.match(story, /from ["']next\/image["']/);
  assert.doesNotMatch(story, /<motion\.img/);
});

test("service cards avoid fake controls and navbar alt text is Turkish", () => {
  const services = read("components/Services.tsx");
  const navbar = read("components/Navbar.tsx");

  assert.doesNotMatch(services, />\s*Keşfet\s*</);
  assert.match(navbar, /alt=["']Optimum Fitness Club logosu["']/);
});

test("scroll story uses the approved single and collage photo sets", () => {
  const story = read("components/ScrollStory.tsx");
  const assets = read("lib/assets.ts");

  for (const asset of [
    "antrenman-alani.jpg",
    "kadin-fitness-ana.png",
    "kadin-fitness-toplar.png",
    "bayan-spor-salonu.png",
    "atasehir-kardiyo.jpg",
    "atasehir-salon.jpg",
    "atasehir-salon-2.jpg",
  ]) {
    assert.match(assets, new RegExp(asset.replace(".", "\\.")));
  }

  assert.match(story, /layout:\s*"single"/);
  assert.match(story, /layout:\s*"triptych"/);
  assert.match(story, /chapter\.images\.map/);
  assert.match(story, /loading="eager"/);
  assert.doesNotMatch(story, /clipPath:\s*"inset\(100%/);
});
