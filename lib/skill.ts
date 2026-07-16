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
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiNestjs,
  SiFirebase,
  SiVercel,
  SiGithub,
} from "react-icons/si";

export interface Skill {
  name: string;
  percentage: number;
  icon: React.ElementType;
  color: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React",
        percentage: 95,
        icon: FaReact,
        color: "#61DAFB",
      },
      {
        name: "Next.js",
        percentage: 92,
        icon: SiNextdotjs,
        color: "#FFFFFF",
      },
      {
        name: "TypeScript",
        percentage: 90,
        icon: SiTypescript,
        color: "#3178C6",
      },
      {
        name: "JavaScript",
        percentage: 95,
        icon: SiJavascript,
        color: "#F7DF1E",
      },
      {
        name: "Redux",
        percentage: 90,
        icon: SiRedux,
        color: "#764ABC",
      },
      {
        name: "Tailwind CSS",
        percentage: 94,
        icon: SiTailwindcss,
        color: "#38BDF8",
      },
      {
        name: "Material UI",
        percentage: 94,
        icon: SiMui,
        color: "#007FFF",
      },
      {
        name: "HTML5",
        percentage: 98,
        icon: FaHtml5,
        color: "#E34F26",
      },
      {
        name: "CSS3",
        percentage: 97,
        icon: FaCss3Alt,
        color: "#1572B6",
      },
    ],
  },

  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        percentage: 90,
        icon: FaNodeJs,
        color: "#5FA04E",
      },
      {
        name: "Express",
        percentage: 90,
        icon: SiExpress,
        color: "#FFFFFF",
      },
      {
        name: "NestJS",
        percentage: 80,
        icon: SiNestjs,
        color: "#E0234E",
      },
    ],
  },

  {
    title: "Database",
    skills: [
      {
        name: "MongoDB",
        percentage: 90,
        icon: SiMongodb,
        color: "#47A248",
      },
      {
        name: "MySQL",
        percentage: 85,
        icon: SiMysql,
        color: "#4479A1",
      },
      {
        name: "PostgreSQL",
        percentage: 80,
        icon: SiPostgresql,
        color: "#336791",
      },
      {
        name: "Firebase",
        percentage: 75,
        icon: SiFirebase,
        color: "#FFCA28",
      },
    ],
  },

  {
    title: "Tools",
    skills: [
      {
        name: "Git",
        percentage: 95,
        icon: FaGitAlt,
        color: "#F05032",
      },
      {
        name: "GitHub",
        percentage: 95,
        icon: SiGithub,
        color: "#FFFFFF",
      },
      {
        name: "Vercel",
        percentage: 90,
        icon: SiVercel,
        color: "#FFFFFF",
      },
    ],
  },
];