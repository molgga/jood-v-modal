module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.test.json',
      diagnostics: false
    }
  },
  roots: ['<rootDir>'],
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  transform: {
    // '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  transformIgnorePatterns: ['/node_modules/', '__snapshots__'],
  testMatch: ['**/__tests__/**/(*.)+(spec|test).+(js|jsx|ts|tsx)'],
  testPathIgnorePatterns: ['/node_modules/', '/__snapshots__/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1'
  }
  // collectCoverage: true,
  // coveragePathIgnorePatterns: ['/tests/'],
  // coverageReporters: ['html']
};
