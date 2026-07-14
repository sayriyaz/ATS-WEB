/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400,
  },
  async rewrites() {
    return [
      { source: "/habib", destination: "/habib/index.html" },
    ];
  },
  async headers() {
    return [
      {
        // Other security headers (nosniff, frame-ancestors CSP,
        // referrer-policy) are set in vercel.json — do not duplicate
        // here. X-Frame-Options intentionally omitted: the CSP
        // frame-ancestors allowlist permits the portfolio embed.
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
