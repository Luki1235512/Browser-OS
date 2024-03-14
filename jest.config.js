module.exports = require("next/jest")()({
  moduleDirectories: ["<rootDir>", "node_modules"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  testEnvironment: "jsdom",
});
