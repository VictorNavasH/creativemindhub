
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
  // Very detailed log to debug the tools array
  console.log("DashboardGrid FULL TOOLS ARRAY:", JSON.stringify(tools, null, 2));
  
  // Check if there are duplicate Cloud Storage entries
  const cloudStorageEntries = tools.filter(tool => tool.title === "Cloud Storage");
  console.log(`Found ${cloudStorageEntries.length} Cloud Storage entries:`, 
    cloudStorageEntries.map((tool, i) => `Entry ${i+1}: ${tool.bgColor}`));
  
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
        // Log each tool right before rendering to verify what's passed to AnimatedGridItem
        console.log(`Rendering tool ${index}: ${tool.title} with color ${tool.bgColor}`);
        return (
          <AnimatedGridItem key={`${tool.title}-${index}`} tool={tool} />
        );
      })}
    </motion.div>
  );
};
