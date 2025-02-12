
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
      className="glass-card rounded-xl p-6 hover-card relative overflow-hidden before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-purple-400/20 before:via-pink-500/20 before:to-purple-600/20 before:blur-xl before:transform before:transition-all before:duration-1000 hover:before:scale-150"
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
