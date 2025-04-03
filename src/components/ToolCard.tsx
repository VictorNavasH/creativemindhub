import { motion } from "framer-motion";
import { useState, useEffect } from "react";
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
  // Special debugging for Cloud Storage
  if (title === "Cloud Storage") {
    console.log(`ToolCard rendering Cloud Storage with color: ${bgColor}`);
  }
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

  // Ensure style is directly applied
  const cardStyle = {
    backgroundColor: bgColor,
    backfaceVisibility: "hidden" as const
  };

  // For Cloud Storage, add a useEffect to verify DOM element after render
  useEffect(() => {
    if (title === "Cloud Storage") {
      const timer = setTimeout(() => {
        const elements = document.querySelectorAll(`[data-title="Cloud Storage"]`);
        console.log(`Found ${elements.length} Cloud Storage DOM elements`);
        elements.forEach((el, i) => {
          const style = window.getComputedStyle(el);
          console.log(`Cloud Storage element ${i} computed style:`, {
            backgroundColor: style.backgroundColor,
            dataColor: el.getAttribute('data-color')
          });
        });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [title]);
  return <div className="h-[140px] relative perspective-1000" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <motion.div className="w-full h-full relative preserve-3d transition-all duration-500" style={{
      transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
      transformStyle: "preserve-3d" as const
    }}>
        {/* Cara frontal */}
        <motion.div whileHover={!isFlipped ? {
        scale: 1.1,
        z: 50,
        transition: {
          duration: 0.3
        }
      } : {}} whileTap={!isFlipped ? {
        scale: 0.95
      } : {}} className="rounded-xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between cursor-pointer backdrop-blur-sm absolute w-full backface-hidden" style={cardStyle} onClick={handleClick} data-title={title} data-color={bgColor}>
          <div className="flex items-center gap-3 mb-2">
            <div className="text-[#364f6b] w-8 h-8">
              {icon}
            </div>
            <h3 className="text-lg font-semibold text-[#364f6b]">{title}</h3>
          </div>
          <p className="text-[#364f6b] text-sm line-clamp-2">{description}</p>
        </motion.div>

        {/* Cara trasera */}
        {isFlippable}
      </motion.div>
    </div>;
};