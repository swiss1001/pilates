
interface ProgramCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  color: string;
}

const ProgramCard = ({ title, subtitle, imageUrl, color }: ProgramCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in">
      <div className="aspect-[4/5] relative">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover"
        />
        
        {/* Overlay gradient */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent`}></div>
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-2 leading-tight">{title}</h3>
          <p className="text-lg opacity-90">{subtitle}</p>
        </div>

        {/* Decorative elements matching the original design */}
        <div className="absolute top-4 right-4 w-8 h-8 border-2 border-white/30 rounded-full"></div>
        <div className="absolute top-16 right-8 w-4 h-4 border border-white/20 rounded-full"></div>
      </div>
    </div>
  );
};

export default ProgramCard;
