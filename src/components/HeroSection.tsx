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
    <section className="relative overflow-x-hidden bg-gradient-to-br from-pilates-lilac-50 via-white to-pilates-purple-50 py-16 lg:py-24">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pilates-mint-200 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-10 w-40 h-40 bg-pilates-purple-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-pilates-rose-200 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-screen-xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Texto */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Diga Adeus ao Sedentarismo e{" "}
              <span className="text-pilates-purple-600">Transforme Seu Corpo</span>{" "}
              Sem Sair de Casa!
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto lg:mx-0">
              Entre para o <strong className="text-pilates-purple-600">Clube das Pilateiras</strong> — A plataforma definitiva para mulheres que querem se manter ativas, saudáveis e de bem com o corpo… treinando no conforto de casa!
            </p>

            {/* BOTÃO (aparece no mobile acima do vídeo, no desktop fica ao fim da seção) */}
            <div className="block lg:hidden mt-6">
              <Button onClick={scrollToOffer} className="mx-auto">
                Quero entrar no Clube das Pilateiras
              </Button>
            </div>
          </div>

          {/* Vídeo */}
          <div className="flex-1 w-full">
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

        {/* BOTÃO FIXO PARA DESKTOP - CENTRALIZADO */}
        <div className="hidden lg:flex justify-center mt-12">
          <Button onClick={scrollToOffer}>
            Quero entrar no Clube das Pilateiras
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;





