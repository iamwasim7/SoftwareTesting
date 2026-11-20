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