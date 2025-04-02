
import { ReactNode } from "react";

export interface Tool {
  title: string;
  icon: ReactNode;
  description: string;
  bgColor: string;
  link: string;
  isFlippable?: boolean;
  backOptions?: {
    title: string;
    link: string;
  }[];
}
