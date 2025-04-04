
import { motion } from "framer-motion";
import { ToolCard } from "./ToolCard";
import { Tool } from "../data/tool-types";

interface AnimatedGridItemProps {
  tool: Tool;
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const AnimatedGridItem = ({ tool }: AnimatedGridItemProps) => {
  // Special debugging for Cloud Storage
  if (tool.title === "Cloud Storage") {
    console.log(`AnimatedGridItem rendering Cloud Storage with color ${tool.bgColor}`);
  }
  
  return (
    <motion.div variants={item}>
      <ToolCard
        title={tool.title}
        icon={tool.icon}
        description={tool.description}
        bgColor={tool.bgColor}
        link={tool.link}
        isFlippable={tool.isFlippable}
        backOptions={tool.backOptions}
        onClick={() => {
          if (tool.link !== "#" && !tool.isFlippable) {
            window.open(tool.link, "_blank", "noopener noreferrer");
          }
        }}
      />
    </motion.div>
  );
};
