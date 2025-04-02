
import { Tool } from "./tool-types";
import { marketingTools } from "./marketing-tools";
import { analyticsTools } from "./analytics-tools";
import { platformTools } from "./platform-tools";
import { workspaceTools } from "./workspace-tools";
import { FolderArchive } from "lucide-react";

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
  workspaceTools[1], // Smart Tables
  {
    // Custom resources tool replacing analyticsTools[2]
    title: "Recursos varios",
    icon: <FolderArchive className="w-full h-full" />,
    description: "Recursos y herramientas adicionales",
    bgColor: analyticsTools[2].bgColor,
    link: "#",
    isFlippable: true,
    backOptions: [
      {
        title: "Próximamente",
        link: "#"
      }
    ]
  }
];
