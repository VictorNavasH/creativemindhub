
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

// Función helper para encontrar herramientas por título
const findToolByTitle = (tools: Tool[], title: string): Tool | undefined => {
  return tools.find(tool => tool.title === title);
};

// Definir todas las herramientas que necesitamos usando búsqueda por nombre
const smartFidelityCard = findToolByTitle(filteredPlatformTools, "Smart Fidelity Card");
const redesSociales = findToolByTitle(filteredMarketingTools, "Redes Sociales");
const crm = findToolByTitle(filteredMarketingTools, "CRM");
const campanas = findToolByTitle(filteredMarketingTools, "Campañas");
const reviews = findToolByTitle(filteredPlatformTools, "Reviews");
const reservas = findToolByTitle(filteredPlatformTools, "Reservas");
const creativeSuite = findToolByTitle(filteredPlatformTools, "Creative Suite");
const iaMarketing = findToolByTitle(filteredMarketingTools, "IA");
const notion = findToolByTitle(filteredWorkspaceTools, "Notion");
const correoElectronico = findToolByTitle(filteredWorkspaceTools, "Correo Electrónico");
const projects = findToolByTitle(filteredWorkspaceTools, "Projects");
const googleWorkplace = findToolByTitle(filteredWorkspaceTools, "Google Workplace");
const herramientasWeb = findToolByTitle(filteredPlatformTools, "Herramientas Web");
const iaPlatform = findToolByTitle(filteredPlatformTools, "IA");
const smartTables = findToolByTitle(filteredWorkspaceTools, "Smart Tables");
const cloudTemplates = findToolByTitle(filteredPlatformTools, "Cloud & Templates");

// Validar que todas las herramientas se encontraron
const missingTools = [
  { name: "Smart Fidelity Card", found: !!smartFidelityCard },
  { name: "Redes Sociales", found: !!redesSociales },
  { name: "CRM", found: !!crm },
  { name: "Campañas", found: !!campanas },
  { name: "Reviews", found: !!reviews },
  { name: "Reservas", found: !!reservas },
  { name: "Creative Suite", found: !!creativeSuite },
  { name: "IA (Marketing)", found: !!iaMarketing },
  { name: "Notion", found: !!notion },
  { name: "Correo Electrónico", found: !!correoElectronico },
  { name: "Projects", found: !!projects },
  { name: "Google Workplace", found: !!googleWorkplace },
  { name: "Herramientas Web", found: !!herramientasWeb },
  { name: "IA (Platform)", found: !!iaPlatform },
  { name: "Smart Tables", found: !!smartTables },
  { name: "Cloud & Templates", found: !!cloudTemplates }
].filter(item => !item.found);

if (missingTools.length > 0) {
  console.error("HERRAMIENTAS FALTANTES:", missingTools.map(t => t.name).join(", "));
}

// Crear el recurso personalizado para Smart Tables
const customSmartTables = smartTables ? {
  title: "Smart Tables",
  icon: smartTables.icon,
  description: smartTables.description,
  bgColor: "#E0FCFF", // Mismo color que IA
  link: smartTables.link,
  isFlippable: smartTables.isFlippable,
  backOptions: smartTables.backOptions
} : undefined;

// Recurso personalizado para Recursos Varios
const recursosVarios = {
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
};

// Combinamos las herramientas en el orden deseado - ensuring NO Cloud Storage is in the array
export const tools: Tool[] = [];

// Añadir herramientas solo si existen
if (smartFidelityCard) tools.push(smartFidelityCard);
if (redesSociales) tools.push(redesSociales);
if (crm) tools.push(crm);
if (campanas) tools.push(campanas);
if (reviews) tools.push(reviews);
if (reservas) tools.push(reservas);
if (creativeSuite) tools.push(creativeSuite);
if (iaMarketing) tools.push(iaMarketing);
if (notion) tools.push(notion);
if (correoElectronico) tools.push(correoElectronico);
if (projects) tools.push(projects);
if (googleWorkplace) tools.push(googleWorkplace);
if (herramientasWeb) tools.push(herramientasWeb);
if (iaPlatform) tools.push(iaPlatform);
if (customSmartTables) tools.push(customSmartTables);
tools.push(recursosVarios);
if (cloudTemplates) tools.push(cloudTemplates);

// Debug log to verify
console.log("TOOLS ARRAY INITIALIZATION");
console.log("Total tools:", tools.length);
console.log("Cloud Storage has been removed");
console.log("Envato Elements ha sido correctamente configurado solo en Cloud & Templates");

// Double-check there's no Cloud Storage in the array
const cloudStorageCount = tools.filter(tool => tool.title === "Cloud Storage").length;
console.log(`Found ${cloudStorageCount} Cloud Storage modules in tools array`);

// Check if Envato Elements is referenced in the right place
const creativeSuiteHasEnvato = tools.some(tool => 
  tool.title === "Creative Suite" && 
  tool.backOptions && 
  tool.backOptions.some(option => option.title === "Envato Elements")
);
console.log(`Creative Suite contains Envato Elements: ${creativeSuiteHasEnvato} (should be false)`);

const cloudTemplatesHasEnvato = tools.some(tool => 
  tool.title === "Cloud & Templates" && 
  tool.backOptions && 
  tool.backOptions.some(option => option.title === "Envato Elements")
);
console.log(`Cloud & Templates contains Envato Elements: ${cloudTemplatesHasEnvato} (should be true)`);

// Log specific details about each tool for easier debugging
console.log("--- DETALLE DE HERRAMIENTAS ---");
tools.forEach((tool, index) => {
  console.log(`${index + 1}. ${tool.title} - ${tool.backOptions ? tool.backOptions.length + ' opciones' : 'sin opciones'}`);
  if (tool.backOptions) {
    tool.backOptions.forEach(option => console.log(`   - ${option.title}`));
  }
});
