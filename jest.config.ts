import type { Config } from 'jest';

const config: Config = {
    preset: 'ts-jest/presets/js-with-ts-esm',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__mocks__/fileMock.js",
        "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    },
    transformIgnorePatterns: [
        '/node_modules/(?!(@testing-library|jest-dom)/)'
    ],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default config;