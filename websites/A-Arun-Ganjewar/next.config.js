/** @type {import('next').NextConfig} */
const sitemapDomain = 'https://digitechai.in/';
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: undefined,
  },
  images: {
    domains: ['localhost', 'images.unsplash.com', '72.62.243.99', 'api.digitechai.in', 'studycafe.in', 'www.studycafe.in', 'i0.wp.com', 'i1.wp.com', 'i2.wp.com'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5000',
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: '72.62.243.99',
        port: '5000',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'api.digitechai.in',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'studycafe.in',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.studycafe.in',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.wp.com',
        pathname: '/**',
      },
    ]
  },
  // rewrites removed for sitemap.xml, static file will be served from public/
}

module.exports = nextConfig
