
import React from "react";
import { Tool } from "./tool-types";
import {
  ShoppingCart,
  Palette,
  FolderOpen
} from "lucide-react";

export const creativeTools: Tool[] = [
  {
    title: "Reservas",
    icon: <ShoppingCart className="w-full h-full" />,
    description: "Acceso a la app de reservas Restoo",
    bgColor: "#E5FFFB",
    link: "https://app.restoo.es/login"
  },
  {
    title: "Canva",
    icon: <Palette className="w-full h-full" />,
    description: "Diseño gráfico y creación de contenido",
    bgColor: "#FBEBFF",
    link: "https://www.canva.com/"
  },
  {
    title: "Recursos",
    icon: <FolderOpen className="w-full h-full" />,
    description: "Carpeta de recursos compartidos",
    bgColor: "#FBEBFF",
    link: "https://drive.google.com/drive/u/0/folders/0ANUAQgIMdmCSUk9PVA"
  }
];
