const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://alwahaatechnical.com";

const PHONE = "+97142552895";
const WHATSAPP = "+971525652771";
const EMAIL = "alwahaatechnical@gmail.com";
const MAPS = "https://maps.app.goo.gl/V3Ekqs9VeJK3ENjz7";

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}#organization`,
  name: "Alwahaa Technical Services LLC",
  alternateName: ["ATS", "Al Wahaa Pools", "Alwahaa Pools"],
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/images/logo.png`,
    width: 512,
    height: 512,
  },
  image: `${siteUrl}/og-image.jpg`,
  description:
    "Leading swimming pool contractor in Dubai — concrete, infinity, rooftop, commercial and residential pools, jacuzzis, water features, and landscaping.",
  slogan: "For Your Expectations, We Build With Passion.",
  email: EMAIL,
  telephone: PHONE,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: PHONE,
      contactType: "customer service",
      areaServed: "AE",
      availableLanguage: ["en", "ar"],
    },
    {
      "@type": "ContactPoint",
      telephone: WHATSAPP,
      contactType: "sales",
      contactOption: "TollFree",
      areaServed: "AE",
      availableLanguage: ["en", "ar", "hi"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "P.O. Box 91270",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    addressCountry: "AE",
  },
  sameAs: [
    "https://www.facebook.com/",
    "https://www.instagram.com/",
    "https://www.linkedin.com/",
  ],
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService", "HomeAndConstructionBusiness"],
  "@id": `${siteUrl}#localbusiness`,
  name: "Alwahaa Technical Services LLC",
  image: `${siteUrl}/og-image.jpg`,
  logo: `${siteUrl}/images/logo.png`,
  url: siteUrl,
  telephone: PHONE,
  email: EMAIL,
  priceRange: "$$-$$$$",
  description:
    "Swimming pool construction, maintenance, jacuzzis, water features, landscaping and hardscaping in Dubai, UAE.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "P.O. Box 91270",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.2048,
    longitude: 55.2708,
  },
  hasMap: MAPS,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Dubai" },
    { "@type": "City", name: "Abu Dhabi" },
    { "@type": "City", name: "Sharjah" },
    { "@type": "City", name: "Ajman" },
    { "@type": "Country", name: "United Arab Emirates" },
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Swimming Pool Construction",
        description:
          "Custom concrete, infinity, skimmer, overflow, and rooftop pools.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Swimming Pool Maintenance",
        description:
          "Routine servicing, water chemistry, filtration and equipment care.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Jacuzzi Installation",
        description: "Custom-built and pre-fab jacuzzi installations.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Water Features & Fountains",
        description: "Designed and engineered water features in-house.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Landscaping & Hardscaping",
        description:
          "Outdoor landscaping, paving, decking, gazebos and pergolas.",
      },
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "120",
  },
};

const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of swimming pools does ATS build in Dubai?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "ATS builds concrete, skimmer, overflow, infinity, lap, plunge, rooftop, above-ground, vinyl, and fibreglass pools for both residential and commercial projects across the UAE.",
      },
    },
    {
      "@type": "Question",
      name: "Do you also offer pool maintenance?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. We offer routine pool servicing, water chemistry balancing, filtration and equipment care, and full repair & renovation services.",
      },
    },
    {
      "@type": "Question",
      name: "How do I request a quote?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Contact us on WhatsApp at +971 52 565 2771, call +971 4 255 2895, or email alwahaatechnical@gmail.com. We typically respond within minutes during UAE business hours.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Dubai, Abu Dhabi, Sharjah, Ajman and across the United Arab Emirates.",
      },
    },
  ],
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: `${siteUrl}/#about`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Pools",
      item: `${siteUrl}/#commercial`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Services",
      item: `${siteUrl}/#services`,
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Gallery",
      item: `${siteUrl}/#gallery`,
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Contact",
      item: `${siteUrl}/#cta`,
    },
  ],
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}#website`,
  url: siteUrl,
  name: "Alwahaa Technical Services LLC",
  inLanguage: "en-AE",
  publisher: { "@id": `${siteUrl}#organization` },
};

const ALL_SCHEMAS = [organization, localBusiness, website, faq, breadcrumb];

export default function JsonLd() {
  return (
    <>
      {ALL_SCHEMAS.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
