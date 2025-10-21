import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      three: require.resolve("three"), // força uso de uma única instância
    };
    
    return config;
  },
};

export default nextConfig;
