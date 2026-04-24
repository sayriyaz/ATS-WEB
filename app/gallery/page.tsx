import type { Metadata } from "next";
import GalleryPageClient from "@/components/GalleryPageClient";

export const metadata: Metadata = {
  title: "Gallery | Alwahaa Technical Services LLC",
  description:
    "Browse our portfolio of luxury swimming pools, water features, and landscaping projects built across Dubai and the UAE.",
};

export default function GalleryPage() {
  return <GalleryPageClient />;
}
