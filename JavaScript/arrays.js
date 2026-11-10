//An array is a special type of variable that allows us to store multiple values in a single variable.
//-----------------------------------------------Practice Exercises-----------------------------------------------------------------------
//1. Create an Array
//Create an array named students containing five student names.
//Print the complete array and its length.

let students= ["Wasim", "Kaushik", "Ajay", "Gaus", "Dilshad"];
console.log(students, students.length);

//2. Access Array Elements

console.log(students[0]);
console.log(students[1]);

//3. Array Modification
/* Perform these operations in order:
1. Add "Orange" using push().
2. Remove the last element using pop().
3. Add "Grapes" at the beginning using unshift().
4. Print the final array. */

let fruits = ["Apple", "Banana", "Mango", "Cherry"];
fruits.push("Orange");
fruits.pop();
fruits.unshift("Graphes");
console.log(fruits);

//4. Check Browser Availability
//Check whether "Chrome" and "Opera" exist using includes().

let Browsers = ["Chrome", "Edge", "FireFox", "Brave"];
console.log(Browsers.includes("Chrome"));
console.log(Browsers.includes("Opera"));

//5. Print All Test Cases
//Use a for loop to print all five scenarios. 

let testCases = ["Login", "Register", "Logout", "Forget Password", "Search"];
for (let i = 0; i < testCases.length; i++) {
    console.log(testCases[i])
}

//6. Find an Element
//Find and print the index of "Playwright" using indexOf().
let tools = ["Selenium", "Playwright", "Cypress", "Postman"];
console.log(tools.indexOf("Playwright"));