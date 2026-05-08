import type { Metadata, Viewport } from "next";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://alwahaatechnical.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Alwahaa Technical Services LLC | Luxury Swimming Pools Dubai, UAE",
    template: "%s | Alwahaa Technical Services",
  },
  description:
    "Leading swimming pool contractor in Dubai. ATS designs and builds concrete, infinity, rooftop, commercial and residential pools — plus jacuzzis, water features, landscaping, and maintenance across the UAE.",
  applicationName: "Alwahaa Technical Services",
  generator: "Next.js",
  keywords: [
    "swimming pool Dubai",
    "pool construction Dubai",
    "swimming pool contractor dubai",
    "swimming pool construction dubai",
    "pool contractor UAE",
    "infinity pool Dubai",
    "rooftop pool UAE",
    "commercial pool construction",
    "residential pools Dubai",
    "jacuzzi Dubai",
    "pool maintenance Dubai",
    "pool repair Dubai",
    "water features UAE",
    "landscaping Dubai",
    "Alwahaa Technical Services",
    "Alwahaa Pools",
    "Al Wahaa Pools",
    "ATS Pools",
  ],
  authors: [{ name: "Alwahaa Technical Services LLC", url: siteUrl }],
  creator: "Alwahaa Technical Services LLC",
  publisher: "Alwahaa Technical Services LLC",
  category: "Construction",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-AE": siteUrl,
      "x-default": siteUrl,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: siteUrl,
    siteName: "Alwahaa Technical Services",
    title: "Alwahaa Technical Services LLC | Luxury Swimming Pools Dubai",
    description:
      "Crafting signature pools across Dubai — concrete, infinity, rooftop, commercial and residential. For your expectations, we build with passion.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alwahaa Technical Services — Luxury Pools Dubai",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alwahaa Technical Services LLC",
    description:
      "Luxury swimming pool construction, water features and wellness in Dubai, UAE.",
    images: ["/og-image.jpg"],
    creator: "@alwahaapools",
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.png",
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add these when you register with the respective webmaster tools:
    // google: "google-site-verification-token",
    // yandex: "yandex-verification-token",
    // yahoo: "yahoo-verification-token",
    // other: {
    //   "facebook-domain-verification": "your-token",
    // },
  },
  other: {
    "geo.region": "AE-DU",
    "geo.placename": "Dubai",
    "geo.position": "25.260709;55.326535",
    ICBM: "25.260709, 55.326535",
    "DC.title": "Alwahaa Technical Services LLC",
    rating: "General",
    distribution: "Global",
    "revisit-after": "7 days",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0e1a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AE" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <JsonLd />
      </head>
      <body className="bg-white text-ink antialiased">{children}</body>
    </html>
  );
}
