/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'grzejniki.ergotree.pl',
      },
    ],
  },
};

export default nextConfig;
