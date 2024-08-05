import type { Config } from '@jest/types'

const baseDir = '<rootDir>/src/app/doubles';
const baseTestDir = '<rootDir>/src/test/doubles';

const baseDir2 = '<rootDir>/src/app/pass_checker';
const baseTestDir2 = '<rootDir>/src/test/pass_checker';

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: [
        `${baseDir}/**/*.ts`,
        `${baseDir2}/**/*.ts`
    ],
    testMatch:[
        `${baseTestDir}/**/*.ts`,
        `${baseTestDir2}/**/*.ts`
    ]
}

export default config;