//Exercise 4 – Find Failed Test Cases
/*Requirements:
1. Create a function named getFailedTests.
2. Accept testCases as a parameter.
3. Use the filter() array method.
4. Return only the test cases whose status is "Failed".
5. Call the function and print the result. */

let testCases = [
    { name: "Login", status: "Passed" },
    { name: "Register", status: "Failed" },
    { name: "Logout", status: "Passed" },
    { name: "Search", status: "Failed" },
    { name: "Payment", status: "Passed" }
];

let failedTC = testCases.filter((testCase) =>{
    return testCase.status === "Failed";
});

console.log(failedTC);