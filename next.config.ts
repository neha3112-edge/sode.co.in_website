import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/sode',
  assetPrefix: '/sode',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: '/sode',
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/sode',
        permanent: true,
        basePath: false,
      },
    ];
  },
};

export default nextConfig;