module.exports = {
  default: {
    require: ['tests/stepDefinitions/**/*.ts'], // Path to step definitions
    format: ['progress'], //['@cucumber/pretty-formatter'], // Formatter
    paths: ['tests/features/**/*.feature'], // Path to feature files
    requireModule: ['ts-node/register'], // Enable TypeScript support
  },
};