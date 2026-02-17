/** @type {import('next').NextConfig} */
const sitemapDomain = "https://sagartask.in";
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  experimental: {
    outputFileTracingRoot: undefined,
  },
  images: {
    domains: [
      "localhost",
      "images.unsplash.com",
      "72.62.243.99",
      "api.digitechai.in",
    ],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "72.62.243.99",
        port: "5000",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "api.digitechai.in",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // rewrites removed for sitemap.xml, static file will be served from public/
};

module.exports = nextConfig;
