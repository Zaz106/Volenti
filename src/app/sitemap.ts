import type { MetadataRoute } from "next";

const baseUrl = "https://www.volenti.co.za";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date("2026-04-26"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/pages/workshops`,
      lastModified: new Date("2026-04-26"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pages/packages`,
      lastModified: new Date("2026-04-26"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pages/legal`,
      lastModified: new Date("2026-01-01"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
