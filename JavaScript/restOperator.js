/*The Rest operator also uses three dots, but its job is different.
- Spread: Expands elements or properties.
- Rest: Collects multiple elements or properties into one variable. */

//1. Rest with functions
function addNumbers(...numbers){
    console.log(numbers);
};

addNumbers(10, 20, 30, 40);

//2. Rest with arrays
const testResults = ["Passed", "Failed", "Passed", "Skipped"];

const [first, second, ...remaining] = testResults;

console.log(first);
console.log(second);
console.log(remaining);

