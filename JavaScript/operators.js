//Operators are special symbols or keywords used to perform operations on values and variables.

/*
Types of Operators in JavaScript:
1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators
4. Logical Operators
5. String Operators
6. Increment and Decrement Operators
7. Ternary Operator */ 

/*
#Arithmetic Operators
Arithmetic operators are used to perform mathematical calculations.*/

let a = 10;
let b = 5;

console.log(a+b); //Addition
console.log(a-b); //Subtraction
console.log(a*b); //Multiplication
console.log(a/b); //Division
console.log(a%b); //Modulus(Remainder)
console.log(a**b); //Exponentiation

/*
#Assignment Operators
Assignment operators are used to assign values to variables or update their existing values. */

let x = 15; //Assign 15
console.log(x)
x +=5
console.log(x)
x -=5
console.log(x)
x *=5
console.log(x)
x /=5
console.log(x)
x %=5
console.log(x)

/*
#Comparison Operators
Comparison operators are used to compare two values.
They return a Boolean result: true or false. */

// Operator: == Equal value 
// Example 
Sub1 = 10;
Sub2 = "10"
// Result 
console.log(Sub1 == Sub2)

// Operator: === Equal value and type 
// Example
Sub3 = 10;
Sub2 = "10"
// Result 
console.log(Sub3 === Sub2)

// Operator: != Not equal value 
//Example
Sub4 = 10;
Sub5 = 5;
//Result 
console.log(Sub4 != Sub5);

// Operator: !== Not equal value or type
//Example
console.log(Sub4 !== Sub2);

// Operator: >	Greater than
console.log(Sub5 > Sub4);

// Operator: <	Less than 
//Example 
console.log(Sub5 < Sub4);

//Operator: >=	Greater than or equal 
//Example
sub6 = 9;
sub7 = 10;
console.log(sub6 >= sub7);

//Operator: <= Less than or equal
//Example
console.log(sub6 <= sub7);

/*
#Logical Operators
Logical operators are used to combine multiple conditions. */

/* 
A. AND (&&)
Both conditions must be true. */
//Example 
let age = 15;
let hasID = true;

console.log(age > 18 && hasID === true)

 /* 
B. OR (||)
At least one condition must be true. */ 
//Example
console.log(age > 18 || hasID === true)

/* 
C. NOT (!)
Reverses the Boolean value. */
//Example
let isPass = true;
console.log(!isPass);

/* 
String Operator
JavaScript uses the + operator to concatenate (join) strings. */
//Example
let firstName = "Wasim";
let lastName = "Patel";
console.log(firstName + lastName);

/*
Increment and Decrement Operators
These operators increase or decrease a variable's value by 1. */ 
//Example
let count = 10;
count++;
console.log(count);

/* 
Ternary Operator
The ternary operator is a shorter way to write a simple if-else expression. */
//Example
let isAge = 21;
let result = isAge >= 18 ? "Eligible" : "Not Eligible";
console.log(result);


