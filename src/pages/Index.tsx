import HeroSection from "@/components/ui/HeroSection";
import BenefitsSection from "@/components/ui/BenefitsSection";
import PainPointsSection from "@/components/ui/PainPointsSection";
import AboutProductSection from "@/components/ui/AboutProductSection";
import ProgramsSection from "@/components/ui/ProgramsSection";
import TestimonialsSection from "@/components/ui/TestimonialsSection";
import EmotionalBenefitsSection from "@/components/ui/EmotionalBenefitsSection";
import OfferSection from "@/components/ui/OfferSection";
import GuaranteeSection from "@/components/ui/GuaranteeSection";
import FinalCTASection from "@/components/ui/FinalCTASection";
import Footer from "@/components/ui/Footer";

import VideoHero from "@/components/ui/VideoHero";
import VideoAbout from "@/components/ui/VideoAbout";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <VideoHero /> {/* 🎥 Primeiro vídeo */}

      <BenefitsSection />
      <PainPointsSection />
      <AboutProductSection />
      <VideoAbout /> {/* 🎥 Segundo vídeo */}

      <ProgramsSection />
      <TestimonialsSection />
      <EmotionalBenefitsSection />
      <OfferSection />
      <GuaranteeSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
