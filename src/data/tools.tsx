
import { Tool } from "./tool-types";
import { marketingTools } from "./marketing-tools";
import { analyticsTools } from "./analytics-tools";
import { platformTools } from "./platform-tools";
import { workspaceTools } from "./workspace-tools";
import { FolderArchive, Cloud } from "lucide-react";

// Combinamos las herramientas en el orden deseado
export const tools: Tool[] = [
  platformTools[0], // Smart Fidelity Card
  marketingTools[0], // Redes Sociales
  marketingTools[1], // CRM
  marketingTools[2], // Campañas
  platformTools[2], // Reviews
  platformTools[5], // Reservas
  platformTools[4], // Creative Suite
  marketingTools[4], // IA
  workspaceTools[4], // Notion
  workspaceTools[3], // Correo Electrónico
  workspaceTools[0], // Projects
  workspaceTools[2], // Google Workplace
  platformTools[1], // Herramientas Web
  platformTools[3], // IA Voz / Música
  {
    // Smart Tables (was workspaceTools[1])
    title: "Smart Tables",
    icon: workspaceTools[1].icon,
    description: workspaceTools[1].description,
    bgColor: "#E0FCFF", // Mismo color que IA
    link: workspaceTools[1].link,
    isFlippable: workspaceTools[1].isFlippable,
    backOptions: workspaceTools[1].backOptions
  },
  {
    // Custom resources tool (was analyticsTools[2])
    title: "Recursos varios",
    icon: <FolderArchive className="w-full h-full" />,
    description: "Recursos y herramientas adicionales",
    bgColor: "#E0FCFF", // Mismo color que IA
    link: "#",
    isFlippable: true,
    backOptions: [
      {
        title: "Próximamente",
        link: "#"
      }
    ]
  },
  // Completely define Cloud Storage without referencing workspaceTools[5]
  {
    title: "Cloud Storage",
    icon: <Cloud className="w-full h-full" />,
    description: "Almacenamiento y gestión de archivos",
    bgColor: "#FFEDF5", // Match Reservas module color
    link: "https://drive.zoho.eu/",
    isFlippable: false
  }
];
