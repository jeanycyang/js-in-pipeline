module.exports = {
  roots: [
    '<rootDir>/tests',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],
  coverageThreshold: {
    global: {
      statements: 95,
      branches: 90,
      functions: 90,
      lines: 95,
    },
  },
  testEnvironment: 'node',
  testTimeout: 15000,
};
