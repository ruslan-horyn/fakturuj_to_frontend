/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  verbose: true,
  roots: ['<rootDir>/src'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    "^.+\\.tsx?$": ["ts-jest", {
      tsconfig: "tsconfig.test.json"
    }]
  },
  collectCoverage: true,
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': 'identity-obj-proxy',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  coveragePathIgnorePatterns: [
    "/node_modules/",
    ".test.{ts,tsx}",
  ],
  coverageDirectory: 'reports/coverage',
};
