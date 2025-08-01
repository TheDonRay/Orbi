// jest configure file to help with test coverage for the project.  

module.exports = { 
    collectCoverage: true, 
    collectCoverageFrom: ["tests/*/*.js"], 
    coverageDirectory: "coverage", 
    testMatch: ["**/tests/**/*.test.js"], 
}; 