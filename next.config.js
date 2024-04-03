const isProduction = process.env.NODE_ENV === "production";

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: isProduction,
});

const nextConfig = {
  compiler: {
    reactRemoveProperties: isProduction,
    removeConsole: isProduction,
    styledComponents: true,
  },
  devIndicators: {
    buildActivity: false,
  },
  optimizeFonts: false,
  reactStrictMode: true,
  swcMinify: !isProduction,
};

module.exports = withBundleAnalyzer(nextConfig);
