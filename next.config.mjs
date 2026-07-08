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
};

export default nextConfig;
