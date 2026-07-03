/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "solguruz.com",
      },
      {
        protocol: "https",
        hostname: "dignizant.com",
      },
      {
        protocol: "https",
        hostname: "iroidsolutions.com",
      },
    ],
  },
};

export default nextConfig;
