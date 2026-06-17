import Hero from "@/components/Hero";
import ScrollStory from "@/components/ScrollStory";
import Gallery from "@/components/Gallery";
import MarqueeType from "@/components/MarqueeType";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import BeforeAfter from "@/components/BeforeAfter";
import ClubExperience from "@/components/ClubExperience";
import Testimonials from "@/components/Testimonials";
import MembershipCTA from "@/components/MembershipCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-ink">
      <Hero />
      <ScrollStory />
      <Gallery />
      <MarqueeType />
      <Services />
      <Stats />
      <BeforeAfter />
      <ClubExperience />
      <Testimonials />
      <MembershipCTA />
      <Footer />
    </main>
  );
}
