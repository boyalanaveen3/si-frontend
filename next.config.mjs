/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: {
      bodySizeLimit: '1mb'
    }
  },
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com']
  }
};

export default nextConfig;
