
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToOffer = () => {
    const offerSection = document.getElementById('oferta');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-pilates-lilac-50 via-white to-pilates-purple-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pilates-mint-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-10 w-40 h-40 bg-pilates-purple-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-pilates-rose-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[80vh]">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Diga Adeus ao Sedentarismo e{" "}
              <span className="text-pilates-purple-600">Transforme Seu Corpo</span>{" "}
              Sem Sair de Casa!
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              Entre para o <strong className="text-pilates-purple-600">Clube das Pilateiras</strong> — 
              A plataforma definitiva para mulheres que querem se manter ativas, saudáveis e 
              de bem com o corpo… treinando no conforto de casa!
            </p>

            <Button
              onClick={scrollToOffer}
              size="lg"
              className="bg-pilates-purple-600 hover:bg-pilates-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Quero Fazer Parte do Clube das Pilateiras
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Hero Image/Illustration */}
          <div className="flex-1 relative animate-scale-in">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-pilates-purple-400 to-pilates-mint-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="w-full h-80 bg-gradient-to-br from-pilates-lilac-100 to-pilates-mint-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-pilates-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-3xl">🧘‍♀️</span>
                    </div>
                    <p className="text-pilates-purple-600 font-semibold">Pilates em Casa</p>
                    <p className="text-gray-500 text-sm mt-2">Transformação Real</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-pilates-purple-400" />
      </div>
    </section>
  );
};

export default HeroSection;
