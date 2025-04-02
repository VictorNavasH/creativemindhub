import React from "react";
import { Tool } from "./tool-types";
import {
  Layout,
  Cloud,
  Globe,
  CreditCard,
  MessageSquare,
  Mic,
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
    bgColor: "#FDF7FF",
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
    icon: <Mic className="w-full h-full" />,
    description: "Inteligencia artificial para voz, imagen y video",
    bgColor: "#E0FCFF",
    link: "#",
    isFlippable: true,
    backOptions: [
      {
        title: "ElevenLabs (Voz)",
        link: "https://elevenlabs.io/"
      },
      {
        title: "IA Imagen (Próximamente)",
        link: "#"
      },
      {
        title: "IA Video (Próximamente)",
        link: "#"
      }
    ]
  },
  {
    title: "Creative Suite",
    icon: <Palette className="w-full h-full" />,
    description: "Herramientas de diseño y creatividad",
    bgColor: "#FDF7FF",
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
        title: "Envato Elements",
        link: "https://elements.envato.com/"
      }
    ]
  },
  {
    title: "Reservas",
    icon: <CalendarDays className="w-full h-full" />,
    description: "Sistema de reservas para el restaurante",
    bgColor: "#F0F8FF",
    link: "https://nuasmartrestaurant.myrestoo.net/myrestoo/beta/bookings"
  }
];
