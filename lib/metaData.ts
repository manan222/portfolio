import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://abdulmanan.vercel.app"),

  title: {
    default: "Abdul Manan Ali | Senior Frontend Engineer",
    template: "%s | Abdul Manan Ali",
  },

  description:
    "Senior Frontend Engineer with 6+ years of experience building modern web applications using React, Next.js, TypeScript, Node.js and MongoDB.",

  keywords: [
    "React Developer",
    "Next.js",
    "Frontend Engineer",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "MERN",
    "Portfolio",
  ],

  authors: [
    {
      name: "Abdul Manan Ali",
    },
  ],

  creator: "Abdul Manan Ali",

  openGraph: {
    title: "Abdul Manan Ali",
    description:
      "Senior Frontend Engineer Portfolio",

    url: "https://abdulmanan.vercel.app",

    siteName: "Abdul Manan Portfolio",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Abdul Manan Ali",
    description:
      "Senior Frontend Engineer Portfolio",
  },

  robots: {
    index: true,
    follow: true,
  },
};