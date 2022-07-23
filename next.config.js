/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["img.icons8.com", "images.pexels.com"],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react/jsx-runtime.js": require.resolve("react/jsx-runtime"),
    };

    config.resolve = {
      ...config.resolve,

      fallback: {
        ...config.resolve.fallback,
        child_process: false,
        fs: false,
        // 'builtin-modules': false,
        // worker_threads: false,
      },
    };

    return config;
  },
};

module.exports = nextConfig;
