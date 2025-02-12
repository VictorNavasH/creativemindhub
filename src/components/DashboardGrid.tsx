
import { motion } from "framer-motion";
import { ToolCard } from "./ToolCard";
import {
  BarChart3,
  BrainCircuit,
  Camera,
  Layout,
  MessageSquare,
  Megaphone,
  Share2,
  Users,
  Smartphone,
  Globe,
  Target,
  Zap,
  ShoppingCart,
  Mail,
  PieChart,
  Fingerprint
} from "lucide-react";

const tools = [
  {
    title: "Análisis y Métricas",
    icon: <BarChart3 className="w-full h-full" />,
    description: "Google Analytics, Meta Business y más",
    bgColor: "#FFFAF3",
    link: "#"
  },
  {
    title: "Redes Sociales",
    icon: <Share2 className="w-full h-full" />,
    description: "Gestión unificada de redes sociales",
    bgColor: "#FFFAF3",
    link: "https://social.zoho.eu/social/nuasmartrestaurant/200856000000013017/Home.do?isAccessRequested=true#home"
  },
  {
    title: "CRM",
    icon: <Users className="w-full h-full" />,
    description: "Zoho CRM y gestión de clientes",
    bgColor: "#FFFAF3",
    link: "https://crm.zoho.eu/crm/nuasmartrestaurant/tab/Home/begin"
  },
  {
    title: "Campañas",
    icon: <Megaphone className="w-full h-full" />,
    description: "Zoho Campaigns y email marketing",
    bgColor: "#FFFAF3",
    link: "https://campaigns.zoho.eu/campaigns/org20100141836/home.do#dashboard"
  },
  {
    title: "IA Generativa",
    icon: <BrainCircuit className="w-full h-full" />,
    description: "Herramientas de IA para texto, imagen y voz",
    bgColor: "#FFEDF5",
    link: "#"
  },
  {
    title: "Diseño Creativo",
    icon: <MessageSquare className="w-full h-full" />,
    description: "Canva, Envato Elements y recursos creativos",
    bgColor: "#FDF7FF",
    link: "#"
  },
  {
    title: "Smart Marketing",
    icon: <Layout className="w-full h-full" />,
    description: "Fidelización y estrategias avanzadas",
    bgColor: "#FDF7FF",
    link: "#"
  },
  {
    title: "App Marketing",
    icon: <Smartphone className="w-full h-full" />,
    description: "Estrategias para aplicaciones móviles",
    bgColor: "#E0FCFF",
    link: "#"
  },
  {
    title: "SEO Global",
    icon: <Globe className="w-full h-full" />,
    description: "Optimización para búsquedas internacionales",
    bgColor: "#E0FCFF",
    link: "#"
  },
  {
    title: "Marketing Dirigido",
    icon: <Target className="w-full h-full" />,
    description: "Segmentación y targeting avanzado",
    bgColor: "#E0FCFF",
    link: "#"
  },
  {
    title: "Marketing Ágil",
    icon: <Zap className="w-full h-full" />,
    description: "Metodologías ágiles en marketing",
    bgColor: "#E0FCFF",
    link: "#"
  },
  {
    title: "E-commerce",
    icon: <ShoppingCart className="w-full h-full" />,
    description: "Estrategias para comercio electrónico",
    bgColor: "#E5FFFB",
    link: "#"
  },
  {
    title: "Email Pro",
    icon: <Mail className="w-full h-full" />,
    description: "Marketing por correo avanzado",
    bgColor: "#E5FFFB",
    link: "#"
  },
  {
    title: "Analytics Pro",
    icon: <PieChart className="w-full h-full" />,
    description: "Análisis avanzado de datos",
    bgColor: "#E5FFFB",
    link: "#"
  },
  {
    title: "ID Marketing",
    icon: <Fingerprint className="w-full h-full" />,
    description: "Marketing personalizado por identidad",
    bgColor: "#E5FFFB",
    link: "#"
  }
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
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 mt-16"
    >
      {tools.map((tool, index) => (
        <motion.div key={tool.title} variants={item}>
          <ToolCard
            {...tool}
            onClick={() => {
              if (tool.link !== "#") {
                window.open(tool.link, "_blank", "noopener noreferrer");
              }
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};
