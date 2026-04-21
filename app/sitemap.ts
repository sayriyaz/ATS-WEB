import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://alwahaatechnical.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const sections = [
    "",
    "#about",
    "#commercial",
    "#pools",
    "#services",
    "#process",
    "#gallery",
    "#wellness",
    "#cta",
  ];

  return sections.map((s) => ({
    url: `${siteUrl}/${s}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: s === "" ? 1.0 : 0.8,
  }));
}
