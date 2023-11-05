/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "apod.nasa.gov",
      "mars.nasa.gov",
      "mars.jpl.nasa.gov",
      "images-assets.nasa.gov",
    ],
  },
};

module.exports = nextConfig;
