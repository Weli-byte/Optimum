import Hero from "@/components/Hero";
import ScrollStory from "@/components/ScrollStory";
import Gallery from "@/components/Gallery";
import MarqueeType from "@/components/MarqueeType";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import MembershipCTA from "@/components/MembershipCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-ink">
      <Hero />
      <Stats />
      <Services />
      <Gallery />
      <ScrollStory />
      <MarqueeType />
      <MembershipCTA />
      <Footer />
    </main>
  );
}
