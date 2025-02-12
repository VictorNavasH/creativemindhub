
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
      className="bg-[#364f6b]/90 rounded-xl p-6 hover-card shadow-lg shadow-black/50 border border-white/10"
      onClick={onClick}
    >
      <div className="flex items-center gap-4 mb-3">
        <div className="text-primary/80 w-10 h-10">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-primary">{title}</h3>
      </div>
      <p className="text-muted-foreground text-sm">{description}</p>
    </motion.div>
  );
};
