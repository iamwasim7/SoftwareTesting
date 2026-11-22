//Create two arrays:
/*Requirements:
1. Use the spread operator to combine both arrays.
2. Store the result in allTests.
3. Add "Forgot Password" at the end.
4. Print allTests. */

const loginTests = ["Valid Login", "Invalid Login"];
const registrationTests = ["Valid Registration", "Invalid Registration"];

const allTests = [...loginTests, ...registrationTests];
console.log(allTests);

const newallTests = [...allTests, "Forgot Password"];
console.log(newallTests);

