
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
      className="bg-[#E5FFFB] rounded-xl p-6 hover-card shadow-lg shadow-black/50 border border-white/10 h-[180px] flex flex-col justify-between"
      onClick={onClick}
    >
      <div className="flex items-center gap-4 mb-3">
        <div className="text-[#364f6b] w-10 h-10">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-[#364f6b]">{title}</h3>
      </div>
      <p className="text-[#364f6b] text-sm line-clamp-2">{description}</p>
    </motion.div>
  );
};
