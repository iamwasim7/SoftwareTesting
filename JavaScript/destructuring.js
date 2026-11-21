//Destructuring is an ES6 feature. It makes it easier to extract values from arrays and objects and store them in variables.
//1. Array Destructuring

const fruits = ["Apple", "Mango", "Banana"];
const [first, second, third] = fruits;

console.log(first);
console.log(second);
console.log(third);

//2. Skipping Array Elements
//We don't always need every value.

const numbers = [10, 20, 30, 40];
const [firstNum, , thirdNum] = numbers;

console.log(firstNum);
console.log(thirdNum);

//3. Object Destructuring

const student = {
    Name: "Wasim",
    age: 21,
    course: "Bsc.IT"
};

const {Name, age, course} = student;

console.log(Name);
console.log(age);
console.log(course);