/*Practice Exercise 1 – Rest with Functions
Create a function named displayTests().

Requirements:
1. Use the Rest operator to accept multiple test names.
2. Store all test names in an array called tests.
3. Print the tests array.
4. Call the function with at least four test names. */

function displayTests(...test) {
    console.log(test);
}

displayTests("Login", "Register", "Share", "Header", "Search");

//2 – Rest with Array Destructuring
/*Requirements:
1. Extract the first element into firstTest.
2. Extract the second element into secondTest.
3. Collect all remaining elements into remainingTests using Rest.
4. Print all three variables. */

const testResults = [
    "Login Passed",
    "Register Failed",
    "Logout Passed",
    "Search Passed",
    "Payment Failed"
];

const [firstTest, secondTest, ...remainingTests] = testResults;
console.log(firstTest);
console.log(secondTest);
console.log(remainingTests);