
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "./ui/button";

interface ToolCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  onClick: () => void;
  bgColor?: string;
  link?: string;
  // Propiedades para las opciones de la parte trasera
  isFlippable?: boolean;
  backOptions?: {
    title: string;
    link: string;
  }[];
}

export const ToolCard = ({ 
  title, 
  icon, 
  description, 
  onClick, 
  bgColor = "#ffffff", 
  isFlippable = false,
  backOptions = []
}: ToolCardProps) => {
  console.log("ToolCard rendering:", title);
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleClick = () => {
    if (!isFlippable) {
      onClick();
    }
  };

  const handleMouseEnter = () => {
    if (isFlippable) {
      setIsFlipped(true);
    }
  };

  const handleMouseLeave = () => {
    if (isFlippable) {
      setIsFlipped(false);
    }
  };

  return (
    <div 
      className="h-[140px] relative perspective-1000" 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="w-full h-full relative preserve-3d transition-all duration-500"
        style={{ 
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transformStyle: "preserve-3d"
        }}
      >
        {/* Cara frontal */}
        <motion.div
          whileHover={!isFlipped ? { 
            scale: 1.1,
            z: 50,
            transition: { duration: 0.3 }
          } : {}}
          whileTap={!isFlipped ? { scale: 0.95 } : {}}
          className="rounded-xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between cursor-pointer backdrop-blur-sm absolute w-full backface-hidden"
          style={{ 
            backgroundColor: bgColor,
            backfaceVisibility: "hidden"
          }}
          onClick={handleClick}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="text-[#364f6b] w-8 h-8">
              {icon}
            </div>
            <h3 className="text-lg font-semibold text-[#364f6b]">{title}</h3>
          </div>
          <p className="text-[#364f6b] text-sm line-clamp-2">{description}</p>
        </motion.div>

        {/* Cara trasera */}
        {isFlippable && (
          <motion.div
            className="rounded-xl p-2 shadow-xl transition-all duration-300 absolute w-full h-full flex flex-col justify-between items-center backdrop-blur-sm backface-hidden"
            style={{ 
              backgroundColor: bgColor,
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden"
            }}
          >
            <div className="w-full text-center mb-0.5">
              <h3 className="text-xs font-semibold text-[#364f6b] mb-1.5">Selecciona una opción</h3>
              <div className="flex flex-col gap-1">
                {backOptions.map((option, index) => (
                  <Button 
                    key={index}
                    variant="outline"
                    size="sm"
                    className="w-full bg-white/50 hover:bg-white/80 text-[#364f6b] hover:text-[#364f6b] font-medium transition-colors text-xs py-0.5 h-auto min-h-0 relative overflow-hidden group"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(option.link, "_blank", "noopener noreferrer");
                    }}
                  >
                    <span className="relative z-10">{option.title}</span>
                    <span className="absolute inset-0 w-0 bg-sky-200 group-hover:w-full transition-all duration-300 ease-out -z-0"></span>
                  </Button>
                ))}
              </div>
            </div>
            <div className="text-xs text-[#364f6b] opacity-70 mb-1">
              Mueve el ratón fuera para volver
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};
