
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
  // Super detailed logging of each tool
  console.log("----------------------- DASHBOARD GRID DEBUG -----------------------");
  console.log("Full tools array:", JSON.stringify(tools, null, 2));
  
  // Special focus on Cloud Storage
  const cloudStorageTools = tools.filter(tool => tool.title === "Cloud Storage");
  if (cloudStorageTools.length > 0) {
    console.log("Found Cloud Storage tools:", cloudStorageTools.length);
    cloudStorageTools.forEach((tool, index) => {
      console.log(`Cloud Storage ${index + 1}:`, {
        bgColor: tool.bgColor,
        position: tools.indexOf(tool),
        isFlippable: tool.isFlippable,
        link: tool.link
      });
    });
  } else {
    console.error("No Cloud Storage tool found!");
  }
  
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
        // Log each tool right before rendering with its exact properties
        console.log(`Rendering tool ${index}: ${tool.title}`, {
          bgColor: tool.bgColor,
          reference: Object.is(tool, cloudStorageTools[0]) ? "MATCHES_REFERENCE" : "DIFFERENT_REFERENCE"
        });
        
        return (
          <AnimatedGridItem key={`${tool.title}-${index}`} tool={{...tool}} />
        );
      })}
    </motion.div>
  );
};
