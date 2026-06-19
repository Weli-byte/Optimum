// Centralized media references.
// Stock URLs are kept only as temporary non-club fallbacks.
// Real Optimum club/story/service imagery should come from /public/images.

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMAGES = {
  logo: "/images/brand/optimum-fitness-club-logo.png",
  heroPoster: "/images/gallery/dumbell-1.png",
  training: u("1599058917212-d750089bc07e"),
  strength: u("1581009146145-b5ef050c2e1e"),
  recovery: u("1544367567-0f2fcb009e0b"),
  community: u("1571902943202-507ec2618e8f"),
  lifestyle: u("1571019613454-1cb2f99b2d8b"),

  // Secondary cinematic / people-training shots for the story chapters.
  trainingAlt: u("1605296867304-46d5465a13f1"),
  strengthAlt: u("1574680096145-d05b474e2155"),
  recoveryAlt: u("1599058945522-28d584b6f0ff"),
  communityAlt: u("1518611012118-696072aa579a"),
  lifestyleAlt: u("1594381898411-846e7d193883"),

  gallery: [
    "/images/gallery/dumbell-1.png",
    "/images/gallery/kadin-fitness-1.png",
    "/images/gallery/erkek-2.png",
    "/images/gallery/kadin-fitness-2.png",
    "/images/gallery/kardiyo-3.png",
  ],
  groupClasses: u("1517836357463-d25dfeac3438", 1200),
  services: {
    mentor: "/images/services/mentor.png",
    calisthenics: "/images/services/kalistenik.png",
    womenFitness: "/images/services/bayan-spor-salonu.png",
    cardio: "/images/services/kardiyo-alani.png",
    equipment: "/images/services/aletler.jpg",
    atasehir: "/images/services/atasehir.png",
  },
  story: {
    training: "/images/story/antrenman-alani.jpg",
    womenMain: "/images/story/kadin-fitness-ana.png",
    womenBalls: "/images/story/kadin-fitness-toplar.png",
    womenEntrance: "/images/story/bayan-spor-salonu.png",
    atasehirCardio: "/images/story/atasehir-kardiyo.jpg",
    atasehirSalon: "/images/story/atasehir-salon.jpg",
    atasehirSalon2: "/images/story/atasehir-salon-2.jpg",
  },

  before: u("1581009137042-c552e485697a", 1200),
  after: u("1532384748853-8f54a8f476e2", 1200),

  membershipPoster: "/images/services/atasehir.png",

  club: [
    "/images/gallery/dumbell-1.png",
    "/images/gallery/kardiyo-3.png",
    "/images/gallery/kadin-fitness-2.png",
  ],
};

// Optional cinematic background videos. Place your own files in /public/videos
// (hero.mp4, cta.mp4) for the full effect — the poster image shows as a rich
// fallback until/unless a video file is present.
export const VIDEOS = {
  hero: "/videos/whatsapp-2026-06-19-122905.mp4",
  cta: "/videos/whatsapp-2026-06-19-122905.mp4",
};
