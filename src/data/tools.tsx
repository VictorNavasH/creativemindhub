
import { Tool } from "./tool-types";
import { marketingTools } from "./marketing-tools";
import { analyticsTools } from "./analytics-tools";
import { platformTools } from "./platform-tools";
import { workspaceTools } from "./workspace-tools";
import { FolderArchive } from "lucide-react";

// Filter function to remove any Cloud Storage entries from all imported tool arrays
const removeCloudStorage = (tool: Tool) => tool.title !== "Cloud Storage";

// Apply the filter to all imported tool arrays to prevent duplicates
const filteredPlatformTools = platformTools.filter(removeCloudStorage);
const filteredMarketingTools = marketingTools.filter(removeCloudStorage);
const filteredWorkspaceTools = workspaceTools.filter(removeCloudStorage);
const filteredAnalyticsTools = analyticsTools.filter(removeCloudStorage);

// Filter out Envato Elements from Creative Suite if it exists (in case it's in platform-tools.tsx)
const filteredPlatformToolsWithoutEnvato = filteredPlatformTools.map(tool => {
  if (tool.title === "Creative Suite" && tool.backOptions) {
    return {
      ...tool,
      backOptions: tool.backOptions.filter(option => option.title !== "Envato Elements")
    };
  }
  return tool;
});

// Combinamos las herramientas en el orden deseado - ensuring NO Cloud Storage is in the array
export const tools: Tool[] = [
  filteredPlatformToolsWithoutEnvato[0], // Smart Fidelity Card
  filteredMarketingTools[0], // Redes Sociales
  filteredMarketingTools[1], // CRM
  filteredMarketingTools[2], // Campañas
  filteredPlatformToolsWithoutEnvato[2], // Reviews
  filteredPlatformToolsWithoutEnvato[5], // Reservas
  filteredPlatformToolsWithoutEnvato[4], // Creative Suite
  filteredMarketingTools[4], // IA
  filteredWorkspaceTools[4], // Notion
  filteredWorkspaceTools[3], // Correo Electrónico
  filteredWorkspaceTools[0], // Projects
  filteredWorkspaceTools[2], // Google Workplace
  filteredPlatformToolsWithoutEnvato[1], // Herramientas Web
  filteredPlatformToolsWithoutEnvato[3], // IA Voz / Música
  filteredPlatformToolsWithoutEnvato[6], // Cloud & Templates (corrigiendo el índice)
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
  }
  // Cloud Storage module has been removed
];

// Debug log to verify
console.log("TOOLS ARRAY INITIALIZATION");
console.log("Total tools:", tools.length);
console.log("Cloud Storage has been removed");
console.log("Envato Elements has been removed from Creative Suite");

// Double-check there's no Cloud Storage in the array
const cloudStorageCount = tools.filter(tool => tool.title === "Cloud Storage").length;
console.log(`Found ${cloudStorageCount} Cloud Storage modules in tools array`);

// Check if Envato Elements is referenced in any backOptions
const containsEnvato = tools.some(tool => 
  tool.backOptions && tool.backOptions.some(option => option.title === "Envato Elements")
);
console.log(`Contains Envato Elements references: ${containsEnvato}`);
