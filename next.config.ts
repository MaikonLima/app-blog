import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['blog.apiki.com', 'secure.gravatar.com'],
  },
};

export default nextConfig;
