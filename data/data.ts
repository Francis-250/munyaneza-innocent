import {
  BlogPost,
  HomeContents,
  NavItems,
  Project,
  Skill,
  Social,
  SocialLink,
  Testimonial,
} from "@/types";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const navItems: NavItems[] = [
  { name: "About", link: "#about" },
  { name: "Services", link: "#services" },
  { name: "Projects", link: "#project" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Why CCTV cameras are essential for security",
    description: "A quick insight into how surveillance improves safety.",
    img: "/cctv1.jpg",
  },
  {
    id: 2,
    title: "Tips to keep your PC running smoothly",
    description: "Best practices for preventing slowdowns and errors.",
    img: "/pc1.jpg",
  },
  {
    id: 3,
    title: "Network troubleshooting basics",
    description: "Simple steps to fix common internet and LAN issues.",
    img: "/network.jpg",
  },
  {
    id: 4,
    title: "How regular maintenance saves costs",
    description: "Preventive IT maintenance reduces downtime and repairs.",
    img: "/maintain.jpg",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "CCTV Installation for Retail Store",
    description:
      "Deployed a complete CCTV surveillance system with remote monitoring for a retail shop.",
    img: "/cctv-install.jpg",
    iconLists: ["/cctv.jpg", "/network.jpg"],
    link: "#",
  },
  {
    id: 2,
    title: "PC Troubleshooting & Upgrade",
    description:
      "Fixed system crashes, upgraded RAM/SSD, and optimized performance for a client’s office PCs.",
    img: "/pc-repair.jpg",
    iconLists: ["/pc.jpg", "/tools.jpg"],
    link: "#",
  },
  {
    id: 3,
    title: "Network Setup for Small Business",
    description:
      "Configured routers, switches, and secure Wi-Fi for a small office with 20+ users.",
    img: "/network-setup.jpg",
    iconLists: ["/router.jpg", "/wifi.jpg"],
    link: "#",
  },
  // {
  //   id: 4,
  //   title: "Access Control & Security System",
  //   description:
  //     "Installed biometric access control integrated with CCTV for enhanced office security.",
  //   img: "/access.jpg",
  //   iconLists: ["/lock.jpg", "/cctv.jpg"],
  //   link: "#",
  // },
];

export const socilMediaIcon: SocialLink[] = [
  {
    id: 1,
    img: "/git.jpg",
  },
  {
    id: 2,
    img: "/twit.jpg",
  },
  {
    id: 3,
    img: "/link.jpg",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "innocent set up our CCTV system quickly and professionally. The quality and remote access features have given us peace of mind.",
    name: "Michael Johnson",
    title: "Shop Owner",
  },
  {
    quote:
      "My office computers were slow and unreliable. innocent optimized them, upgraded the hardware, and now they run like new.",
    name: "Grace Uwimana",
    title: "Manager at Local NGO",
  },
  {
    quote:
      "The network setup he did in our office improved our internet stability and speed. Troubleshooting support is always prompt.",
    name: "Peter Nkurunziza",
    title: "IT Coordinator",
  },
];

export const skills: Skill[] = [
  {
    icon: "/cctv.jpg",
    title: "CCTV Installation & Maintenance",
    level: 90,
  },
  {
    icon: "/pc.jpg",
    title: "PC Troubleshooting & Repair",
    level: 90,
  },
  {
    icon: "/network.jpg",
    title: "Networking & LAN Setup",
    level: 80,
  },
  {
    icon: "/os.jpg",
    title: "Operating System Installation",
    level: 90,
  },
  {
    icon: "/security.jpg",
    title: "IT Security & Access Control",
    level: 60,
  },
  {
    icon: "/tools.jpg",
    title: "Hardware Upgrades & Maintenance",
    level: 90,
  },
  {
    icon: "/printer.jpg",
    title: "Printer & Peripheral Setup",
    level: 80,
  },
  {
    icon: "/sod.jpg",
    title: "Software Development",
    level: 80,
  },
];

export const homeContents: HomeContents[] = [
  {
    title: `Hi! I'm Munyaneza Innocent, an IT Support & CCTV Specialist.`,
    description: `CCTV Installation, PC Troubleshooting, Networking, IT Security, System Maintenance`,
  },
];

export const socialLinks: Social[] = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/Munyanezainnocent/Munyanezainnocent",
    color: "hover:text-gray-300",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/munyaneza-innocent-b9756b291",
    color: "hover:text-blue-400",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com",
    color: "hover:text-cyan-400",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:hello@example.com",
    color: "hover:text-purple-400",
  },
];
