/** @type {import('next').NextConfig} */
const sitemapDomain = 'https://aaganjewarandco.in/';

const nextConfig = {
  reactStrictMode: true,

  // Note: removed `output: 'export'` to allow server-side dynamic routes

  images: {
    unoptimized: true, // 🔥 required for static export
    domains: [
      'localhost',
      'images.unsplash.com',
      '159.65.154.5',
      'api.digitechai.in',
      'studycafe.in',
      'www.studycafe.in',
      'www.aaganjewarandco.in',
      'i0.wp.com',
      'i1.wp.com',
      'i2.wp.com'
    ],
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
};

module.exports = nextConfig;