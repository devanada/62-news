/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["akcdn.detik.net.id"],
  },
};

module.exports = nextConfig;
