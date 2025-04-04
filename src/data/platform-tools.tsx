
import React from "react";
import { Tool } from "./tool-types";
import {
  Layout,
  Cloud,
  Globe,
  CreditCard,
  MessageSquare,
  Brain,
  CalendarDays,
  Palette
} from "lucide-react";

export const platformTools: Tool[] = [
  {
    title: "Smart Fidelity Card",
    icon: <CreditCard className="w-full h-full" />,
    description: "Programa de fidelización digital",
    bgColor: "#FFFAF3",
    link: "https://comeback.es/"
  },
  {
    title: "Herramientas Web",
    icon: <Layout className="w-full h-full" />,
    description: "Acceso a herramientas de gestión web",
    bgColor: "#E0FCFF",
    link: "#",
    isFlippable: true,
    backOptions: [
      {
        title: "WordPress",
        link: "https://nuasmartrestaurant.com/wp-login.php?redirect_to=https%3A%2F%2Fnuasmartrestaurant.com%2Fwp-admin%2Fadmin.php%3Fpage%3Drtb-bookings%26status%3Dpending&reauth=1"
      },
      {
        title: "Google Analytics",
        link: "https://analytics.google.com/"
      },
      {
        title: "Search Console",
        link: "https://search.google.com/search-console"
      }
    ]
  },
  {
    title: "Reviews",
    icon: <MessageSquare className="w-full h-full" />,
    description: "Gestión de reseñas y opiniones",
    bgColor: "#FFEDF5",
    link: "#",
    isFlippable: true,
    backOptions: [
      {
        title: "Opinas",
        link: "https://app.opinas.es/"
      },
      {
        title: "Shapo",
        link: "https://app.shapo.io/0f1a813ad3/testimonials"
      },
      {
        title: "NÜA Reseñas",
        link: "https://business.google.com/dashboard/l/17624639967987177500"
      }
    ]
  },
  {
    title: "IA",
    icon: <Brain className="w-full h-full" />,
    description: "Inteligencia artificial generativa",
    bgColor: "#E0FCFF",
    link: "#",
    isFlippable: true,
    backOptions: [
      {
        title: "ElevenLabs (voz)",
        link: "https://elevenlabs.io/"
      },
      {
        title: "IA Imagen (próximamente)",
        link: "#"
      },
      {
        title: "IA Vídeo (próximamente)",
        link: "#"
      }
    ]
  },
  {
    title: "Creative Suite",
    icon: <Palette className="w-full h-full" />,
    description: "Herramientas de diseño y creatividad",
    bgColor: "#FFEDF5",
    link: "#",
    isFlippable: true,
    backOptions: [
      {
        title: "Canva",
        link: "https://www.canva.com/"
      },
      {
        title: "Renderforest",
        link: "https://www.renderforest.com/"
      },
      {
        title: "Playzo",
        link: "https://www.playzo.io/"
      }
    ]
  },
  {
    title: "Reservas",
    icon: <CalendarDays className="w-full h-full" />,
    description: "Sistema de reservas para el restaurante",
    bgColor: "#FFEDF5",
    link: "https://nuasmartrestaurant.myrestoo.net/myrestoo/beta/bookings"
  },
  {
    title: "Acceso Cloud",
    icon: <Cloud className="w-full h-full" />,
    description: "Inteligencia artificial generativa",
    bgColor: "#FFEDF5",
    link: "#",
    isFlippable: true,
    backOptions: [
      {
        title: "Google Drive",
        link: "https://drive.google.com/"
      },
      {
        title: "Zoho Work Drive",
        link: "https://workdrive.zoho.com/"
      },
      {
        title: "Envato Elements",
        link: "https://elements.envato.com/"
      }
    ]
  }
];
