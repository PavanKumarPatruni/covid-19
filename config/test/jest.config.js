module.exports = {
  rootDir: '../../',
  setupFiles: ['<rootDir>/config/test/jest.setup.js'],
  moduleDirectories: ['node_modules'],
  testPathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/src/App/',
    '<rootDir>/src/redux/',
  ],
  testResultsProcessor: 'jest-sonar-reporter',
  collectCoverage: true,
  coverageDirectory: '<rootDir>/reports',
  collectCoverageFrom: [
    '<rootDir>/src/atoms/**/*.{js,jsx}',
    '<rootDir>/src/components/**/*.{js,jsx}',
    '<rootDir>/src/containers/**/*.{js,jsx}',
    '!<rootDir>/src/App',
    '!<rootDir>/src/redux',
    '!<rootDir>/src/**/*.test.js',
    '!<rootDir>/src/**/index.js',
    '!<rootDir>/src/**/constants.js',
    '!<rootDir>/src/**/utils/*.js',
    '!<rootDir>/src/**/constants/*.js',
    '!**/node_modules/**',
    '!<rootDir>/webpack.config.js',
    '!<rootDir>/config',
    '!<rootDir>/assets',
    '!<rootDir>/dist',
    '!<rootDir>/public',
    '!<rootDir>/reports',
  ],
  coverageReporters: ['lcov', 'json', 'text', 'text-summary'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>.*(node_modules).*$'],
  verbose: true,
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/config/test/mock/styleMock.js',
    '^react$': '<rootDir>/node_modules/react/cjs/react.development.js',
    '^react-dom$':
      '<rootDir>/node_modules/react-dom/cjs/react-dom.development.js',
  },
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 89,
      functions: 90,
      lines: 90,
    },
  },
};
