//Conditional statements allow JavaScript to make decisions based on conditions.

/* 
JavaScript provides four main conditional statements.
1. if
2. if...else
3. if...else if...else
4. switch */

/*
1. The if statement
The if statement executes a block of code only when the condition is true. */

let age = 16;
if (age > 18){
    console.log("You are eligible to vote")
};

/*
2. The if...else statement
Use else when you want to execute another block if the condition is false. */

if (age > 18){
    console.log("You are eligible to vote")
}else{
    console.log("You are not eligible to vote")
}

/*
3. The if...else if...else statement
Use this when you have multiple conditions to check. 
JavaScript checks conditions from top to bottom. Once a condition is true, it executes that block and skips the remaining conditions.*/

let marks = 75;
if (marks >=90){
    console.log("A Grade");
} else if(marks >=75){
    console.log("B Grade");
} else if(marks >= 40){
    console.log("C Grade");
} else{
    console.log("Fail");
}

/*
4. The switch statement
The switch statement is useful when you want to compare one value against multiple possible values. */

let browser = "chrome";

switch (browser){
    case "chrome":
        console.log("chrome browser selected");
        break;

    case "brave":
        console.log("Brave browser is selected");
        break;

    case "firefox":
        console.log("firefor browser is selected");
        break;

    default:
        console.log("browser is not supported");
}

// -------------------------------------------------------------Practice Question-----------------------------------------------------------------------------------

//Create two variables: username and password
/* Requirements:
1. If both username and password are correct, display "Login Successful".
2. Otherwise, display "Invalid Username or Password". */

let username = "Wasim";
let password = "abc123";

if (username == "Wasim" && password == "abc123") {
    console.log("Login Successful")
} else {
    console.log("Invalid Username or Password")
}