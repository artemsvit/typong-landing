/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/typong-landing',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/typong-landing/',
  trailingSlash: true,
}

module.exports = nextConfig
