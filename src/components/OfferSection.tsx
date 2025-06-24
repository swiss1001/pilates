
import { Button } from "@/components/ui/button";

const OfferSection = () => {
  return (
    <section id="oferta" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-pilates-lilac-50 to-pilates-purple-50 rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-pilates-purple-200">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                Acesso Total ao <span className="text-pilates-purple-600">Clube das Pilateiras</span>
              </h2>

              <div className="mb-8">
                <div className="text-5xl md:text-6xl font-bold text-pilates-purple-600 mb-2">
                  12x R$ 32,55
                </div>
                <div className="text-2xl text-gray-600 mb-4">
                  ou R$ 297 à vista
                </div>
                <p className="text-lg text-gray-600">
                  Sem mensalidade, sem taxas escondidas. <strong>Menos de R$ 1,08 por dia!</strong>
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 mb-8">
                <h3 className="font-bold text-xl text-gray-800 mb-4">✨ Você vai ter acesso a:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pilates-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Todos os programas de Pilates e Yoga</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pilates-mint-500 rounded-full"></div>
                    <span className="text-gray-700">Novas aulas adicionadas frequentemente</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pilates-rose-500 rounded-full"></div>
                    <span className="text-gray-700">Suporte direto via WhatsApp</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pilates-lilac-500 rounded-full"></div>
                    <span className="text-gray-700">Acesso por 12 meses</span>
                  </div>
                </div>
              </div>

              <Button
                asChild
                size="lg"
                className="bg-pilates-purple-600 hover:bg-pilates-purple-700 text-white px-12 py-6 text-xl font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <a href="https://pay.hotmart.com/V90721651L?bid=1750789001622" target="_blank" rel="noopener noreferrer">
                  Quero Entrar no Clube das Pilateiras
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
