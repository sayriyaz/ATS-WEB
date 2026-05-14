const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://alwahaatechnical.com";

const GALLERY_IMAGES = [
  { src: "/images/gallery/1.png", title: "Luxury villa swimming pool with Burj Khalifa view and water feature wall, Dubai", caption: "Luxury residential pool construction by Alwahaa Technical Services Dubai" },
  { src: "/images/gallery/2.png", title: "Custom residential swimming pool with mosaic tiles and tropical landscaping, Dubai villa", caption: "Residential pool with tropical landscaping by Alwahaa Technical Services" },
  { src: "/images/gallery/3.png", title: "Infinity overflow pool at Palm Jumeirah with Dubai Marina skyline", caption: "Infinity pool construction at Palm Jumeirah by Alwahaa Technical Services UAE" },
  { src: "/images/gallery/4.png", title: "Swimming pool technical construction plan and engineering drawings, Dubai", caption: "Professional pool engineering and design by Alwahaa Technical Services" },
  { src: "/images/gallery/5.png", title: "Luxury swimming pool design with shallow ledge, water feature wall and overflow edge", caption: "Custom luxury pool design by Alwahaa Technical Services Dubai" },
  { src: "/images/gallery/11.png", title: "Alwahaa Technical Services premium pool construction and finishing — circular rooftop pool tiling in progress Dubai", caption: "Premium pool construction and mosaic tile finishing by Alwahaa Technical Services" },
  { src: "/images/gallery/6.png", title: "Custom pool jacuzzi and kids pool combo with LED underwater lighting at night Dubai", caption: "Custom pool, jacuzzi and kids pool combo by Alwahaa Technical Services Dubai" },
  { src: "/images/gallery/7.png", title: "Alwahaa Technical Services team installing blue glass mosaic tiles during swimming pool construction Dubai", caption: "Swimming pool mosaic tile installation by Alwahaa Technical Services Dubai" },
  { src: "/images/gallery/12.png", title: "Expert pool construction and finishing — decorative tiled residential pool Dubai UAE", caption: "Expert pool tiling and finishing by Alwahaa Technical Services" },
  { src: "/images/gallery/13.png", title: "Alwahaa Technical Services crane hire and heavy equipment transport for pool construction Dubai UAE", caption: "Heavy equipment and crane services by Alwahaa Technical Services" },
  { src: "/images/gallery/8.png", title: "Infinity pool cross-section showing underground filtration pump room — pool engineering Dubai UAE", caption: "Pool filtration system and engineering by Alwahaa Technical Services Dubai" },
  { src: "/images/gallery/14.png", title: "Alwahaa Technical Services site survey and foundation work for pool construction Dubai UAE", caption: "Pool site survey and foundation work by Alwahaa Technical Services Dubai" },
  { src: "/images/gallery/9.png", title: "Modern villa swimming pool at dusk with LED landscape lighting and palm trees Dubai", caption: "Modern villa pool with landscape lighting by Alwahaa Technical Services Dubai" },
  { src: "/images/gallery/15.png", title: "Custom swimming pool with dark mosaic finish and tropical landscaping Dubai", caption: "Custom dark mosaic pool by Alwahaa Technical Services Dubai" },
  { src: "/images/gallery/16.png", title: "Alwahaa Technical Services pool structure components delivery — engineered for strength Dubai UAE", caption: "Pool structure delivery and installation by Alwahaa Technical Services" },
  { src: "/images/gallery/10.jpg", title: "Rooftop infinity pool with panoramic city skyline view — commercial rooftop pool construction Dubai", caption: "Rooftop infinity pool construction by Alwahaa Technical Services Dubai" },
];

const OG_IMAGES = [
  { src: "/og-image.jpg", title: "Alwahaa Technical Services LLC — Luxury Swimming Pools Dubai UAE", caption: "Leading swimming pool contractor in Dubai with 15+ years experience" },
  { src: "/images/logo.png", title: "Alwahaa Technical Services LLC Logo — Pool Contractor Dubai", caption: "Alwahaa Technical Services LLC, Port Saeed, Deira, Dubai" },
  { src: "/images/blog/proud_of_uae.png", title: "Proud of UAE — Alwahaa Technical Services LLC luxury pool builder Dubai", caption: "Alwahaa Technical Services LLC celebrates UAE's luxury outdoor lifestyle" },
];

export async function GET() {
  const pages = [
    { url: `${siteUrl}/gallery`, images: GALLERY_IMAGES },
    { url: siteUrl, images: OG_IMAGES },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${pages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
${page.images
  .map(
    (img) => `    <image:image>
      <image:loc>${siteUrl}${img.src}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`
  )
  .join("\n")}
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
