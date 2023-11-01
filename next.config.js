/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "picsum.photos",
      "apod.nasa.gov",
      "mars.nasa.gov",
      "mars.jpl.nasa.gov",
    ],
  },
};

module.exports = nextConfig;
