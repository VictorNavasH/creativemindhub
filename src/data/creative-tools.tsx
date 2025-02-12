
import React from "react";
import { Tool } from "./tool-types";
import {
  ShoppingCart,
  Palette,
  Image,
  FolderOpen
} from "lucide-react";

export const creativeTools: Tool[] = [
  {
    title: "E-commerce",
    icon: <ShoppingCart className="w-full h-full" />,
    description: "Estrategias para comercio electrónico",
    bgColor: "#E5FFFB",
    link: "https://www.canva.com/"
  },
  {
    title: "Canva",
    icon: <Palette className="w-full h-full" />,
    description: "Diseño gráfico y creación de contenido",
    bgColor: "#FBEBFF",
    link: "https://www.canva.com/"
  },
  {
    title: "Envato Elements",
    icon: <Image className="w-full h-full" />,
    description: "Recursos creativos y plantillas",
    bgColor: "#FBEBFF",
    link: "https://elements.envato.com/"
  },
  {
    title: "Recursos",
    icon: <FolderOpen className="w-full h-full" />,
    description: "Carpeta de recursos compartidos",
    bgColor: "#FBEBFF",
    link: "https://drive.google.com/drive/u/0/folders/0ANUAQgIMdmCSUk9PVA"
  }
];
