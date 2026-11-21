/*1. What is error handling?
Error handling means detecting and managing errors in your JavaScript code so that your program doesn't stop unexpectedly. */
/*2. The try...catch statement
We use try...catch to handle errors. */

try {
    console.log(x);
} catch (error) {
    console.log("Something went wrong!");
}

console.log("Program continues...");

/*Practice exercise 1
Create a program with the following requirements:
1. Create a variable username and leave it undifined.
2. Inside try, check whether username exists.
3. If it doesn't exist, throw a custom error: "Username is required".
4. Inside catch, print the error message.
5. Inside finally, print "Validation completed". */

let username;
console.log(username);

try{
    if(!username){
        throw new Error("Username is required");
    }
} catch (error){
    console.log(error.message);
}
finally{
    console.log("Validation completed");
};

/*Practice exercise 2: Login Validation
Create a program with these requirements:
1. Create username = "admin".
2. Create password = "".
3. Inside try:
   - If username is missing, throw "Username is required".
   - If password is missing, throw "Password is required".
   - If both are available, print "Login validation successful".
4. Inside catch, print the error message.
5. Inside finally, print "Login validation completed". */

let userName = "admin";
let password = "";
try {
    if(!userName){
        throw new Error("Username is required");
    }
    if(!password){
        throw new Error("Password is required")
    }
    console.log("Login validation successful")
    
} catch (error) {
    console.log(error.message);
} finally{
    console.log("Login validation completed")
};

//Try-Catch with Promises and Async/Await

/*Practice exercise 3
Create a Promise named loginPromise.

Requirements:
1. Create loginSuccess = false.
2. If true, resolve with "Login Successful".
3. Otherwise, reject with "Invalid Credentials".
4. Create an async function named checkLogin().
5. Use try...catch and await to handle the Promise.
6. Print the result or error message.
7. Add a finally block that prints "Login process completed". */

let loginPromise = new Promise((resolve, reject) =>{
    let loginSuccess = false;
    if(loginSuccess){
        resolve("Login Successful");
    }else{
        reject("Invalid Credentials");
    }});

    async function checkLogin() {
        try {
            let result = await loginPromise;
            console.log(result);
        } catch (error) {
            console.log(error)
        } finally{
            console.log("Login Process Completed");
        }
    };

checkLogin();