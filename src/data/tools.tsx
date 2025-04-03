
import { Tool } from "./tool-types";
import { marketingTools } from "./marketing-tools";
import { analyticsTools } from "./analytics-tools";
import { platformTools } from "./platform-tools";
import { workspaceTools } from "./workspace-tools";
import { FolderArchive } from "lucide-react";

// Función segura para encontrar herramientas por título
const findToolByTitle = (toolsArray, title) => {
  if (!toolsArray || !Array.isArray(toolsArray)) {
    console.error(`toolsArray is not valid for title: ${title}`);
    return undefined;
  }
  return toolsArray.find(tool => tool && tool.title === title);
};

// Función para crear una copia segura de una herramienta
const getSafeTool = (getter) => {
  const tool = getter();
  if (!tool) {
    console.error(`Tool not found: ${getter.name}`);
    return null;
  }
  return tool;
};

// Funciones para obtener herramientas específicas
const getSmartFidelityCard = () => findToolByTitle(platformTools, "Smart Fidelity Card");
const getReviews = () => findToolByTitle(platformTools, "Reviews");
const getReservas = () => findToolByTitle(platformTools, "Reservas");
const getCreativeSuite = () => findToolByTitle(platformTools, "Creative Suite");
const getHerramientasWeb = () => findToolByTitle(platformTools, "Herramientas Web");
const getIA = () => findToolByTitle(platformTools, "IA");
const getCloudTemplates = () => findToolByTitle(platformTools, "Cloud & Templates");

const getRedesSociales = () => findToolByTitle(marketingTools, "Redes Sociales");
const getCRM = () => findToolByTitle(marketingTools, "CRM");
const getCampanas = () => findToolByTitle(marketingTools, "Campañas");
const getMarketingIA = () => findToolByTitle(marketingTools, "IA");

const getProjects = () => findToolByTitle(workspaceTools, "Projects");
const getGoogleWorkplace = () => findToolByTitle(workspaceTools, "Google Workplace");
const getCorreoElectronico = () => findToolByTitle(workspaceTools, "Correo Electrónico");
const getNotion = () => findToolByTitle(workspaceTools, "Notion");
const getSmartTables = () => findToolByTitle(workspaceTools, "Smart Tables");

// Filtramos los valores null para evitar problemas
const createToolsArray = () => {
  const toolsArray = [
    getSafeTool(getSmartFidelityCard),
    getSafeTool(getRedesSociales),
    getSafeTool(getCRM),
    getSafeTool(getCampanas),
    getSafeTool(getReviews),
    getSafeTool(getReservas),
    getSafeTool(getCreativeSuite),
    getSafeTool(getMarketingIA),
    getSafeTool(getNotion),
    getSafeTool(getCorreoElectronico),
    getSafeTool(getProjects),
    getSafeTool(getGoogleWorkplace),
    getSafeTool(getHerramientasWeb),
    getSafeTool(getIA),
    // Smart Tables personalizado
    {
      title: "Smart Tables",
      icon: getSmartTables() ? getSmartTables().icon : null,
      description: getSmartTables() ? getSmartTables().description : "Herramienta para gestión de mesas",
      bgColor: "#E0FCFF",
      link: getSmartTables() ? getSmartTables().link : "#",
      isFlippable: getSmartTables() ? getSmartTables().isFlippable : false,
      backOptions: getSmartTables() ? getSmartTables().backOptions : []
    },
    // Recursos varios
    {
      title: "Recursos varios",
      icon: <FolderArchive className="w-full h-full" />,
      description: "Recursos y herramientas adicionales",
      bgColor: "#E0FCFF",
      link: "#",
      isFlippable: true,
      backOptions: [
        {
          title: "Próximamente",
          link: "#"
        }
      ]
    },
    // Cloud & Templates (con Envato Elements)
    getSafeTool(getCloudTemplates),
  ];

  // Filtrar los valores null
  return toolsArray.filter(tool => tool !== null);
};

// Exportamos las herramientas después de aplicar el filtro
export const tools: Tool[] = createToolsArray();

// Verificación para asegurarse de que todo esté correcto
console.log("Verificación de configuración de herramientas:");

// Verificar Cloud & Templates
const cloudTemplatesInTools = tools.find(tool => tool && tool.title === "Cloud & Templates");
const hasEnvatoInCloudTemplates = cloudTemplatesInTools && 
                                cloudTemplatesInTools.backOptions && 
                                cloudTemplatesInTools.backOptions.some(option => option.title === "Envato Elements");
console.log(`✓ Cloud & Templates tiene Envato Elements: ${hasEnvatoInCloudTemplates}`);

// Verificar Creative Suite
const creativeSuiteInTools = tools.find(tool => tool && tool.title === "Creative Suite");
const hasEnvatoInCreativeSuite = creativeSuiteInTools && 
                                creativeSuiteInTools.backOptions && 
                                creativeSuiteInTools.backOptions.some(option => option.title === "Envato Elements");
console.log(`✓ Creative Suite NO tiene Envato Elements: ${!hasEnvatoInCreativeSuite}`);

// Añadir log adicional para debugging
console.log("Total tools count:", tools.length);
console.log("Cloud Storage instances found:", tools.filter(tool => tool && tool.title === "Cloud Storage").length);
