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
};

export default nextConfig;
