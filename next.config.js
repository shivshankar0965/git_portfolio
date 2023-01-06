/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://avatars.githubusercontent.com/',
        port: '',
        pathname: '/u/**',
      },
    ],
  },
}

module.exports = nextConfig
