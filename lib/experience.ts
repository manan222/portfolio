export interface Experience {
  id: number;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
  logo: string;
}

export const EXPERIENCE: Experience[] = [
  {
    id: 1,

    company: "The Neo Solutions",

    role: "Senior Frontend Engineer",

    location: "Lahore, Pakistan",

    startDate: "2024",

    endDate: "Present",

    current: true,

    logo: "/images/company/neo.png",

    description:
      "Building scalable enterprise applications, CMS platforms and modern web experiences using React, Next.js and TypeScript.",

    responsibilities: [
      "Developed pixel-perfect responsive web applications.",
      "Revamped the company website using Framer Motion animations.",
      "Developed reusable UI components.",
      "Built dynamic CMS solutions.",
      "Improved website performance by 30%.",
      "Worked closely with UI/UX designers.",
    ],

    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Material UI",
      "Framer Motion",
      "REST API",
      "Git",
    ],
  },

  {
    id: 2,

    company: "GoSaaS Labs",

    role: "MERN Stack Developer",

    location: "Lahore, Pakistan",

    startDate: "2021",

    endDate: "2024",

    current: false,

    logo: "/images/company/gosaas.png",

    description:
      "Worked on enterprise ETL platform processing millions of records daily using MERN Stack.",

    responsibilities: [
      "Developed React dashboards.",
      "Created reusable components.",
      "Integrated REST APIs.",
      "Worked on Node.js backend.",
      "Optimized application performance.",
      "Participated in Agile development.",
    ],

    technologies: [
      "React",
      "Redux",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "Material UI",
      "Git",
    ],
  },

  {
    id: 3,

    company: "Codility Solutions",

    role: "React Developer",

    location: "Lahore, Pakistan",

    startDate: "2020",

    endDate: "2021",

    current: false,

    logo: "/images/company/codility.png",

    description:
      "Developed responsive web applications using React.js and modern frontend technologies.",

    responsibilities: [
      "Developed reusable React components.",
      "Used Redux and Context API.",
      "Integrated backend APIs.",
      "Optimized UI performance.",
      "Collaborated with backend developers.",
    ],

    technologies: [
      "React",
      "Redux",
      "JavaScript",
      "HTML5",
      "CSS3",
      "REST API",
      "Git",
    ],
  },

  {
    id: 4,

    company: "Luminogics",

    role: "React Developer",

    location: "Lahore, Pakistan",

    startDate: "2019",

    endDate: "2020",

    current: false,

    logo: "/images/company/luminogics.png",

    description:
      "Completed intensive React.js training and developed single-page applications.",

    responsibilities: [
      "Learned React ecosystem.",
      "Built SPA applications.",
      "Worked on routing and state management.",
      "Created reusable UI components.",
    ],

    technologies: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "React Router",
      "Git",
    ],
  },
];