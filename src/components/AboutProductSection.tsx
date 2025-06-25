import { useEffect } from "react";

const AboutProductSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texto */}
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

            {/* Vídeo ConverteAI v4 */}
            <div className="relative animate-scale-in flex justify-center items-center">
              <div
                id="ifr_67526d38fbf820d8fc346500_wrapper"
                style={{ margin: "0 auto", width: "100%", maxWidth: 400 }}
              >
                <div
                  id="ifr_67526d38fbf820d8fc346500_aspect"
                  style={{ padding: "177.78% 0 0 0", position: "relative" }}
                >
                  <iframe
                    id="ifr_67526d38fbf820d8fc346500"
                    src="about:blank"
                    allowFullScreen
                    frameBorder="0"
                    referrerPolicy="origin"
                    onLoad={(e) => {
                      const iframe = e.currentTarget;
                      iframe.src =
                        "https://scripts.converteai.net/1b3eff3e-0644-41a2-8abf-b6b15edc9f1c/players/67526d38fbf820d8fc346500/v4/embed.html" +
                        (window.location.search || "?") +
                        "&vl=" +
                        encodeURIComponent(window.location.href);
                    }}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  ></iframe>
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



