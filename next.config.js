/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  target: "serverless",

  webpack: (config) => {
    config.module.rules.push(
      {
        test: /react-spring/,
        sideEffects: true,
      },
      {
        test: /\.(glsl)$/,
        exclude: /node_modules/,
        use: ["raw-loader", "glslify-loader"],
      }
    );
    return config;
  },
  images: {
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "dream.bearjam.dev",
    ],
  },
};

module.exports = nextConfig;

const withTM = require("next-transpile-modules")(["three"]);
module.exports = withTM();
