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

//2. Object Destructuring
/*Requirements:
1. Extract testName, status, and priority using object destructuring.
2. Store them in variables with the same names.
3. Print all three variables. */

const testCase = {
    testName: "Login Test",
    status: "Passed",
    priority: "High"
};

const {testName, status, priority} = testCase;

console.log(testName);
console.log(status);
console.log(priority);

//3. Rename Variables
/*Requirements:
1. Use object destructuring.
2. Rename name to studentName.
3. Rename age to studentAge.
4. Extract course without renaming.
5. Print all three variables. */

const student = {
    name: "Wasim",
    age: 21,
    course: "BSc IT"
};

const {name: studentName, age: studentAge, course} = student;

console.log(course);
console.log(studentName, studentAge);
