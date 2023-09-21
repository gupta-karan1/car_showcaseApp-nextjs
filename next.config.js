/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.imagin.studio"],
  },
  env: {
    API_URL: process.env.API_URL,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
