/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "i.scdn.co",
      "media.istockphoto.com",
      "external-preview.redd.it",
      // test data
      "zmp3-photo-fbcrawler.zmdcdn.me",
      "i.ytimg.com",
      "ih1.redbubble.net",
      "bizweb.dktcdn.net",
      "avatar-ex-swe.nixcdn.com",
      "www.essence.com",
      "charts-static.billboard.com",
      "i1.sndcdn.com",
      "cdnmedia.thethaovanhoa.vn",
    ],
  },
};

module.exports = nextConfig;
