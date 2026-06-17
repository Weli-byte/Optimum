# Cinematic background videos

Drop two MP4 files here for the full experience:

- `hero.mp4` — ~30s cinematic luxury gym loop (Section 1, the hero).
- `cta.mp4` — cinematic loop for the "Ready To Transform?" membership section.

Recommended encode for web autoplay:

```
ffmpeg -i source.mov -vf "scale=1920:-2" -c:v libx264 -crf 23 -preset slow \
  -pix_fmt yuv420p -an -movflags +faststart hero.mp4
```

Until you add these files, a high-resolution poster image is shown in their
place (configured in `lib/assets.ts`), so the page still looks complete.

Free cinematic sources: Mixkit, Coverr, Pexels Videos.
