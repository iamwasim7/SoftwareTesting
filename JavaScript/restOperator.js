/*The Rest operator also uses three dots, but its job is different.
- Spread: Expands elements or properties.
- Rest: Collects multiple elements or properties into one variable. */

//1. Rest with functions
function addNumbers(...numbers){
    console.log(numbers);
};

addNumbers(10, 20, 30, 40);