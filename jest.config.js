const config = {
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: ["<rootDir>/src/**"],
    setupFilesAfterEnv: ["<rootDir>/test/setup.ts"],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
    verbose: true,
}

module.exports = config
