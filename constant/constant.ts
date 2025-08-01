"use client"

import { AutoFixHigh } from "@mui/icons-material";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiGit,
  SiAxios,
  SiApollographql,
  SiRedux,
  SiVite,
  SiPostman,
} from "react-icons/si";
export const NavLinks = [
    {
        id: 1,
        url: "#",
        label: "Home",
    },
    {
        id: 2,
        url: "#services",
        label: "Services",
    },
    {
        id: 3,
        url: "#resume",
        label: "Resume",
    },
    {
        id: 4,
        url: "#projects",
        label: "Projects",
    },
    {
        id: 5,
        url: "#skills",
        label: "Skills",
    },
    {
        id: 6,
        url: "#contact",
        label: "Contact",
    },
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: SiHtml5 , percentage: 95 },
      { name: "CSS3", icon: SiCss3 , percentage: 93 },
      { name: "JavaScript (ES6+)", icon: SiJavascript , percentage: 90 },
      { name: "TypeScript", icon: SiTypescript , percentage: 90 },
      { name: "React", icon: SiReact , percentage: 98 },
      { name: "Next.js", icon: SiNextdotjs , percentage: 95 },
    ],
  },
  {
    title: "Styling & UI",
    skills: [
      { name: "Tailwind CSS", icon: SiTailwindcss , percentage: 88 },
      { name: "Material UI (MUI)", icon: AutoFixHigh , percentage: 87 },
      { name: "shadcn/ui", icon: SiVite , percentage: 80 },
    ],
  },
  {
    title: "State Management",
    skills: [
      { name: "Zustand", icon: SiRedux , percentage: 80 },
      { name: "Context API", icon: SiReact , percentage: 85 },
      { name: "useReducer", icon: SiReact , percentage: 80 },
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "Git", icon: SiGit , percentage: 90 },
      { name: "Postman", icon: SiPostman , percentage: 85 },
      { name: "Axios", icon: SiAxios , percentage: 98 },
      { name: "Middleware", icon: SiApollographql , percentage: 90 },
    ],
  },
];
