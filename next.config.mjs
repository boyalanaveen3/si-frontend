/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: {
      bodySizeLimit: '1mb'
    }
  },
  images: {
    domains: [
      'images.unsplash.com',
      'source.unsplash.com',
      'www.cloudways.com',
      'drive.google.com',
      'drive.googleusercontent.com'
    ]
  }
};

export default nextConfig;
