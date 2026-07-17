import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sode.co.in";

  return [
    {
      url: baseUrl,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/iiitb`,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/iimk`,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/iit-madras/advanced-certificate-in-applied-artificial-intelligence-and-deep-learning`,
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];
}
