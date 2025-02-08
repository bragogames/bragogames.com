const { withContentlayer } = require("next-contentlayer2");

// const basePath =
//   process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? "/portal" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath,
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      { hostname: "brago.io" },
      { hostname: "brago.cn" },
      { hostname: "brago.com.cn" },
      { hostname: "lh3.googleusercontent.com" },
    ],
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
  },
};

module.exports = withContentlayer(nextConfig);
