const add = require('./app');
const assert = require('assert');

// Test Case: Does 2 + 3 actually equal 5?
try {
    assert.strictEqual(add(2, 3), 5);
    console.log("✅ Test Passed: 2 + 3 = 5");
} catch (e) {
    console.error("❌ Test Failed");
    process.exit(1); // This exit code tells CI the build failed
}