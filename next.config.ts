import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["i.pinimg.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cloud.appwrite.io",
        pathname: "/v1/storage/buckets/**/files/**",
      },
    ],
  },
};

export default nextConfig;
