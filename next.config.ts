import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  /* config options here */

  async rewrites() {
    return [
      {
        source: '/login',
        destination: '/Atomic/Pages/login',
      }
    ]
  }
};


export default nextConfig;
