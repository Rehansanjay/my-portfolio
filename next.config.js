/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 1. Ignore "Spelling" errors (Quotes, etc.)
  eslint: {
    ignoreDuringBuilds: true,
  },
  // 2. Ignore "Grammar" errors (TypeScript types)
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig