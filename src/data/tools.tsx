
import { Tool } from "./tool-types";
import { marketingTools } from "./marketing-tools";
import { analyticsTools } from "./analytics-tools";
import { platformTools } from "./platform-tools";
import { workspaceTools } from "./workspace-tools";
import { FolderArchive } from "lucide-react";

// Función más segura para encontrar herramientas por título
const findToolByTitle = (toolsArray, title) => {
  if (!toolsArray || !Array.isArray(toolsArray)) {
    console.warn(`Array de herramientas no válido al buscar "${title}"`);
    return undefined;
  }
  return toolsArray.find(tool => tool && tool.title === title);
};

// Función para verificar y crear una herramienta segura
const getSafeTool = (getterFn, defaultTitle = "Herramienta", defaultBgColor = "#E0FCFF") => {
  const tool = getterFn();
  if (!tool) {
    console.warn(`No se encontró la herramienta "${defaultTitle}"`);
    return {
      title: defaultTitle,
      icon: null,
      description: "Descripción no disponible",
      bgColor: defaultBgColor,
      link: "#",
      isFlippable: false,
      backOptions: []
    };
  }
  return tool;
};

// Crea copias de herramientas específicas con verificación
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

// Combinamos las herramientas en el orden deseado usando la función segura
export const tools: Tool[] = [
  getSafeTool(getSmartFidelityCard, "Smart Fidelity Card"),
  getSafeTool(getRedesSociales, "Redes Sociales"),
  getSafeTool(getCRM, "CRM"),
  getSafeTool(getCampanas, "Campañas"),
  getSafeTool(getReviews, "Reviews"),
  getSafeTool(getReservas, "Reservas"),
  getSafeTool(getCreativeSuite, "Creative Suite"),
  getSafeTool(getMarketingIA, "IA Marketing"),
  getSafeTool(getNotion, "Notion"),
  getSafeTool(getCorreoElectronico, "Correo Electrónico"),
  getSafeTool(getProjects, "Projects"),
  getSafeTool(getGoogleWorkplace, "Google Workplace"),
  getSafeTool(getHerramientasWeb, "Herramientas Web"),
  getSafeTool(getIA, "IA"),
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
  getSafeTool(getCloudTemplates, "Cloud & Templates"),
];

// Verificación para asegurarse de que todo esté correcto de manera segura
console.log("Verificación de configuración de herramientas:");

// Verificar Cloud & Templates con manejo seguro
const cloudTemplatesInTools = tools.find(tool => tool && tool.title === "Cloud & Templates");
const hasEnvatoInCloudTemplates = cloudTemplatesInTools && 
                                cloudTemplatesInTools.backOptions && 
                                Array.isArray(cloudTemplatesInTools.backOptions) &&
                                cloudTemplatesInTools.backOptions.some(option => option && option.title === "Envato Elements");
console.log(`✓ Cloud & Templates tiene Envato Elements: ${hasEnvatoInCloudTemplates}`);

// Verificar Creative Suite con manejo seguro
const creativeSuiteInTools = tools.find(tool => tool && tool.title === "Creative Suite");
const hasEnvatoInCreativeSuite = creativeSuiteInTools && 
                                creativeSuiteInTools.backOptions && 
                                Array.isArray(creativeSuiteInTools.backOptions) &&
                                creativeSuiteInTools.backOptions.some(option => option && option.title === "Envato Elements");
console.log(`✓ Creative Suite NO tiene Envato Elements: ${!hasEnvatoInCreativeSuite}`);

// Verificar que todas las herramientas tienen los campos necesarios
tools.forEach((tool, index) => {
  if (!tool) {
    console.warn(`Herramienta en índice ${index} es undefined o null`);
  } else if (!tool.title) {
    console.warn(`Herramienta en índice ${index} no tiene título`);
  }
});
