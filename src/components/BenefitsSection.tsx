
import BenefitCard from "./BenefitCard";
import { Heart, Clock, Zap, Home, Target, Sparkles } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-pilates-purple-600" />,
      title: "Aulas rápidas e eficientes"
    },
    {
      icon: <Heart className="h-8 w-8 text-pilates-rose-500" />,
      title: "Fortaleça seu corpo e sua autoestima"
    },
    {
      icon: <Target className="h-8 w-8 text-pilates-mint-600" />,
      title: "Melhore a postura e acabe com as dores"
    },
    {
      icon: <Zap className="h-8 w-8 text-pilates-purple-600" />,
      title: "Treinos guiados — no seu tempo e no seu ritmo"
    },
    {
      icon: <Home className="h-8 w-8 text-pilates-mint-600" />,
      title: "Sem equipamentos caros"
    },
    {
      icon: <Sparkles className="h-8 w-8 text-pilates-rose-500" />,
      title: "Menos de 30 minutos por dia"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Por que o <span className="text-pilates-purple-600">Clube das Pilateiras</span> é perfeito para você?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
