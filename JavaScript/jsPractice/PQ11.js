//1. Array Destructuring
//Create an array named testResults
/*Requirements:
1. Use array destructuring to extract all three values.
2. Store them in variables named login, register, and logout.
3. Print all three variables using console.log(). */

const testResults = ["Login Passed", "Registration Failed", "Logout Passed"];

const [login, register, logout] = testResults;

console.log(login);
console.log(register);
console.log(logout);
