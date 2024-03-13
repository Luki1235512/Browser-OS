const nextConfig = {
  compiler: {
    reactRemoveProperties: true,
    removeConsole: true,
    styledComponents: true,
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
