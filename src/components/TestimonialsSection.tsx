import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Fernanda Silva",
      age: 34,
      text: "Nunca imaginei que treinar em casa poderia me fazer tão bem! Me sinto mais forte e confiante.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
      name: "Marina Costa",
      age: 41,
      text: "O Clube das Pilateiras mudou minha rotina completamente. Agora tenho energia para tudo!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
      name: "Juliana Santos",
      age: 36,
      text: "Finalmente encontrei algo que cabe na minha rotina. Os treinos são perfeitos!",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=461&q=80"
    },
    {
      name: "Carla Mendes",
      age: 43,
      text: "Estava frustrada com pilates no estúdio - muito caro e horários rígidos. Aqui posso treinar quando quero e o resultado é o mesmo!",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
    },
    {
      name: "Patricia Oliveira",
      age: 39,
      text: "Em 3 meses perdi 8kg e minha cintura afinou 12cm! O pilates realmente funciona para emagrecimento.",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
      name: "Lucia Rodrigues",
      age: 45,
      text: "Pagava R$ 400 por mês no estúdio e mal conseguia ir 2x na semana. Aqui treino todos os dias pelo preço de uma aula!",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            O que nossas <span className="text-pilates-purple-600">Pilateiras</span> dizem
          </h2>
          <p className="text-gray-600 text-lg">
            Mulheres como você que transformaram suas vidas com o Clube das Pilateiras
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {getVisibleTestimonials().map((testimonial, index) => (
                <CarouselItem key={`${testimonial.name}-${currentIndex}-${index}`} className="pl-4 md:basis-1/3">
                  <div className="bg-gradient-to-br from-pilates-lilac-50 to-pilates-purple-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in h-full">
                    <div className="text-center h-full flex flex-col justify-between">
                      <div>
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-md"
                        />
                        <p className="text-gray-700 italic mb-4 text-base leading-relaxed">
                          "{testimonial.text}"
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-pilates-purple-600 text-lg">{testimonial.name}</p>
                        <p className="text-gray-500 text-sm">{testimonial.age} anos</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
