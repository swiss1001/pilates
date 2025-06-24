
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import PainPointsSection from "@/components/PainPointsSection";
import AboutProductSection from "@/components/AboutProductSection";
import ProgramsSection from "@/components/ProgramsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <BenefitsSection />
      <PainPointsSection />
      <AboutProductSection />
      <ProgramsSection />
    </div>
  );
};

export default Index;
