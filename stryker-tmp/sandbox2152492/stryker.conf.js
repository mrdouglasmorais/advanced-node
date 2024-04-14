// @ts-nocheck
// 
/**
* @type {import('@stryker-mutator/api/core').PartialStrykerOptions}
*/

module.exports = {
  mutate: ['src/**/*.ts'],
  testRunner: 'npm run test',
  reporters: ['progress', 'clear-text', 'html'],
  coverageAnalysis: 'perTest',
  jest: {
    projectType : 'custom',
    configFile: 'jest.config.js',
  },
  tempDirName: "stryker-tmp",
};
