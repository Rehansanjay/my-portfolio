/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // This tells Vercel to IGNORE the grammar errors and build anyway
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig