import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiMui,
  SiGithub,
  SiVercel,
} from "react-icons/si";

export const TECH_STACK = [
  {
    category: "Frontend",
    technologies: [
      {
        name: "HTML5",
        icon: FaHtml5,
        color: "#E34F26",
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        color: "#1572B6",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
      },
      {
        name: "React",
        icon: FaReact,
        color: "#61DAFB",
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "#FFFFFF",
      },
      {
        name: "Redux",
        icon: SiRedux,
        color: "#764ABC",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#38BDF8",
      },
      {
        name: "Material UI",
        icon: SiMui,
        color: "#007FFF",
      },
    ],
  },

  {
    category: "Backend",
    technologies: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        color: "#5FA04E",
      },
      {
        name: "Express",
        icon: SiExpress,
        color: "#FFFFFF",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "#47A248",
      },
    ],
  },

  {
    category: "Tools",
    technologies: [
      {
        name: "Git",
        icon: FaGitAlt,
        color: "#F05032",
      },
      {
        name: "GitHub",
        icon: SiGithub,
        color: "#FFFFFF",
      },
      {
        name: "Vercel",
        icon: SiVercel,
        color: "#FFFFFF",
      },
    ],
  },
];