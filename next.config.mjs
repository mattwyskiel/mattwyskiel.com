/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/",
        permanent: true,
      },
      {
        source: "/posts",
        destination: "/stories",
        permanent: true,
      },
      {
        source: "/posts/:id",
        destination: "/stories/:id",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
    ],
  },
  experimental: {
    staleTimes: {
      static: 5,
    },
  },
};

export default nextConfig;
