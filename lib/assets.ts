// Centralized media references.
// Images use Unsplash direct CDN URLs (premium fitness / lifestyle).
// Swap any URL for a local /public asset when you have brand photography.

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMAGES = {
  heroPoster: u("1534438327276-14e5300c3a48", 2000),
  training: u("1599058917212-d750089bc07e"),
  strength: u("1581009146145-b5ef050c2e1e"),
  recovery: u("1544367567-0f2fcb009e0b"),
  community: u("1571902943202-507ec2618e8f"),
  lifestyle: u("1571019613454-1cb2f99b2d8b"),

  gallery: [
    u("1534438327276-14e5300c3a48", 1200),
    u("1517836357463-d25dfeac3438", 1200),
    u("1576678927484-cc907957088c", 1200),
    u("1540497077202-7c8a3999166f", 1200),
    u("1583454110551-21f2fa2afe61", 1200),
  ],

  before: u("1581009137042-c552e485697a", 1200),
  after: u("1532384748853-8f54a8f476e2", 1200),

  club: [
    u("1558611848-73f7eb4001a1", 1400),
    u("1593079831268-3381b0db4a77", 1400),
    u("1534258936925-c58bed479fcb", 1400),
  ],

  membershipPoster: u("1517838277536-f5f99be501cd", 2000),
};

// Optional cinematic background videos. Place your own files in /public/videos
// (hero.mp4, cta.mp4) for the full effect — the poster image shows as a rich
// fallback until/unless a video file is present.
export const VIDEOS = {
  hero: "/videos/hero.mp4",
  cta: "/videos/cta.mp4",
};
