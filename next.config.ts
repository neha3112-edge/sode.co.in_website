import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/1-year-mba',
  assetPrefix: '/1-year-mba',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: '/1-year-mba',
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/1-year-mba',
        permanent: true,
        basePath: false,
      },
    ];
  },
};

export default nextConfig;