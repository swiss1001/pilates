
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Fernanda Silva",
      age: 34,
      text: "Nunca imaginei que treinar em casa poderia me fazer tão bem! Me sinto mais forte e confiante.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
      name: "Marina Costa",
      age: 41,
      text: "O Clube das Pilateiras mudou minha rotina completamente. Agora tenho energia para tudo!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
      name: "Juliana Santos",
      age: 28,
      text: "Finalmente encontrei algo que cabe na minha rotina. Os treinos são perfeitos!",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            O que nossas <span className="text-pilates-purple-600">Pilateiras</span> dizem
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-pilates-lilac-50 to-pilates-purple-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-md"
                />
                <p className="text-gray-700 italic mb-4 text-lg">"{testimonial.text}"</p>
                <p className="font-semibold text-pilates-purple-600">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.age} anos</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
