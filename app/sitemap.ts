import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://abdulmanan.vercel.app";

  return [
    {
      url: baseUrl,
      priority: 1,
      changeFrequency: "weekly",
      lastModified: new Date(),
    },
  ];
}