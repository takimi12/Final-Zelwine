/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'grzejniki.ergotree.pl',
          port: '',
          pathname: '/wp-content/**',
        },
        {
          protocol: 'https',
          hostname: 'grzejniki.ergotree.pl',
          port: '',
          pathname: '/wp-content/**',
        },
      ]
    },
  };
  
  export default nextConfig;