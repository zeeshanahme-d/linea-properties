const nextConfig = {
  trailingSlash: false,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  output: "standalone",

  turbopack: {
    root: __dirname,
  },

  images: {
    unoptimized: true,
    formats: ["image/webp", "image/avif"],
  },

  experimental: {
    optimizePackageImports: ["react-icons"],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
