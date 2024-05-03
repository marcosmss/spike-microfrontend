/** @type {import('next').NextConfig} */

import NextFederationPlugin from "@module-federation/nextjs-mf";

const nextConfig = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "nextjs",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          mf: `count@http://localhost:3001/_next/static/${isServer ? "ssr" : "chunks"}/remoteEntry.js`,
          // mf: `count@http://localhost:8080/static/chunks/remoteEntry.js`,
        },
        exposes: {
          "./components/Header": "./src/components/Header.jsx",
        },
      })
    );

    return config;
  },
};

export default nextConfig;