
import { motion } from "framer-motion";
import { DashboardGrid } from "@/components/DashboardGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background animated-grad">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
              Smart Marketing Hub
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bienvenid@ al portal de innovación para estrategias de marketing disruptivas.
          </p>
        </motion.div>
        <DashboardGrid />
      </div>
    </div>
  );
};

export default Index;
