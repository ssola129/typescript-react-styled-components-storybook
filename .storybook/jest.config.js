module.exports = {
  transform: {
    '.(ts|tsx)': 'ts-jest',
  },
  testPathIgnorePatterns: ['/node_modules/', '/lib/'],
  testRegex: '(/test/.*\\.(test|spcec))\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
};