
import { AlertTriangle } from "lucide-react";

const PainPointsSection = () => {
  const painPoints = [
    "Está cansada, sem disposição...",
    "Vive prometendo começar, mas sempre adia...",
    "Se sente travada, com dores ou desconforto no corpo...",
    "Já tentou academia, mas não se adaptou...",
    "Quer cuidar de si, mas não sabe por onde começar..."
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-pilates-lilac-50 to-pilates-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            Se você se sente assim, <span className="text-pilates-purple-600">não está sozinha</span>...
          </h2>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="space-y-6">
              {painPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-pilates-rose-50 to-pilates-lilac-50 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <AlertTriangle className="h-6 w-6 text-pilates-rose-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700 text-left">{point}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-pilates-mint-50 to-pilates-purple-50 rounded-2xl">
              <p className="text-lg text-gray-700 font-medium">
                <span className="text-pilates-purple-600 font-bold">Você não precisa mais se sentir assim!</span> 
                <br />
                O Clube das Pilateiras foi criado especialmente para mulheres como você.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
