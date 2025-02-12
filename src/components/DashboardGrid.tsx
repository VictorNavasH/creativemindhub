
import { motion } from "framer-motion";
import { AnimatedGridItem } from "./AnimatedGridItem";
import { tools } from "../data/tools";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const DashboardGrid = () => {
  console.log("DashboardGrid rendering, tools:", tools); // Añadido para debug
  
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6"
    >
      {tools.map((tool, index) => (
        <AnimatedGridItem key={`${tool.title}-${index}`} tool={tool} />
      ))}
    </motion.div>
  );
};
