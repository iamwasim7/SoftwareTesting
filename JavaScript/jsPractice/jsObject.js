//Convert Object into JSON
/*Requirements:
1. Convert testCase into a JSON string using JSON.stringify().
2. Store the result in a variable named jsonData.
3. Print jsonData.
4. Print typeof jsonData. */

const testCase = {
    testName: "Login Test",
    status: "Passed",
    priority: "High"
};

const jsonData = JSON.stringify(testCase);
console.log(jsonData);
console.log(typeof jsonData);