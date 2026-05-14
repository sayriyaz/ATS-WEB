import type { Metadata } from "next";
import GalleryPageClient from "@/components/GalleryPageClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://alwahaatechnical.com";

export const metadata: Metadata = {
  title: "Gallery | Alwahaa Technical Services LLC",
  description:
    "Browse our portfolio of luxury swimming pools, water features, and landscaping projects built across Dubai and the UAE.",
  openGraph: {
    title: "Pool Construction Gallery | Alwahaa Technical Services Dubai",
    description:
      "See 500+ completed pool projects — luxury villas, infinity pools, rooftop pools, jacuzzis and water features across Dubai and UAE.",
    url: `${siteUrl}/gallery`,
    images: [{ url: `${siteUrl}/images/gallery/1.png`, width: 1600, height: 900 }],
  },
};

const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Alwahaa Technical Services — Swimming Pool Portfolio Dubai",
  description:
    "Portfolio of luxury swimming pools, infinity pools, rooftop pools, jacuzzis, water features and landscaping projects built across Dubai and UAE by Alwahaa Technical Services LLC.",
  url: `${siteUrl}/gallery`,
  author: {
    "@type": "Organization",
    name: "Alwahaa Technical Services LLC",
    url: siteUrl,
  },
  image: [
    {
      "@type": "ImageObject",
      url: `${siteUrl}/images/gallery/1.png`,
      name: "Luxury villa swimming pool with Burj Khalifa view and water feature wall, Dubai",
      description: "Luxury residential pool construction by Alwahaa Technical Services Dubai",
    },
    {
      "@type": "ImageObject",
      url: `${siteUrl}/images/gallery/2.png`,
      name: "Custom residential swimming pool with mosaic tiles and tropical landscaping, Dubai villa",
      description: "Residential pool with tropical landscaping by Alwahaa Technical Services",
    },
    {
      "@type": "ImageObject",
      url: `${siteUrl}/images/gallery/3.png`,
      name: "Infinity overflow pool at Palm Jumeirah with Dubai Marina skyline",
      description: "Infinity pool construction at Palm Jumeirah by Alwahaa Technical Services UAE",
    },
    {
      "@type": "ImageObject",
      url: `${siteUrl}/images/gallery/6.png`,
      name: "Custom pool, jacuzzi and kids pool combo with LED underwater lighting at night Dubai",
      description: "Custom pool, jacuzzi and kids pool combo by Alwahaa Technical Services Dubai",
    },
    {
      "@type": "ImageObject",
      url: `${siteUrl}/images/gallery/7.png`,
      name: "Alwahaa Technical Services team installing blue glass mosaic tiles during swimming pool construction Dubai",
      description: "Swimming pool mosaic tile installation by Alwahaa Technical Services Dubai",
    },
    {
      "@type": "ImageObject",
      url: `${siteUrl}/images/gallery/9.png`,
      name: "Modern villa swimming pool at dusk with LED landscape lighting and palm trees Dubai",
      description: "Modern villa pool with landscape lighting by Alwahaa Technical Services Dubai",
    },
    {
      "@type": "ImageObject",
      url: `${siteUrl}/images/gallery/10.jpg`,
      name: "Rooftop infinity pool with panoramic city skyline view — commercial rooftop pool construction Dubai",
      description: "Rooftop infinity pool construction by Alwahaa Technical Services Dubai",
    },
    {
      "@type": "ImageObject",
      url: `${siteUrl}/images/gallery/11.png`,
      name: "Alwahaa Technical Services premium pool construction and finishing — circular rooftop pool tiling in progress Dubai",
      description: "Premium pool construction and mosaic tile finishing by Alwahaa Technical Services",
    },
    {
      "@type": "ImageObject",
      url: `${siteUrl}/images/gallery/15.png`,
      name: "Custom swimming pool with dark mosaic finish and lush tropical landscaping Dubai",
      description: "Custom dark mosaic pool by Alwahaa Technical Services Dubai",
    },
  ],
};

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />
      <GalleryPageClient />
    </>
  );
}
