/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [480, 800, 1280, 1920],
    imageSizes: [64, 128, 256],
  },
}

export default nextConfig
