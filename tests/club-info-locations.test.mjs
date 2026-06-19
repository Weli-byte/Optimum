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
