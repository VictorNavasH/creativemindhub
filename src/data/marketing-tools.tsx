
import React from "react";
import { Tool } from "./tool-types";
import {
  Megaphone,
  Share2,
  Users,
  Target,
  Fingerprint,
  Mail,
  Brain
} from "lucide-react";

export const marketingTools: Tool[] = [
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
    title: "Marketing Pro",
    icon: <Target className="w-full h-full" />,
    description: "Marketing avanzado y estrategias",
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
    title: "ID Marketing",
    icon: <Fingerprint className="w-full h-full" />,
    description: "Marketing personalizado por identidad",
    bgColor: "#E5FFFB",
    link: "https://drive.google.com/drive/folders/your-resources-folder"
  },
  {
    title: "Email Pro",
    icon: <Mail className="w-full h-full" />,
    description: "Marketing por correo avanzado",
    bgColor: "#E5FFFB",
    link: "https://elements.envato.com/"
  }
];
