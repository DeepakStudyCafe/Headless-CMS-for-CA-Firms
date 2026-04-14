/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Ignore ESLint errors during build to avoid blocking deployment while
    // we iteratively fix rules. Remove this in production after cleaning lint warnings.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['sadgurushakti.org', 'automatepractice.com', 'cadeepakgupta.com', 'capracticeautomation.com', 'practovia.com', 'digitechai.in'],
  },
}

module.exports = nextConfig
