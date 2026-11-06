///JavaScript provides three keywords to declare variables:
//1. var
//2. let
//3. const

//A. var
//var is an older way of declaring variables in JavaScript.
//Example
var studentName = "Wasim";
console.log(studentName);

//B. let
//let is used when you want to declare a variable whose value can change.
//Example
let $marks = 75;
$marks = 90;
console.log($marks);

//C. const
//const is used when you don't want to reassign a variable after declaring it.
//Example:
const country = "India";
console.log(country);

//--------------------------------------Practice Questions:------------------------------------------------------------------------------

//Exercise 1 – Basic variables

//Declare three variables:
//- Your myName.
//- Your age.
//- Your favourite programming language.
//Display all three using console.log().

const myName = "Wasim";
let age = 21;
let favPrograminglang = "Python"
console.log(myName, age, favPrograminglang)

//Exercise 2 – Value reassignment
//Create a let variable called marks and assign it 70.
//Change its value to 90 and display it.
let marks = 70;
marks = 90;
console.log(marks)

//Exercise 3 – const
//Create a const variable called college and assign it your college name.
//Display it using console.log().
const college = "DTSS College of Commerce and Science";
console.log(college)

//Exercise 4 – Automation Testing example
//Create two variables:
//- username
//- password
//Store sample login credentials and display them.
let username = "testuser";
let password =  "test123";
console.log(username, password)

//----------------------------------------------Mini Challenge------------------------------------------------------------------------

//Scenario: You're testing an e-commerce website.
///Create these variables:
//1. productName = "Laptop"
//2. productPrice = 55000
//3. quantity = 2
//Calculate the total price and display it.

//Expected output:
//Product: Laptop
//Price: 55000
//Quantity: 2
//Total Price: 110000

let productName = "Laptop";
let productPrice = 55000;
let quantity = 2;
let totalPrice = productPrice * quantity;
console.log(productName);
console.log(productPrice);
console.log(quantity);
console.log(totalPrice);