import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Alwahaa Technical Services LLC",
    short_name: "ATS Pools",
    description:
      "Luxury swimming pool construction, water features, and wellness in Dubai, UAE.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#00aaff",
    icons: [
      { src: "/favicon.png", sizes: "192x192", type: "image/png" },
      { src: "/favicon.png", sizes: "512x512", type: "image/png" },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
