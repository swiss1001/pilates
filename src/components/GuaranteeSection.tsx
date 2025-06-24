
const GuaranteeSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-pilates-mint-50 to-pilates-mint-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="w-20 h-20 bg-gradient-to-r from-pilates-mint-500 to-pilates-mint-600 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-3xl text-white">🔒</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              <span className="text-pilates-mint-600">Garantia Total</span> por 7 Dias
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Se você não amar o Clube das Pilateiras, devolvemos{" "}
              <strong className="text-pilates-mint-600">100% do seu dinheiro</strong>.{" "}
              Sem burocracia, sem perguntas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
