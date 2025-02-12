
import { motion } from "framer-motion";

interface ToolCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  onClick: () => void;
  bgColor?: string;
  link?: string;
}

export const ToolCard = ({ title, icon, description, onClick, bgColor = "#ffffff" }: ToolCardProps) => {
  console.log("ToolCard rendering:", title);
  
  return (
    <motion.div
      whileHover={{ 
        scale: 1.1,
        z: 50,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.95 }}
      className="rounded-xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 h-[140px] flex flex-col justify-between cursor-pointer backdrop-blur-sm"
      style={{ backgroundColor: bgColor }}
      onClick={onClick}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="text-[#364f6b] w-8 h-8">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-[#364f6b]">{title}</h3>
      </div>
      <p className="text-[#364f6b] text-sm line-clamp-2">{description}</p>
    </motion.div>
  );
};
