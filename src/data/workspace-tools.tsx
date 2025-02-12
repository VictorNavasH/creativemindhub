
import React from "react";
import { Tool } from "./tool-types";
import {
  Cloud,
  Layout,
  Mail,
  Table,
  Globe,
  ShoppingCart,
  Palette,
  Image,
  FolderOpen
} from "lucide-react";

export const workspaceTools: Tool[] = [
  {
    title: "Zoho Workplace",
    icon: <Cloud className="w-full h-full" />,
    description: "Espacio de trabajo colaborativo en la nube",
    bgColor: "#E0FCFF",
    link: "https://workplace.zoho.eu/#dashboard/"
  },
  {
    title: "Smart Tables",
    icon: <Table className="w-full h-full" />,
    description: "Análisis y estadísticas en tiempo real",
    bgColor: "#E5FFFB",
    link: "https://app.powerbi.com/view?r=eyJrIjoiMTExODYwMTktMDE3NS00MzI5LWI2NTMtZjFhMmY1YjJkYjYzIiwidCI6ImIxNjFiM2I0LTU0MDYtNGE4Yy1iNDhmLTQ5ODdjNmI4YmQzOSIsImMiOjl9&pageName=ReportSection6ad7c2c3089c0894342c"
  },
  {
    title: "Google Workplace",
    icon: <Globe className="w-full h-full" />,
    description: "Suite de herramientas de Google para empresas",
    bgColor: "#E0FCFF",
    link: "https://workspace.google.com/"
  },
  {
    title: "Correo Electrónico",
    icon: <Mail className="w-full h-full" />,
    description: "Acceso al correo electrónico corporativo",
    bgColor: "#E0FCFF",
    link: "https://mail.google.com/"
  },
  {
    title: "Notion",
    icon: <Layout className="w-full h-full" />,
    description: "Espacio de trabajo y documentación",
    bgColor: "#FFF3E5",
    link: "https://www.notion.so/"
  },
  {
    title: "Zoho Drive",
    icon: <Cloud className="w-full h-full" />,
    description: "Almacenamiento y gestión de archivos",
    bgColor: "#FBEBFF",
    link: "https://drive.zoho.eu/"
  }
];
