/*1. Synchronous JavaScript
Synchronous means JavaScript executes code one line at a time, in order. */
//Example-
console.log("Step 1");
console.log("Step 2");
console.log("Step 3");
/*JavaScript executes the first line, then the second, then the third.
Each statement waits for the previous statement to finish. */

/*2. Asynchronous JavaScript
Asynchronous means JavaScript can start an operation that takes time and continue executing other code without waiting for that operation to finish. */

console.log("Step 1");

setTimeout(() => {
    console.log("Step 2");
}, 2000);

console.log("Step 3");
