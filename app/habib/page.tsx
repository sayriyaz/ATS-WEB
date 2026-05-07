import type { Metadata } from "next";
import HabibLinkPage from "@/components/HabibLinkPage";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://alwahaatechnical.com";

export const metadata: Metadata = {
  title: "Habib Rahman",
  description:
    "Connect with Habib Rahman, Project Manager at Alwahaa Technical Services LLC, for pool construction, renovation, maintenance, and swimming pool project enquiries in Dubai.",
  alternates: {
    canonical: `${siteUrl}/habib`,
  },
  openGraph: {
    title: "Habib Rahman | Alwahaa Technical Services",
    description:
      "Direct contact page for Habib Rahman, Project Manager at Alwahaa Technical Services LLC.",
    url: `${siteUrl}/habib`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Habib Rahman - Alwahaa Technical Services",
      },
    ],
  },
};

export default function HabibPage() {
  return <HabibLinkPage />;
}
