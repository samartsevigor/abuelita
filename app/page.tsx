import { AwardSection } from "@/components/AwardSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { ReservationsCTA } from "@/components/ReservationsCTA";
import { ReviewsSection } from "@/components/ReviewsSection";
import { VibeSection } from "@/components/VibeSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AwardSection />
        <MenuSection />
        <VibeSection />
        <ReviewsSection />
        <ReservationsCTA />
      </main>
      <Footer />
    </>
  );
}
