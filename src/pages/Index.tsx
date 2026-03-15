import HeroSection from "@/components/HeroSection";
import GameplayPreview from "@/components/GameplayPreview";
import GameReveal from "@/components/GameReveal";
import FeatureHighlights from "@/components/FeatureHighlights";
import ScreenshotsCarousel from "@/components/ScreenshotsCarousel";
import SocialProof from "@/components/SocialProof";
import PlatformSection from "@/components/PlatformSection";
import FinalCTA from "@/components/FinalCTA";
import SiteFooter from "@/components/SiteFooter";
import StickyCTA from "@/components/StickyCTA";

const Index = () => {
  return (
    <main className="min-h-screen bg-game-bg overflow-x-hidden">
      <HeroSection />
      <GameplayPreview />
      <GameReveal />
      <FeatureHighlights />
      <ScreenshotsCarousel />
      <SocialProof />
      <PlatformSection />
      <FinalCTA />
      <SiteFooter />
      <StickyCTA />
    </main>
  );
};

export default Index;
