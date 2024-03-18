const nextConfig = {
  compiler: {
    reactRemoveProperties: true,
    removeConsole: {
      exclude: ["log"],
    },
    styledComponents: true,
  },
  devIndicators: {
    buildActivity: false,
  },
  optimizeFonts: false,
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
