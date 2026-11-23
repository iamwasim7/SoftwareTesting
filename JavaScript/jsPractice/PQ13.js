//2 – Object Spread
/*Requirements:
1. Use spread to copy the object.
2. Add a new property priority: "High".
3. Change status to "Failed" in the new object.
4. Print both objects. */

const testCase = {
    testName: "Login Test",
    status: "Passed"
};

const updatedTestCase = {
    ...testCase,
    priority: "High",
    status: "Failed"
};

console.log(updatedTestCase);