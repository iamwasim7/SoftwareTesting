/*Exercise 1 – Login Validation
Requirements:
1. Create two variables:
   - username = "admin"
   - password = "admin123"
2. Create a function named validateLogin.
3. Accept username and password as parameters.
4. Check whether both credentials are correct.
5. If correct, return "Login Successful".
6. Otherwise, return "Invalid Credentials".
7. Call the function and display the returned result using console.log(). */

let username = "admin";
let password = "admin123";

function validateLogin(username, password){
    if(username === "admin" && password === "admin123"){
        return "Login Successful";
    }else{
        return "Invalid Credentials";
    }
};

let result = validateLogin(username, password);
console.log(result);