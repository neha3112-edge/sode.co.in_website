import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sode.co.in";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/iiitb`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/iimk`,
      lastModified: new Date(),
      priority: 0.9,
    },
  ];
}
