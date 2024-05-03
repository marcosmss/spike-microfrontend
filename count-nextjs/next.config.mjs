/** @type {import('next').NextConfig} */

import NextFederationPlugin from "@module-federation/nextjs-mf";

const nextConfig = {
  webpack(config, options) {
    const { webpack } = options;
    Object.assign(config.experiments, { topLevelAwait: true });
    config.plugins.push(
      new NextFederationPlugin({
        name: "count",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./components/Count": "./src/components/Count.jsx",
        },
        shared: {
        },
      })
    );

    return config;
  },
};

export default nextConfig;
