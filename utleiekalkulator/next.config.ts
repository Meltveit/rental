/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    // Future support for multiple languages
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    domains: [],
  },
};

module.exports = nextConfig;