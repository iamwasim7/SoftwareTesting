//A Data Type defines the type of value stored in a variable.

//Examples:

// 1. String : A text of characters enclosed in quotes.
let title = "Today i am learning Data Types in JS!"; 
console.log(title);

//2. Number : A number representing a mathematical value.
let day = 2;
console.log(day);

//3. Boolean : A data type representing true or false.
let isStudent = true;
let isLoggedIn = false;

console.log(isStudent);
console.log(isLoggedIn);

//4. Bigint : A number representing a large integer.
let num = 1232367585784389578349883893;
console.log(num);

//5. Undefined : A primitive variable with no assigned value.
let username;
console.log(username);

//6. Null : A primitive value representing intentional object absence.
let password = null;
console.log(password);

//7. Object : A collection of key-value pairs of data.
const person = {firstname:"Wasim", lastname:"Patel"};
console.log(person);

//8. Symbol : A unique and primitive identifier.
const x = Symbol();
const y = Symbol();
console.log(typeof x);
//9. Array: Represents an ordered list of values.
let a = ["apple", "banana", "cherry"];
console.log(a);
console.log(a[2]);
//10. Function: Represents reusable blocks of code.
function fun() {
    console.log("GeeksforGeeks");
}

// ------------------------------------------------------------------------Exercises---------------------------------------------------------------------------------------
/*
Exercise 1 – Identify Data Types

Create five variables:
- studentName = "Wasim"
- age = 21
- isStudent = true
- marks = 85.5
- result = undefined
Print their values and data types using console.log() and typeof. */

const studentName = "Wasim";
let age = 21;
let isstudent = true;
let marks = 85.5;
let result = undefined;

console.log(studentName, typeof studentName);
console.log(age, typeof age);
console.log(isstudent, typeof isstudent);
console.log(marks, typeof marks);
console.log(result, typeof result);

/*
Exercise 3 – Object

Create an object named product containing:
- productName = "Laptop"
- price = 55000
- inStock = true
Print all three properties individually. */

let product = {
    productName:"Laptop",
    price: 55000,
    inStock: true
};
console.log(product.productName);
console.log(product.price);
console.log(product.inStock);

/*
Exercise 4 – Array

Create an array named browsers containing:
- Chrome
- Firefox
- Edge
- Safari
Print the complete array and access the first and third elements.*/

let browsers = ["Chrome", "Firefox", "Edge", "Safari"];
console.log(browsers);
console.log(browsers[0]);
console.log(browsers[3]);
