
import ProgramCard from "./ProgramCard";

const ProgramsSection = () => {
  const programs = [
    {
      title: "POWER ABS",
      subtitle: "TONIFICAÇÃO ABDOMINAL EM 8 SEMANAS",
      imageUrl: "/lovable-uploads/08c25d7b-6092-44df-b55e-64f6390a020d.png",
      color: "purple"
    },
    {
      title: "PILATES COM FAIXA ELÁSTICA",
      subtitle: "Resistência e definição",
      imageUrl: "/lovable-uploads/0dda36bd-4a7a-4037-8e10-a8676739f4f7.png",
      color: "orange"
    },
    {
      title: "PILATES COM BOLA SUÍÇA",
      subtitle: "Equilíbrio, postura e força",
      imageUrl: "/lovable-uploads/adf63a6a-41d5-4e90-bee6-c4fd77bf9b09.png",
      color: "green"
    },
    {
      title: "YOGA ZEN PILATES",
      subtitle: "Bem-estar mental e relaxamento",
      imageUrl: "/lovable-uploads/846596f7-6956-4cd5-b4b3-003aae900915.png",
      color: "blue"
    },
    {
      title: "PILATES PARA DIÁSTASE",
      subtitle: "Pós-parto e fortalecimento do core",
      imageUrl: "/lovable-uploads/4f17f7bf-fbef-4922-af18-4e913fa0b7ed.png",
      color: "purple"
    },
    {
      title: "PILATES NA PAREDE",
      subtitle: "Força e equilíbrio",
      imageUrl: "/lovable-uploads/034f054a-4a22-4da7-b5a4-03626c8753c0.png",
      color: "purple"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pilates-mint-50 to-pilates-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Programas Disponíveis na <span className="text-pilates-purple-600">Plataforma</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mais de 6 programas completos, pensados para diferentes objetivos e níveis de experiência
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              title={program.title}
              subtitle={program.subtitle}
              imageUrl={program.imageUrl}
              color={program.color}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <p className="text-lg text-gray-700">
              <strong className="text-pilates-purple-600">+ Novos programas</strong> adicionados regularmente!
            </p>
            <p className="text-gray-600 mt-2">
              Sua biblioteca de treinos está sempre crescendo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
