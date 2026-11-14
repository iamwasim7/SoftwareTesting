/*Scope determines where a variable can be accessed in JavaScript.

There are three main types of scope:
- Global Scope
- Function Scope
- Block Scope */

/*Exercise 1 – Global Scope

Declare a variable browser = "Chrome" outside a function.

Create a function named runTest() and print the browser variable inside it. */

browser = "Chrome";

function runTest() {
    console.log(browser);
};

runTest();

/*Exercise 2 – Function Scope

Create a function named loginTest().
- Declare username = "admin" inside it.
- Print the username inside the function.
- Try printing the username outside the function. */

function loginTest(){
    let username = "admin";
    console.log(username);
};
loginTest();
//console.log(username);

/* Exercise 3 – Block Scope

Create an if statement.
- Declare let testStatus = "Passed" inside it.
- Print it inside the block.
- Try accessing it outside the block. */

if (testStatus = "Passed") {
    console.log(testStatus);
};
console.log(testStatus);