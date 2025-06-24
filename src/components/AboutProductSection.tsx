
const AboutProductSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                O Que é o <span className="text-pilates-purple-600">Clube das Pilateiras</span>?
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                É uma <strong className="text-pilates-purple-600">plataforma online completa</strong> com treinos de pilates e yoga, 
                pensados para mulheres que querem sair do sedentarismo, melhorar a saúde, emagrecer, 
                fortalecer o corpo e viver com mais leveza.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                <strong className="text-pilates-mint-600">Tudo no conforto da sua casa.</strong>
              </p>

              <div className="bg-gradient-to-r from-pilates-purple-50 to-pilates-mint-50 rounded-2xl p-6">
                <h3 className="font-bold text-xl text-gray-800 mb-4">✨ Você vai ter acesso a:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pilates-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Programas completos e estruturados</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pilates-mint-500 rounded-full"></div>
                    <span className="text-gray-700">Aulas para todos os níveis</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pilates-rose-500 rounded-full"></div>
                    <span className="text-gray-700">Suporte personalizado</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pilates-lilac-500 rounded-full"></div>
                    <span className="text-gray-700">Comunidade de mulheres inspiradoras</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Video */}
            <div className="relative animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-pilates-purple-200 to-pilates-mint-200 rounded-3xl blur-2xl opacity-30"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                  <vturb-smartplayer 
                    id="vid-67526d38fbf820d8fc346500" 
                    style={{ 
                      display: 'block', 
                      margin: '0 auto', 
                      width: '100%', 
                      maxWidth: '400px' 
                    }}
                  ></vturb-smartplayer>
                  <script 
                    type="text/javascript"
                    dangerouslySetInnerHTML={{
                      __html: `
                        var s=document.createElement("script"); 
                        s.src="https://scripts.converteai.net/1b3eff3e-0644-41a2-8abf-b6b15edc9f1c/players/67526d38fbf820d8fc346500/v4/player.js"; 
                        s.async=true;
                        document.head.appendChild(s);
                      `
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProductSection;
