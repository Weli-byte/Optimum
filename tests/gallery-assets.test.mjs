import { existsSync, readFileSync } from "node:fs";
import { test } from "node:test";
import assert from "node:assert/strict";

const gallery = [
  ["dumbell-1.png", "Dambıl Alanı"],
  ["kadin-fitness-1.png", "Kadınlara Özel Egzersiz Alanı"],
  ["erkek-2.png", "Erkek Salonu"],
  ["kadin-fitness-2.png", "Kadın Salonu"],
  ["kardiyo-3.png", "Kardiyo Alanı"],
];

test("gallery uses the approved Turkish labels in postfix order", () => {
  const gallerySource = readFileSync("components/Gallery.tsx", "utf8");
  const assetsSource = readFileSync("lib/assets.ts", "utf8");

  assert.match(gallerySource, /Kulübün[\s\S]*İçinde/);

  let previousIndex = -1;
  for (const [fileName, label] of gallery) {
    const imagePath = `public/images/gallery/${fileName}`;
    assert.equal(existsSync(imagePath), true, `${imagePath} should exist`);
    assert.match(gallerySource, new RegExp(label));

    const currentIndex = assetsSource.indexOf(fileName);
    assert.notEqual(currentIndex, -1, `${fileName} should be referenced`);
    assert.ok(
      currentIndex > previousIndex,
      `${fileName} should appear after the previous gallery image`,
    );
    previousIndex = currentIndex;
  }
});

test("gallery requests crisp responsive images for the expanded card", () => {
  const gallerySource = readFileSync("components/Gallery.tsx", "utf8");

  assert.doesNotMatch(
    gallerySource,
    /sizes="[^"]*20vw[^"]*"/,
    "expanded gallery images should not be requested as tiny 20vw assets",
  );
  assert.match(
    gallerySource,
    /sizes="[^"]*50vw[^"]*"/,
    "gallery images should allow a large desktop candidate for the active card",
  );
  assert.match(
    gallerySource,
    /quality=\{9[0-9]\}/,
    "gallery images should use a high image optimizer quality",
  );
});

test("WhatsApp background video is available to the site", () => {
  assert.equal(existsSync("public/videos/whatsapp-2026-06-19-122905.mp4"), true);

  const source = readFileSync("lib/assets.ts", "utf8");
  assert.match(source, /whatsapp-2026-06-19-122905\.mp4/);
});

test("services section uses localized Optimum amenities with local photos", () => {
  const servicesSource = readFileSync("components/Services.tsx", "utf8");
  const assetsSource = readFileSync("lib/assets.ts", "utf8");

  const expected = [
    ["mentor.png", "Mentörlük"],
    ["kalistenik.png", "Kalistenik"],
    ["bayan-spor-salonu.png", "Kadınlara Özel"],
    ["kardiyo-alani.png", "Kardiyo"],
    ["aletler.jpg", "Alet Çeşitliliği"],
    ["atasehir.png", "Daha Fazlası"],
  ];

  assert.match(servicesSource, /Optimum'da Neler Var\?/);

  for (const [fileName, title] of expected) {
    assert.equal(
      existsSync(`public/images/services/${fileName}`),
      true,
      `${fileName} should exist in services assets`,
    );
    assert.match(servicesSource, new RegExp(title));
    assert.match(assetsSource, new RegExp(`/images/services/${fileName}`));
  }
});

test("brand uses the supplied Optimum Fitness Club logo and local identity text", () => {
  assert.equal(
    existsSync("public/images/brand/optimum-fitness-club-logo.png"),
    true,
  );

  const assetsSource = readFileSync("lib/assets.ts", "utf8");
  const navbarSource = readFileSync("components/Navbar.tsx", "utf8");
  const heroSource = readFileSync("components/Hero.tsx", "utf8");

  assert.match(assetsSource, /optimum-fitness-club-logo\.png/);
  assert.match(navbarSource, /Optimum Fitness Club/);
  assert.match(navbarSource, /Elazığ 1982/);
  assert.match(heroSource, /Elazığ 1982/);
});

test("story flow uses Turkish Optimum club spaces instead of old template stories", () => {
  const pageSource = readFileSync("app/page.tsx", "utf8");
  const scrollStorySource = readFileSync("components/ScrollStory.tsx", "utf8");

  assert.doesNotMatch(pageSource, /Testimonials/);
  assert.doesNotMatch(pageSource, /ClubExperience/);
  assert.doesNotMatch(scrollStorySource, /Programmes engineered around you/);
  assert.doesNotMatch(scrollStorySource, /Elena Petrova/);

  for (const expected of ["Optimum", "Elazığ", "antrenman", "topluluk"]) {
    assert.match(scrollStorySource, new RegExp(expected));
  }
});
