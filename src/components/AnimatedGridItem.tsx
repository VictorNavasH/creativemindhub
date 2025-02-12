
import { motion } from "framer-motion";
import { ToolCard } from "./ToolCard";

interface AnimatedGridItemProps {
  tool: {
    title: string;
    icon: React.ReactNode;
    description: string;
    bgColor: string;
    link: string;
  };
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const AnimatedGridItem = ({ tool }: AnimatedGridItemProps) => {
  return (
    <motion.div variants={item}>
      <ToolCard
        {...tool}
        onClick={() => {
          if (tool.link !== "#") {
            window.open(tool.link, "_blank", "noopener noreferrer");
          }
        }}
      />
    </motion.div>
  );
};
