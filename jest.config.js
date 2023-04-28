module.exports = {
  moduleDirectories: ["<rootDir>", "node_modules"],
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect",
    "<rootDir>/jest.setup.js",
  ],
  testEnvironment: "jsdom",
};
