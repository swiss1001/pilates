import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-pilates-purple-100 via-pilates-lilac-50 to-white overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight">
            Sua nova versão <span className="text-pilates-purple-600">começa agora</span>.
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Não deixe mais um dia passar sem cuidar de você. Junte-se às milhares de mulheres que já transformaram suas vidas!
          </p>

          <div className="w-full sm:w-auto">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto text-center bg-pilates-purple-600 hover:bg-pilates-purple-700 text-white px-6 py-4 sm:px-12 sm:py-6 text-lg sm:text-2xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              <a
                href="https://pay.hotmart.com/V90721651L?bid=1750789001622"
                target="_blank"
                rel="noopener noreferrer"
              >
                Quero mudar meu corpo!
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;

