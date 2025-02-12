
import { Tool } from "./tool-types";
import { marketingTools } from "./marketing-tools";
import { analyticsTools } from "./analytics-tools";
import { platformTools } from "./platform-tools";
import { workspaceTools } from "./workspace-tools";
import { creativeTools } from "./creative-tools";

// Volvemos al orden original combinando las herramientas
export const tools: Tool[] = [
  platformTools[0], // Smart Fidelity Card
  marketingTools[0], // Redes Sociales
  marketingTools[1], // CRM
  marketingTools[2], // Campañas
  platformTools[2], // Reviews
  platformTools[4], // Google My Business
  analyticsTools[0], // Google Analytics
  platformTools[1], // Editor Web
  workspaceTools[4], // Notion
  workspaceTools[0], // Zoho Workplace
  workspaceTools[2], // Google Workplace
  workspaceTools[3], // Correo Electrónico
  marketingTools[4], // Marketing Dirigido
  platformTools[3], // App Marketing
  analyticsTools[2], // SEO Global
  marketingTools[3], // Marketing Pro
  workspaceTools[1], // IA
  creativeTools[0], // E-commerce
  marketingTools[6], // Email Pro
  analyticsTools[1], // Analytics Pro
  marketingTools[5], // ID Marketing
  creativeTools[1], // Canva
  creativeTools[2], // Envato Elements
  creativeTools[3], // Recursos
  workspaceTools[5], // Zoho Drive
] as const;
