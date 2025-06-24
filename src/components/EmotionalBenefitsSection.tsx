
const EmotionalBenefitsSection = () => {
  const benefits = [
    "Mais disposição",
    "Postura alinhada",
    "Corpo mais leve e forte",
    "Sem dores",
    "Mais autoestima e bem-estar",
    "Confiança renovada"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pilates-lilac-50 to-pilates-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Before/After Image */}
            <div className="relative animate-scale-in">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Transformação - Antes e Depois"
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="absolute top-4 left-4 bg-pilates-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Transformação Real
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Imagine você <span className="text-pilates-purple-600">daqui a algumas semanas</span>...
              </h2>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-pilates-purple-500 to-pilates-mint-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-lg text-gray-700 font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalBenefitsSection;
