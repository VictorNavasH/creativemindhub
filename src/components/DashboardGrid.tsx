
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
  // Enhanced logging for debugging
  console.log("DashboardGrid rendering, tools:", tools.map(tool => ({
    title: tool.title,
    color: tool.bgColor
  })));
  
  // Specifically check Cloud Storage color
  const cloudStorage = tools.find(tool => tool.title === "Cloud Storage");
  console.log("Cloud Storage color check:", cloudStorage?.bgColor);
  
  if (!tools || tools.length === 0) {
    console.error("No tools found!");
    return null;
  }

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
