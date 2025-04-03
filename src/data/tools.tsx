
import { Tool } from "./tool-types";
import { marketingTools } from "./marketing-tools";
import { analyticsTools } from "./analytics-tools";
import { platformTools } from "./platform-tools";
import { workspaceTools } from "./workspace-tools";
import { FolderArchive, Cloud, Database } from "lucide-react";

// Filter function to remove any Cloud Storage entries from all imported tool arrays
const removeCloudStorage = (tool: Tool) => tool.title !== "Cloud Storage";

// Apply the filter to all imported tool arrays to prevent duplicates
const filteredPlatformTools = platformTools.filter(removeCloudStorage);
const filteredMarketingTools = marketingTools.filter(removeCloudStorage);
const filteredWorkspaceTools = workspaceTools.filter(removeCloudStorage);
const filteredAnalyticsTools = analyticsTools.filter(removeCloudStorage);

// Combinamos las herramientas en el orden deseado - ensuring NO Cloud Storage is in the array
export const tools: Tool[] = [
  filteredPlatformTools[0], // Smart Fidelity Card
  filteredMarketingTools[0], // Redes Sociales
  filteredMarketingTools[1], // Soluciones de Cliente
  filteredMarketingTools[2], // Campañas
  filteredPlatformTools[2], // Reviews
  filteredPlatformTools[5], // Reservas
  filteredPlatformTools[4], // Creative Suite
  filteredMarketingTools[4], // IA
  filteredWorkspaceTools[4], // Notion
  filteredWorkspaceTools[3], // Correo Electrónico
  filteredWorkspaceTools[0], // Projects
  filteredWorkspaceTools[2], // Workplace Suite
  filteredPlatformTools[1], // Herramientas Web
  filteredPlatformTools[3], // IA
  {
    // Smart Tables (was workspaceTools[1])
    title: "Smart Tables",
    icon: filteredWorkspaceTools[1].icon,
    description: filteredWorkspaceTools[1].description,
    bgColor: "#E0FCFF", // Mismo color que IA
    link: filteredWorkspaceTools[1].link,
    isFlippable: filteredWorkspaceTools[1].isFlippable,
    backOptions: filteredWorkspaceTools[1].backOptions
  },
  {
    // Cloud Storage access replacing "Módulo nuevo"
    title: "Acceso Cloud",
    icon: <Cloud className="w-full h-full" />,
    description: "Almacenamiento en la nube",
    bgColor: "#E0FCFF",
    link: "#",
    isFlippable: true,
    backOptions: [
      {
        title: "Google Drive",
        link: "https://drive.google.com/"
      },
      {
        title: "Zoho Work Drive",
        link: "https://workdrive.zoho.com/"
      },
      {
        title: "Envato Elements",
        link: "https://elements.envato.com/"
      }
    ]
  }
  // Cloud Storage module has been removed
];

// Debug log to verify
console.log("TOOLS ARRAY INITIALIZATION");
console.log("Total tools:", tools.length);
console.log("Cloud Storage has been removed");

// Double-check there's no Cloud Storage in the array
const cloudStorageCount = tools.filter(tool => tool.title === "Cloud Storage").length;
console.log(`Found ${cloudStorageCount} Cloud Storage modules in tools array`);
