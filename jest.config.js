module.exports = {
  moduleFileExtensions: ['js', 'json'],
  rootDir: '__tests__',
  testRegex: ['.spec.js$', '.test.js$'],
  coverageDirectory: './coverage',
  testEnvironment: 'node',
  verbose: true,
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!lodash-es/.*)'
  ]
};
