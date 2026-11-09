//A function is a reusable block of code designed to perform a specific task.
//Instead of writing the same code repeatedly, we can create a function once and call it whenever needed.

//A. Function declaration

function greet(){
    console.log("Hello Wasim!")
};
greet() //Function calling

//B. Functions with parameters
//Parameters allow us to pass information into a function.

function addtion(a, b){
    console.log(a+b);
};

addtion(10, 40);

//C. The return statement
// return sends a result back from a function so that we can store it or use it elsewhere.

function substraction(x, y){
    return x - y;
}
let result = substraction(10, 5);
console.log(result);

//D. Function Expression
//A function stored inside a variable.

const news = function(){
    console.log("Hardik Pandya to PBKS.")
};
news()

//Arrow Function
//A shorter way to write functions, introduced in modern JavaScript (ES6).
const hello = () =>{
    console.log("Hello");
};

hello();

// --------------------------------------------Practice Question-------------------------------------------------------------------

/* 
1. Even or Odd

Create a function named checkEvenOdd that:
- Accepts one number.
- Checks whether the number is even or odd.
- Returns "Even Number" or "Odd Number". */

function checkEvenOdd(n){
    if (n%2 === 0) {
        console.log("Even number:", n);
    }else{
        console.log("Odd Number:", n)
    }

}
checkEvenOdd(2);

/*
2. Login Validation

Create a function named validateLogin that accepts:
- username
- password
Conditions:
- Username must be "admin".
- Password must be "admin123".
- If both match, return "Login Successful".
- Otherwise, return "Invalid Credentials". */

function validateLogin(username, password){
    if (username === "admin" && password === "admin123") {
        console.log("Login Successful");
    } else {
        console.log("Invalid Credentials");
    }
};

validateLogin("admin", "admin123");

