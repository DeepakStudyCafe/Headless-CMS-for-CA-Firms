/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: undefined,
  },
  images: {
    domains: ['localhost', 'images.unsplash.com', '72.62.243.99', 'digitechai.in', 'api.digitechai.in', 'backend .digitechai.in'],
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
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'digitechai.in',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'api.digitechai.in',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'backend.digitechai.in',
        pathname: '/uploads/**',
      },
    ],
  },
}

module.exports = nextConfig
