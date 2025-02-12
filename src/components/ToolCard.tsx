
import { motion } from "framer-motion";

interface ToolCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  onClick: () => void;
}

export const ToolCard = ({ title, icon, description, onClick }: ToolCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-[#E8EDF3] rounded-xl p-4 hover-card shadow-lg shadow-black/50 border border-white/10 h-[140px] flex flex-col justify-between"
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
