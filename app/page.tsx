import Hero from "@/components/Hero";
import PromoBar from "@/components/PromoBar";
import ScrollStory from "@/components/ScrollStory";
import Gallery from "@/components/Gallery";
import MarqueeType from "@/components/MarqueeType";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import MembershipCTA from "@/components/MembershipCTA";
import ClubInfo from "@/components/ClubInfo";
import Footer from "@/components/Footer";
import Locations from "@/components/Locations";

export default function Home() {
  return (
    <main className="relative bg-ink">
      <Hero />
      <Stats />
      <Services />
      <Gallery />
      <ScrollStory />
      <MarqueeType />
      <Pricing />
      <PromoBar />
      <MembershipCTA />
      <ClubInfo />
      <Footer />
      <Locations />
    </main>
  );
}
