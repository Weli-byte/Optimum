import { existsSync, readFileSync } from "node:fs";
import { test } from "node:test";
import assert from "node:assert/strict";

test("navbar uses the local Optimum Fitness Club brand logo", () => {
  assert.equal(
    existsSync("public/images/brand/optimum-fitness-club-logo.png"),
    true,
    "brand logo asset should exist",
  );

  const assetsSource = readFileSync("lib/assets.ts", "utf8");
  const navbarSource = readFileSync("components/Navbar.tsx", "utf8");

  assert.match(assetsSource, /\/images\/brand\/optimum-fitness-club-logo\.png/);
  assert.match(navbarSource, /IMAGES\.logo/);
  assert.match(navbarSource, /Optimum Fitness Club/);
  assert.match(navbarSource, /Elazığ 1982/);
});

test("navbar uses concise Turkish navigation labels", () => {
  const navbarSource = readFileSync("components/Navbar.tsx", "utf8");

  for (const label of ["Hakkında", "Galeri", "Üyelikler", "İletişim"]) {
    assert.match(navbarSource, new RegExp(label));
  }

  for (const oldLabel of ["Story", "Gallery", "Services", "Club"]) {
    assert.doesNotMatch(
      navbarSource,
      new RegExp(`label: "${oldLabel}"`),
    );
  }
  assert.doesNotMatch(navbarSource, />\\s*Join Now\\s*</);
});
