//A callback is a function that is passed as an argument to another function and is called inside that function.
//Example
function greet(name){
    console.log(`Hello ${name}`);
};

/*function processUser(greet){
    greet("wasim");
};
processUser(greet); */

//Callback with an arrow function

function calculate(num1, num2, callback){
    callback(num1, num2);
};

calculate(10, 5, (a, b) =>{
    console.log(a + b);
});

/*Exercise 1:

Create two functions:
1. displayMessage() — prints "Welcome to JavaScript".
2. executeFunction() — accepts a callback function and executes it.
Finally, pass displayMessage into executeFunction. */

function displayMessage(){
    console.log("Welcome to JavaScript");
};

function executeFunction(displayMessage){
    displayMessage();
};

executeFunction(displayMessage);

/*Exercise 2 – 
Create two functions:
1. loginSuccess() → prints "Login Successful".
2. handleLogin() → accepts a callback and executes it.
Pass loginSuccess into handleLogin. */

function loginSuccess() {
    console.log("Login Successful");
};

function handleLogin(loginSuccess){
    loginSuccess();
};

handleLogin(loginSuccess);

/*Exercise 3 – Callback with parameters
Create:
1. displayUser(name) → prints "Welcome, [name]".
2. processUser() → accepts a callback and a name.
3. Execute the callback with the received name. */

function displayUser(name) {
    console.log(`Welcome, ${name}`);
};

function processUser(name, displayUser){
    displayUser(name);
};
processUser("Wasim", displayUser);


/*Exercise 4 – Callback with calculation
Create a function calculate() that accepts three parameters:
- num1
- num2
- callback
Pass an addition function as the callback.

Use 10 and 20. */

function calculate(num1, num2, callback){
    callback(num1, num2);
};

calculate(10, 5, (a,b) =>{
    console.log( a + b);
});