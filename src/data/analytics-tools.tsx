
import React from "react";
import { Tool } from "./tool-types";
import {
  BarChart3,
  PieChart,
  Globe
} from "lucide-react";

export const analyticsTools: Tool[] = [
  {
    title: "Google Analytics",
    icon: <BarChart3 className="w-full h-full" />,
    description: "Análisis y métricas de tráfico web",
    bgColor: "#FFEDF5",
    link: "https://analytics.google.com/"
  },
  {
    title: "Analytics Pro",
    icon: <PieChart className="w-full h-full" />,
    description: "Análisis avanzado de datos",
    bgColor: "#E5FFFB",
    link: "https://drive.zoho.eu/"
  },
  {
    title: "SEO Global",
    icon: <Globe className="w-full h-full" />,
    description: "Optimización para búsquedas internacionales",
    bgColor: "#E0FCFF",
    link: "#"
  }
];
