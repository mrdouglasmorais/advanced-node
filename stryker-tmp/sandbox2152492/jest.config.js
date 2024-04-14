// @ts-nocheck
module.exports = {
  testEnvironment: 'node',
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: "coverage",
  collectCoverage: false,
  moduleNameMapper: {
     "@/(.+)": "<rootDir>/src/$1",
     "@/tests(.+)": "<rootDir>/tests/$1",
  },
  roots: [
    '<rootDir>/src',
    '<rootDir>/tests'
  ],
  transform: {
   '\\.ts$': 'ts-jest'
  }
};
