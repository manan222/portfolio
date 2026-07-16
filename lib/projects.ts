export interface Project {
  id: number;
  title: string;
  category: "Frontend" | "MERN" | "CMS" | "Enterprise";
  subtitle: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  featured: boolean;
  technologies: string[];
  features: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 1,

    title: "Seulah",

    category: "Enterprise",

    subtitle: "Digital Loan Management Platform",

    description:
      "Developed and maintained the frontend for Seulah, a Saudi Arabian digital financing platform operating under the supervision of the Saudi Central Bank (SAMA). The platform enables secure online loan applications, customer onboarding, document management and financing workflows.",

    image: "/images/projects/seulah.png",

    github: "",

    demo: "",

    featured: true,

    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Material UI",
      "Tailwind CSS",
      "Redux",
      "REST API",
    ],

    features: [
      "Loan Application",
      "Customer Dashboard",
      "Authentication",
      "CMS",
      "Responsive Design",
      "Performance Optimization",
    ],
  },

  {
    id: 2,

    title: "Bandre",

    category: "CMS",

    subtitle: "Website Builder Platform",

    description:
      "Bandre is a website builder platform allowing businesses to create customizable websites with themes, dynamic sections, multilingual support and domain management.",

    image: "/images/projects/bandre.png",

    github: "",

    demo: "",

    featured: true,

    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Material UI",
      "Redux",
      "REST API",
    ],

    features: [
      "CMS",
      "Theme Builder",
      "Custom Sections",
      "Translation",
      "SEO",
      "Responsive",
    ],
  },

  {
    id: 3,

    title: "Ingenious Track",

    category: "MERN",

    subtitle: "E-Commerce Platform",

    description:
      "Full-featured e-commerce platform consisting of customer website and administration panel for managing products, inventory, categories and orders.",

    image: "/images/projects/ingenious-track.png",

    github: "",

    demo: "",

    featured: true,

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux",
      "Material UI",
    ],

    features: [
      "Admin Dashboard",
      "Inventory",
      "Orders",
      "Categories",
      "Products",
      "Authentication",
    ],
  },

  {
    id: 4,

    title: "The Looks",

    category: "Frontend",

    subtitle: "Salon Booking Platform",

    description:
      "Marketplace allowing users to discover salons, beauty professionals and barber shops while booking appointments online.",

    image: "/images/projects/looks.png",

    github: "",

    demo: "",

    featured: true,

    technologies: [
      "React",
      "Material UI",
      "REST API",
      "Redux",
    ],

    features: [
      "Salon Search",
      "Booking",
      "Maps",
      "Reviews",
      "Responsive",
    ],
  },

  {
    id: 5,

    title: "Neo Solutions",

    category: "Frontend",

    subtitle: "Corporate Website",

    description:
      "Redesigned and developed the corporate website using modern animations, reusable components and responsive layouts.",

    image: "/images/projects/neo.png",

    github: "",

    demo: "",

    featured: false,

    technologies: [
      "React",
      "Framer Motion",
      "Tailwind CSS",
      "Material UI",
    ],

    features: [
      "Landing Page",
      "Animations",
      "SEO",
      "Responsive",
    ],
  },

  {
    id: 6,

    title: "Progressive Loan Application",

    category: "Enterprise",

    subtitle: "Progressive Web Application",

    description:
      "Developed a Progressive Web Application focused on digital loan processing with responsive UI and offline-ready capabilities.",

    image: "/images/projects/progressive-loan.png",

    github: "",

    demo: "",

    featured: false,

    technologies: [
      "Angular",
      "TypeScript",
      "PWA",
      "REST API",
    ],

    features: [
      "Offline Support",
      "Authentication",
      "Loan Processing",
      "Responsive",
    ],
  },

  {
    id: 7,

    title: "Data Migrator",

    category: "Enterprise",

    subtitle: "Enterprise Migration Tool",

    description:
      "Enterprise application used for extracting, transforming and migrating legacy data into Oracle Cloud environments.",

    image: "/images/projects/data-migrator.png",

    github: "",

    demo: "",

    featured: false,

    technologies: [
      "React",
      "Node.js",
      "Oracle Cloud",
      "REST API",
    ],

    features: [
      "ETL",
      "Data Validation",
      "Migration",
      "Reporting",
    ],
  },

  {
    id: 8,

    title: "AbokiFX",

    category: "Frontend",

    subtitle: "Currency Exchange Platform",

    description:
      "Currency exchange platform providing exchange rates, historical trends and market insights.",

    image: "/images/projects/abokifx.png",

    github: "",

    demo: "",

    featured: false,

    technologies: [
      "React",
      "Chart.js",
      "REST API",
    ],

    features: [
      "Exchange Rates",
      "Charts",
      "Currency History",
      "Responsive",
    ],
  },
];

export const PROJECT_CATEGORIES = [
  "All",
  "Frontend",
  "MERN",
  "CMS",
  "Enterprise",
] as const; 