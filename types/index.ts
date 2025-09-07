export interface NavItems {
  name: string;
  link: string;
}

export interface Skill {
  icon: string;
  title: string;
  level: number;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  img: string;
  iconLists: string[];
  link: string;
}

export interface BlogPost {
  id: number;
  title: string;
  description: string;
  img: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  grade?: string;
  description?: string;
  logo?: string;
}

export interface SocialLink {
  id: number;
  img: string;
}

export interface HomeContents {
  title: string;
  description: string;
}

import { ElementType } from "react";

export interface Social {
  name: string;
  icon: ElementType;
  href: string;
  color: string;
}

export const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const services = [
  { name: "CCTV Installation & Maintenance", href: "#services" },
  { name: "PC Troubleshooting & Repair", href: "#services" },
  { name: "Networking & LAN Setup", href: "#services" },
  { name: "IT Consulting & Support", href: "#services" },
];
