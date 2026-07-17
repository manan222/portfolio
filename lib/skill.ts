import {
  Code2,
  Globe,
  Database,
  Folder,
} from "lucide-react";

export interface SkillCategory {
  id: string;
  title: string;
  icon: any;
  version: string;
  skills: string[];
}

export const SKILLS: SkillCategory[] = [
  {
    id: "CAT-01",
    title: "Languages & Core",
    icon: Code2,
    version: "VER_6.4.2",
    skills: [
      "NodeJS",
      "TypeScript",
      "JavaScript",
      "PL/SQL",
      "HTML/CSS",
    ],
  },

  {
    id: "CAT-02",
    title: "Frameworks & Frontend",
    icon: Globe,
    version: "VER_6.4.2",
    skills: [
      "React",
      "Next.js",
      "Nest.js",
      "Material UI",
      "Tailwind CSS",
    ],
  },

  {
    id: "CAT-03",
    title: "Databases & Messaging",
    icon: Database,
    version: "VER_6.4.2",
    skills: [
      "Oracle Database",
      "PostgreSQL",
      "MongoDB",
      "MySQL"
    ],
  },

  {
    id: "CAT-04",
    title: "DevOps & Cloud",
    icon: Folder,
    version: "VER_6.4.2",
    skills: [
      "AWS",
      "Docker",
      "Docker Compose",
      "CI/CD (AWS CodePipeline)",
      "Google Cloud Functions",
      "Git & Version Control",
    ],
  },
];