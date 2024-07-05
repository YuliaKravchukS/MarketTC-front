/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'proactive-flexibility-production.up.railway.app',
      },
    ],
  },
};

export default nextConfig;
