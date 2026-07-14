import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://alwahaatechnical.com";

// AI search/crawl bots explicitly allowed for GEO visibility
const AI_BOTS = [
  "GPTBot",
  "ChatGPT-User",
  "PerplexityBot",
  "ClaudeBot",
  "anthropic-ai",
  "Google-Extended",
  "Bingbot",
  "Applebot",
  "Applebot-Extended",
  "Amazonbot",
  "Bytespider",
  "FacebookBot",
  "Twitterbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Do NOT disallow /_next/ — Googlebot needs JS chunks and the
        // image optimizer (/_next/image) to render and index pages.
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      ...AI_BOTS.map((bot) => ({
        userAgent: bot,
        allow: "/",
      })),
    ],
    sitemap: [`${siteUrl}/sitemap.xml`, `${siteUrl}/image-sitemap.xml`],
    host: siteUrl,
  };
}
