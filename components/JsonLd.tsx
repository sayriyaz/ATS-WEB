const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://alwahaatechnical.com";

const PHONE = "+97142552895";
const WHATSAPP = "+971525652771";
const EMAIL = "info@alwahaatechnical.com";
const EMAIL_ALT = "alwahaatechnical@gmail.com";
const MAPS = "https://maps.app.goo.gl/V3Ekqs9VeJK3ENjz7";
const GBP_URL = "https://g.page/r/CXPuHQAkNbvIEBM";

const address = {
  "@type": "PostalAddress",
  streetAddress: "5 10A St, Port Saeed, Deira",
  addressLocality: "Dubai",
  addressRegion: "Dubai",
  postalCode: "91270",
  addressCountry: "AE",
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}#organization`,
  name: "Alwahaa Technical Services LLC",
  alternateName: [
    "ATS",
    "Al Wahaa Pools",
    "Alwahaa Pools",
    "AL WAHAA TECHNICAL SERVICES L.L.C",
    "Alwahaa Technical Services",
  ],
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/images/logo.png`,
    width: 512,
    height: 512,
  },
  image: `${siteUrl}/og-image.jpg`,
  description:
    "Leading swimming pool contractor in Dubai — concrete, infinity, rooftop, commercial and residential pools, jacuzzis, water features, landscaping and hardscaping across the UAE.",
  slogan: "For Your Expectations, We Build With Passion.",
  foundingYear: "2008",
  email: EMAIL,
  telephone: [PHONE, WHATSAPP],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: PHONE,
      contactType: "customer service",
      areaServed: "AE",
      availableLanguage: ["en", "ar", "hi"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "18:00",
      },
    },
    {
      "@type": "ContactPoint",
      telephone: WHATSAPP,
      contactType: "sales",
      contactOption: "TollFree",
      areaServed: "AE",
      availableLanguage: ["en", "ar", "hi"],
    },
    {
      "@type": "ContactPoint",
      email: EMAIL,
      contactType: "customer support",
      areaServed: "AE",
    },
  ],
  address,
  sameAs: [
    "https://www.facebook.com/alwahaapools",
    "https://www.instagram.com/alwahaa_pools/",
    "https://www.linkedin.com/in/alwahaa-technical-services-llc-7183b080/",
    GBP_URL,
  ],
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService", "HomeAndConstructionBusiness"],
  "@id": `${siteUrl}#localbusiness`,
  name: "Alwahaa Technical Services LLC",
  alternateName: ["Alwahaa Pools", "Al Wahaa Pools", "ATS Pools"],
  image: [
    `${siteUrl}/og-image.jpg`,
    `${siteUrl}/images/gallery/1.png`,
    `${siteUrl}/images/gallery/2.png`,
    `${siteUrl}/images/gallery/3.png`,
  ],
  logo: `${siteUrl}/images/logo.png`,
  url: siteUrl,
  telephone: PHONE,
  email: EMAIL,
  priceRange: "AED 50,000 – AED 2,000,000",
  currenciesAccepted: "AED",
  paymentAccepted: "Cash, Bank Transfer, Cheque",
  description:
    "Alwahaa Technical Services LLC is a leading swimming pool contractor in Dubai with 15+ years of experience building custom concrete, infinity, rooftop, commercial and residential pools, jacuzzis, water features, landscaping and hardscaping across the UAE.",
  address,
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.260709,
    longitude: 55.326535,
  },
  hasMap: MAPS,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:30",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Dubai", "@id": "https://www.wikidata.org/wiki/Q612" },
    { "@type": "City", name: "Abu Dhabi", "@id": "https://www.wikidata.org/wiki/Q37463" },
    { "@type": "City", name: "Sharjah" },
    { "@type": "City", name: "Ajman" },
    { "@type": "City", name: "Ras Al Khaimah" },
    { "@type": "City", name: "Fujairah" },
    { "@type": "Country", name: "United Arab Emirates", "@id": "https://www.wikidata.org/wiki/Q878" },
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Swimming Pool Construction Dubai",
        description: "Custom concrete, infinity, skimmer, overflow, rooftop, lap, plunge, and fibreglass pools for residential and commercial projects in Dubai and UAE.",
        areaServed: "AE",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Swimming Pool Maintenance Dubai",
        description: "Routine pool servicing, water chemistry balancing, filtration, pump and equipment care across Dubai and UAE.",
        areaServed: "AE",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Jacuzzi Installation Dubai",
        description: "Custom-built and pre-fabricated jacuzzi and spa installations for villas and commercial properties.",
        areaServed: "AE",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Water Features & Fountains Dubai",
        description: "Designed and engineered decorative water features, fountains, and waterfalls for residential and commercial spaces.",
        areaServed: "AE",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Landscaping & Hardscaping Dubai",
        description: "Outdoor landscaping, paving, decking, gazebos, pergolas and garden design across Dubai, UAE.",
        areaServed: "AE",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Pool Renovation & Repair Dubai",
        description: "Full pool renovation, tile replacement, equipment upgrades, leak detection and structural repair.",
        areaServed: "AE",
      },
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "3.9",
    reviewCount: "21",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    "https://www.facebook.com/alwahaapools",
    "https://www.instagram.com/alwahaa_pools/",
    "https://www.linkedin.com/in/alwahaa-technical-services-llc-7183b080/",
    GBP_URL,
  ],
};

const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Alwahaa Technical Services phone number?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alwahaa Technical Services LLC can be reached at +971 4 255 2895 (office) or +971 52 565 2771 (WhatsApp/mobile). Email: info@alwahaatechnical.com.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Alwahaa Technical Services located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alwahaa Technical Services LLC is located at 5 10A St, Port Saeed, Deira, Dubai, United Arab Emirates. P.O. Box 91270.",
      },
    },
    {
      "@type": "Question",
      name: "What types of swimming pools does Alwahaa Technical Services build in Dubai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alwahaa Technical Services builds concrete, skimmer, overflow, infinity, lap, plunge, rooftop, above-ground, vinyl, and fibreglass pools for residential and commercial projects across the UAE. They also build jacuzzis, water features, and handle landscaping.",
      },
    },
    {
      "@type": "Question",
      name: "How much does swimming pool construction cost in Dubai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Swimming pool construction costs in Dubai typically range from AED 50,000 for smaller residential pools to AED 2,000,000+ for large commercial or luxury infinity pools. Contact Alwahaa Technical Services for a free quote at +971 52 565 2771.",
      },
    },
    {
      "@type": "Question",
      name: "Does Alwahaa Technical Services offer pool maintenance in Dubai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Alwahaa Technical Services offers routine pool servicing, water chemistry balancing, filtration and equipment care, and full repair and renovation services across Dubai and the UAE.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas does Alwahaa Technical Services serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alwahaa Technical Services serves all areas of Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and across the United Arab Emirates.",
      },
    },
    {
      "@type": "Question",
      name: "How long has Alwahaa Technical Services been in business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alwahaa Technical Services LLC has been building swimming pools and providing technical services in Dubai since 2008 — over 15 years of experience and 500+ completed projects across the UAE.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get a free quote for pool construction in Dubai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contact Alwahaa Technical Services on WhatsApp at +971 52 565 2771, call +971 4 255 2895, or email info@alwahaatechnical.com. You can also fill out the quote form at alwahaatechnical.com. The team typically responds within minutes during UAE business hours (Mon–Sat, 8AM–6:30PM).",
      },
    },
  ],
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Gallery", item: `${siteUrl}/gallery` },
  ],
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}#website`,
  url: siteUrl,
  name: "Alwahaa Technical Services LLC",
  alternateName: "Alwahaa Pools Dubai",
  inLanguage: "en-AE",
  publisher: { "@id": `${siteUrl}#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/?s={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const webpage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteUrl}#webpage`,
  url: siteUrl,
  name: "Alwahaa Technical Services LLC | Luxury Swimming Pools Dubai, UAE",
  description:
    "Leading swimming pool contractor in Dubai. ATS designs and builds concrete, infinity, rooftop, commercial and residential pools — plus jacuzzis, water features, landscaping, and maintenance across the UAE.",
  isPartOf: { "@id": `${siteUrl}#website` },
  about: { "@id": `${siteUrl}#organization` },
  inLanguage: "en-AE",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", ".headline"],
  },
};

const ALL_SCHEMAS = [organization, localBusiness, website, webpage, faq, breadcrumb];

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
