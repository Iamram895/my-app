/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "via.placeholder.com",
      "picsum.photos",
      "placekitten.com",
      "www.placecage.com",
      "source.unsplash.com",
      "loremflickr.com",
      "fakeimg.pl",
      "placeimg.com",
      "images.unsplash.com",
      "media.istockphoto.com",
    ],
  },
};

module.exports = nextConfig;
