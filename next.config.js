/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "i.scdn.co",
      "media.istockphoto.com",
      "external-preview.redd.it",
    ],
  },
};

module.exports = nextConfig;
