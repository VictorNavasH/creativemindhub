
import { motion } from "framer-motion";
import { DashboardGrid } from "@/components/DashboardGrid";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdfcfb] to-[#FFDEE2]/40">
      <div className="container mx-auto px-4 pt-16 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)] filter-none">
              Smart Marketing Hub
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Bienvenid@ al portal de innovación para estrategias de marketing disruptivas.
          </p>
          
          <div className="flex justify-center gap-6 items-center mb-8">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-pink-400 transition-colors"
            >
              <Facebook size={24} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-pink-400 transition-colors"
            >
              <Instagram size={24} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-pink-400 transition-colors"
            >
              <Twitter size={24} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-pink-400 transition-colors"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-pink-400 transition-colors"
            >
              <Youtube size={24} />
            </motion.a>
          </div>
        </motion.div>
        <DashboardGrid />
      </div>
    </div>
  );
};

export default Index;
