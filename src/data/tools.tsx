
import { Tool } from "./tool-types";
import { marketingTools } from "./marketing-tools";
import { analyticsTools } from "./analytics-tools";
import { platformTools } from "./platform-tools";
import { workspaceTools } from "./workspace-tools";
import { creativeTools } from "./creative-tools";

// Combinamos las herramientas en el orden deseado
export const tools: Tool[] = [
  platformTools[0], // Smart Fidelity Card
  marketingTools[0], // Redes Sociales
  marketingTools[1], // CRM
  marketingTools[2], // Campañas
  platformTools[2], // Reviews
  platformTools[5], // Reservas
  marketingTools[4], // IA
  platformTools[4], // Creative Suite
  workspaceTools[4], // Notion
  workspaceTools[3], // Correo Electrónico
  workspaceTools[0], // Projects
  workspaceTools[2], // Google Workplace
  platformTools[1], // Herramientas Web
  platformTools[3], // IA Voz / Música
  analyticsTools[2], // IA Imagen
  marketingTools[3], // IA Video
  workspaceTools[1], // Smart Tables
  creativeTools[0], // Reservas
  marketingTools[5], // Meta Business Suite
  analyticsTools[1], // Analytics Pro
  workspaceTools[5], // Zoho Drive
  creativeTools[1], // Canva
  creativeTools[2], // Envato Elements
  creativeTools[3], // Recursos
];
