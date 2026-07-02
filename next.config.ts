import type { NextConfig } from "next";
import path from "path";

const isStaticExport = process.env.STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  output: isStaticExport ? "export" : undefined,
  trailingSlash: isStaticExport,
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    unoptimized: isStaticExport,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.jsdelivr.net" },
    ],
  },
  // GitHub Pages 项目站点：https://username.github.io/repo-name/
  basePath: isStaticExport ? process.env.BASE_PATH || "" : "",
  assetPrefix: isStaticExport ? process.env.BASE_PATH || "" : "",
};

export default nextConfig;
