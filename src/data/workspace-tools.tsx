
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
  FolderOpen,
  ListTodo
} from "lucide-react";

export const workspaceTools: Tool[] = [
  {
    title: "Projects",
    icon: <ListTodo className="w-full h-full" />,
    description: "Gestión de proyectos y tareas",
    bgColor: "#FFF3E5",
    link: "#",
    isFlippable: true,
    backOptions: [
      {
        title: "Zoho Projects",
        link: "https://projects.zoho.eu/"
      },
      {
        title: "Zoho ToDo",
        link: "https://todo.zoho.eu/"
      }
    ]
  },
  {
    title: "Smart Tables",
    icon: <Table className="w-full h-full" />,
    description: "Análisis y estadísticas en tiempo real",
    bgColor: "#E0FCFF",
    link: "https://app.powerbi.com/view?r=eyJrIjoiMTExODYwMTktMDE3NS00MzI5LWI2NTMtZjFhMmY1YjJkYjYzIiwidCI6ImIxNjFiM2I0LTU0MDYtNGE4Yy1iNDhmLTQ5ODdjNmI4YmQzOSIsImMiOjl9&pageName=ReportSection6ad7c2c3089c0894342c"
  },
  {
    title: "Workplace Suite",
    icon: <Globe className="w-full h-full" />,
    description: "Acceso a herramientas de Google y Zoho para empresas",
    bgColor: "#FFF3E5",
    link: "#",
    isFlippable: true,
    backOptions: [
      {
        title: "Google Workplace",
        link: "https://workspace.google.com/"
      },
      {
        title: "Zoho Workplace",
        link: "https://workplace.zoho.eu/#dashboard/"
      }
    ]
  },
  {
    title: "Correo Electrónico",
    icon: <Mail className="w-full h-full" />,
    description: "Acceso al correo electrónico corporativo",
    bgColor: "#FFF3E5",
    link: "https://mail.google.com/"
  },
  {
    title: "Notion",
    icon: <Layout className="w-full h-full" />,
    description: "Espacio de trabajo y documentación",
    bgColor: "#FFF3E5",
    link: "https://www.notion.so/"
  }
  // Removing the Cloud Storage entry from workspaceTools to avoid any conflicts
  // We're defining it exclusively in the tools.tsx file now
];
