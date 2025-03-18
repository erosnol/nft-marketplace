const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ['127.0.0.1'],
  images: {
    domains: ['ipfs.io', 'images.unsplash.com'], // For IPFS and Unsplash content
  },
}

module.exports = withVanillaExtract(nextConfig);
