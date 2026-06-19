# Scroll Story Photo Layout Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the three ScrollStory chapters with the user-approved Optimum, women/men, and Ataşehir photo sets.

**Architecture:** Add dedicated local story assets in `public/images/story`. Extend each chapter with either a single wide image or a three-image collage while preserving the existing alternating text layout and `next/image` optimization.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS, Framer Motion, Node test runner.

---

### Task 1: Lock the asset mapping

**Files:**
- Modify: `tests/production-readiness.test.mjs`

- [x] Add assertions for all seven approved local story images and both layout modes.
- [x] Run `node --test tests\production-readiness.test.mjs` and confirm the new test fails.

### Task 2: Add assets and collage layout

**Files:**
- Modify: `lib/assets.ts`
- Modify: `components/ScrollStory.tsx`
- Add: `public/images/story/*`

- [x] Copy the approved images into `public/images/story`.
- [x] Add the story image paths to `IMAGES.story`.
- [x] Render chapter 1 as one wide image.
- [x] Render chapters 2 and 3 as a main image plus a two-image collage.
- [x] Keep every image optimized through `next/image`.

### Task 3: Verify

- [x] Run `node --test tests\*.test.mjs`.
- [x] Run `npm run build`.
- [x] Verify the three story chapters at `http://localhost:3000`.
