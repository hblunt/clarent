/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable Turbopack explicitly
  turbopack: {},

  // Webpack config for when --webpack flag is used
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
    }
    return config
  },
}

module.exports = nextConfig
