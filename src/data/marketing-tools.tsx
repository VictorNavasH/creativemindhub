
import React from "react";
import { Tool } from "./tool-types";
import {
  Megaphone,
  Share2,
  Users,
  Video,
  Brain,
  Globe
} from "lucide-react";

export const marketingTools: Tool[] = [
  {
    title: "Redes Sociales",
    icon: <Share2 className="w-full h-full" />,
    description: "Gestión unificada de redes sociales",
    bgColor: "#FFFAF3",
    link: "#",
    isFlippable: true,
    backOptions: [
      {
        title: "Zoho Social",
        link: "https://social.zoho.eu/social/nuasmartrestaurant/200856000000013017/Home.do?isAccessRequested=true#home"
      },
      {
        title: "Meta Business Suite",
        link: "https://business.facebook.com/latest/home?nav_ref=bm_home_redirect&business_id=300141681170395&asset_id=101280734957025"
      }
    ]
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
    description: "Gestión integrada de campañas publicitarias",
    bgColor: "#FFFAF3",
    link: "#",
    isFlippable: true,
    backOptions: [
      {
        title: "Zoho Campaigns",
        link: "https://campaigns.zoho.eu/campaigns/org20100141836/home.do#dashboard"
      },
      {
        title: "Google Ads",
        link: "https://ads.google.com/"
      },
      {
        title: "Meta Ads",
        link: "https://business.facebook.com/adsmanager/"
      }
    ]
  },
  {
    title: "IA Video",
    icon: <Video className="w-full h-full" />,
    description: "Generación y edición de videos con IA",
    bgColor: "#E0FCFF",
    link: "#"
  },
  {
    title: "IA",
    icon: <Brain className="w-full h-full" />,
    description: "Inteligencia Artificial y automatización",
    bgColor: "#E0FCFF",
    link: "#"
  },
  {
    title: "Meta Business Suite",
    icon: <Globe className="w-full h-full" />,
    description: "Gestión empresarial de Meta",
    bgColor: "#E5FFFB",
    link: "https://business.facebook.com/"
  }
];
