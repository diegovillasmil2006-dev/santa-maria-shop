/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    deviceSizes: [390, 414, 768, 1024, 1280, 1920],
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
