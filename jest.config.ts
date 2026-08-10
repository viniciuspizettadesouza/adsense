const jestConfig = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1', // para suportar @/data/pages, etc
  },
};

export default jestConfig;
