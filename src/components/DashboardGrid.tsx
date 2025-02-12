
import { motion } from "framer-motion";
import { ToolCard } from "./ToolCard";
import {
  BarChart3,
  BrainCircuit,
  Camera,
  Layout,
  MessageSquare,
  PenTool,
  Share2,
  Users,
} from "lucide-react";

const tools = [
  {
    title: "Análisis y Métricas",
    icon: <BarChart3 className="w-full h-full" />,
    description: "Google Analytics, Meta Business y más",
  },
  {
    title: "Redes Sociales",
    icon: <Share2 className="w-full h-full" />,
    description: "Gestión unificada de redes sociales",
  },
  {
    title: "CRM",
    icon: <Users className="w-full h-full" />,
    description: "Zoho CRM y gestión de clientes",
  },
  {
    title: "Diseño Creativo",
    icon: <PenTool className="w-full h-full" />,
    description: "Canva, Envato Elements y recursos creativos",
  },
  {
    title: "IA Generativa",
    icon: <BrainCircuit className="w-full h-full" />,
    description: "Herramientas de IA para texto, imagen y voz",
  },
  {
    title: "Campañas",
    icon: <MessageSquare className="w-full h-full" />,
    description: "Zoho Campaigns y email marketing",
  },
  {
    title: "Contenido Visual",
    icon: <Camera className="w-full h-full" />,
    description: "Creación y edición de contenido multimedia",
  },
  {
    title: "Smart Marketing",
    icon: <Layout className="w-full h-full" />,
    description: "Fidelización y estrategias avanzadas",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const DashboardGrid = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6"
    >
      {tools.map((tool, index) => (
        <motion.div key={tool.title} variants={item}>
          <ToolCard
            {...tool}
            onClick={() => console.log(`Clicked ${tool.title}`)}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};
