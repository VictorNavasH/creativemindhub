
import { motion } from "framer-motion";
import { DashboardGrid } from "@/components/DashboardGrid";
import { TubelightNavbar } from "@/components/TubelightNavbar";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdfcfb] to-[#FFDEE2]">
      <TubelightNavbar />
      <MovingBorderButton 
        containerClassName="w-full h-full fixed inset-0 -z-10"
        borderClassName="h-40 w-40 opacity-[0.3] bg-[radial-gradient(var(--primary)_40%,transparent_60%)]"
        duration={10000}
        className="pointer-events-none border-none bg-transparent"
      >
        <div />
      </MovingBorderButton>
      <div className="container mx-auto px-4 py-12 mt-24 sm:mt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.3)] filter-none">
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
