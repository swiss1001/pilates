import { useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToOffer = () => {
    const offerSection = document.getElementById("oferta");
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/lib/js/smartplayer/v1/sdk.min.js";
    script.setAttribute("data-id", "65dfc9439d07100008c4f625");
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <section className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-pilates-lilac-50 via-white to-pilates-purple-50 pb-0">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pilates-mint-200 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-10 w-40 h-40 bg-pilates-purple-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-pilates-rose-200 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10 max-w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 min-h-[80vh]">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in order-2 lg:order-1 w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight px-2 sm:px-0">
              Diga Adeus ao Sedentarismo e{" "}
              <span className="text-pilates-purple-600">Transforme Seu Corpo</span>{" "}
              Sem Sair de Casa!
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 px-4 sm:px-0">
              Entre para o <strong className="text-pilates-purple-600">Clube das Pilateiras</strong> — 
              A plataforma definitiva para mulheres que querem se manter ativas, saudáveis e 
              de bem com o corpo… treinando no conforto de casa!
            </p>

            <div className="mb-8 lg:mb-0 px-4 sm:px-0 overflow-hidden">
              <Button
                onClick={scrollToOffer}
                size="lg"
                className="bg-pilates-purple-600 hover:bg-pilates-purple-700 text-white px-6 py-4 text-base sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto max-w-full text-center"
              >
                <span className="whitespace-normal break-words">
                  Quero entrar no<br /> Clube das Pilateiras
                </span>
                <ArrowDown className="ml-2 h-5 w-5 shrink-0" />
              </Button>
            </div>
          </div>

          {/* Video */}
          <div className="flex-1 animate-fade-in order-1 lg:order-2 w-full px-4 sm:px-0">
            <div className="w-full max-w-full" style={{ margin: "0 auto" }}>
              <div
                style={{
                  position: "relative",
                  paddingTop: "56.25%",
                  overflow: "hidden",
                  width: "100%",
                  height: 0,
                }}
              >
                <iframe
                  frameBorder="0"
                  allowFullScreen
                  src="https://scripts.converteai.net/1b3eff3e-0644-41a2-8abf-b6b15edc9f1c/players/65dfc9439d07100008c4f625/embed.html"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  referrerPolicy="origin"
                ></iframe>
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


