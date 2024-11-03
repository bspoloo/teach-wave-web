import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  /* config options here */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });

    return config;
  },
  async rewrites() {
    return [
      {
        source: '/login',
        destination: '/Atomic/Pages/login',
      },
      {
        source: '/dashboard',
        destination: '/Atomic/Pages/Dashboard',
      },
      {
        source: '/dashboard/users',
        destination: '/Atomic/Pages/Dashboard/Users',
      },
      {
        source: '/dashboard/courses',
        destination: '/Atomic/Pages/Dashboard/Courses',
      },
      {
        source: '/dashboard/modules',
        destination: '/Atomic/Pages/Dashboard/Modules',
      },
      {
        source: '/dashboard/enrollments',
        destination: '/Atomic/Pages/Dashboard/Enrollments',
      },
      {
        source: '/dashboard/assignments',
        destination: '/Atomic/Pages/Dashboard/Assignments',
      },
      {
        source: '/dashboard/submissions',
        destination: '/Atomic/Pages/Dashboard/Submissions',
      },
    ]
  }
};


export default nextConfig;
