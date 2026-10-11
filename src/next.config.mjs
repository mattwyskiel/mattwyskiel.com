/** @type {import('next').NextConfig} */
const nextConfig = {
  // build:next checks with Bun before and after Next.js generates build types.
  typescript: { ignoreBuildErrors: true },
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
