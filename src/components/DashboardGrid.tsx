
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
  // Additional logging to debug the tools array
  console.log("----------------------- DASHBOARD GRID DEBUG -----------------------");
  console.log("Total tools count:", tools.length);
  
  // Special focus on Cloud Storage
  const cloudStorageTools = tools.filter(tool => tool.title === "Cloud Storage");
  console.log("Cloud Storage instances found:", cloudStorageTools.length);
  
  if (cloudStorageTools.length > 1) {
    console.error("ERROR: Multiple Cloud Storage instances found!");
  }
  
  cloudStorageTools.forEach((tool, index) => {
    console.log(`Cloud Storage ${index + 1}:`, {
      bgColor: tool.bgColor,
      position: tools.indexOf(tool),
      isFlippable: tool.isFlippable,
      link: tool.link
    });
  });
  
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
      {tools.map((tool, index) => {
        // Log each tool right before rendering
        if (tool.title === "Cloud Storage") {
          console.log(`Rendering Cloud Storage at index ${index} with color ${tool.bgColor}`);
        }
        
        return (
          <AnimatedGridItem 
            key={`${tool.title}-${index}`} 
            tool={tool} 
          />
        );
      })}
    </motion.div>
  );
};
