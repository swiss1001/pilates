
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import PainPointsSection from "@/components/PainPointsSection";
import AboutProductSection from "@/components/AboutProductSection";
import ProgramsSection from "@/components/ProgramsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EmotionalBenefitsSection from "@/components/EmotionalBenefitsSection";
import OfferSection from "@/components/OfferSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <BenefitsSection />
      <PainPointsSection />
      <AboutProductSection />
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
