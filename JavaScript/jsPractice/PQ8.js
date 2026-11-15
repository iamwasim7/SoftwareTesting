//Q8. Array Operations
/* Perform the following:
1. Print the first element.
2. Print the last element.
3. Add "Opera" to the end.
4. Remove the first element.
5. Check whether "Chrome" exists.
6. Print the final array length. */

let browsers = ["Chrome", "Firefox", "Edge", "Safari"];

console.log(browsers[0]);
console.log(browsers[3]);
browsers.push("Opera");
console.log(browsers);
browsers.shift("Chrome");
console.log(browsers);
console.log(browsers.includes("Chrome"));
console.log(browsers.length);