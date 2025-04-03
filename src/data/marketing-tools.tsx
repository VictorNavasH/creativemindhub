
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
    title: "Soluciones de Cliente",
    icon: <Users className="w-full h-full" />,
    description: "Gestión integral de relaciones con clientes",
    bgColor: "#FFFAF3",
    link: "#",
    isFlippable: true,
    backOptions: [
      {
        title: "Zoho CRM",
        link: "https://crm.zoho.eu/crm/nuasmartrestaurant/tab/Home/begin"
      },
      {
        title: "Marketing Automation",
        link: "https://marketingautomation.zoho.eu/zma/nuasmartrestaurant/home.do#Home:LoadHome"
      },
      {
        title: "Sales IQ",
        link: "https://salesiq.zoho.eu/siqprojects"
      }
    ]
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
    title: "Cloud Storage",
    icon: <Brain className="w-full h-full" />,
    description: "Acceso a almacenamiento en la nube",
    bgColor: "#E0FCFF",
    link: "#",
    isFlippable: true,
    backOptions: [
      {
        title: "Google Drive",
        link: "https://drive.google.com/drive/u/0/folders/0ANUAQgIMdmCSUk9PVA"
      },
      {
        title: "Zoho Workdrive",
        link: "https://workdrive.zoho.eu/3bedjadf0d909664a496fb677964aea272b1b/teams/3bedjadf0d909664a496fb677964aea272b1b/ws"
      }
    ]
  },
  {
    title: "Acceso Cloud",
    icon: <Globe className="w-full h-full" />,
    description: "Acceso a almacenamiento en la nube",
    bgColor: "#FFEDF5",
    link: "#",
    isFlippable: true,
    backOptions: [
      {
        title: "Zoho Workdrive",
        link: "https://workdrive.zoho.eu/3bedjadf0d909664a496fb677964aea272b1b/teams/3bedjadf0d909664a496fb677964aea272b1b/ws"
      },
      {
        title: "Google Drive",
        link: "https://drive.google.com/drive/u/0/folders/0ANUAQgIMdmCSUk9PVA"
      }
    ]
  }
];
