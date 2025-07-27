import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Configure trailing slash behavior
  trailingSlash: true,
  
  // Ensure we're using the correct output directory
  distDir: '.next',
  
  // Disable server-side features that don't work with static export
  typescript: {
    ignoreBuildErrors: false,
  },
  
  eslint: {
    ignoreDuringBuilds: false,
  },
  
  // Optional: Configure base path if deploying to a subdirectory
  // Uncomment and modify if your repo name is different
  // basePath: '/your-repo-name',
  // assetPrefix: '/your-repo-name/',
};

export default nextConfig;
