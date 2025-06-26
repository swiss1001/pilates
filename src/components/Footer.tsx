
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-pilates-purple-300 mb-4">
              Clube das Pilateiras
            </h3>
            <p className="text-gray-300">
              A plataforma definitiva para mulheres que querem transformar o corpo através do pilates.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-pilates-purple-300 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pilates-purple-300 transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pilates-purple-300 transition-colors">Suporte</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Clube das Pilateiras. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
