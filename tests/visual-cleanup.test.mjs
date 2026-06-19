import { readFileSync } from "node:fs";
import { test } from "node:test";
import assert from "node:assert/strict";

const read = (path) => readFileSync(path, "utf8");

test("requested descriptive copy is removed from gallery and services", () => {
  const gallery = read("components/Gallery.tsx");
  const services = read("components/Services.tsx");

  assert.doesNotMatch(
    gallery,
    /Dambıldan kardiyoya,\s*kadın ve erkek salonlarına uzanan\s*OPTIMUM deneyimi\./,
  );
  assert.doesNotMatch(
    services,
    /Elazığ'da Optimum Fitness Club;\s*antrenman, mentörlük ve ekipman\s*çeşitliliğini aynı çatı altında toplar\./,
  );
});

test("location map is always colorful instead of grayscale-on-hover", () => {
  const locations = read("components/Locations.tsx");

  assert.doesNotMatch(locations, /\bgrayscale\b/);
  assert.doesNotMatch(locations, /group-hover:grayscale-0/);
});

test("floating WhatsApp button is larger and sits farther from the edges", () => {
  const source = read("components/WhatsAppFloatButton.tsx");

  assert.match(source, /bottom:\s*"56px"/);
  assert.match(source, /right:\s*"56px"/);
  assert.match(source, /h-16 w-16/);
  assert.match(source, /h-9 w-9/);
});
