//Practice Set – Error Handling
//1.Age Validation
/*
Create a program with these requirements:
1. Create a variable age = 16.
2. Inside try:
   - If age is less than 18, throw a custom error "You are not eligible".
   - Otherwise, print "You are eligible".
3. Inside catch, print the error message.
4. Inside finally, print "Age verification completed". */

let age = 16;

try {
    if(age < 18){
        throw new Error("You are not eligible");
    } else{
        console.log("You are eligible");
    }
} catch (error) {
    console.log(error.message);
} finally{
    console.log("Age verification completed");
};

/*
2.Multiple Validation
Create a program with these requirements:
1. Create username = "admin".
2. Create password = "".
3. Create age = 21.
4. Inside try, check:
   - If username is missing, throw "Username is required".
   - If password is missing, throw "Password is required".
   - If age is below 18, throw "You must be 18 or above".
   - If all conditions pass, print "Registration successful".
5. Use catch to print the error message.
6. Use finally to print "Registration validation completed". */

let username = "admin";
let password = "";
let Age = 21;

try {
    if(!username){
        throw new Error("Username is required");
    }
    if(!password){
        throw new Error("Password is required");    
    }
    if(Age < 18){
        throw new Error("You must be 18 or above");   
    }else{
        console.log("Registration successful");
    }
} catch (error) {
    console.log(error.message);
} finally{
    console.log("Registration validation completed");
};

/*
3. Promise + Async/Await + Try-Catch
Now let's combine everything you've learned.
Requirements:
1. Create loginSuccess = false.
2. Create a Promise named loginPromise.
3. If loginSuccess is true, resolve with "Login Successful".
4. Otherwise, reject with new Error("Invalid Credentials").
5. Create an async function named testLogin().
6. Use try...catch...finally.
7. Use await to receive the Promise result.
8. Print the success result or error message.
9. Finally, print "Test execution completed". */

let loginSuccess = false;

let loginPromise = new Promise((resolve, reject) =>{
    if(loginSuccess){
        resolve("Login Successful");
    }else{
        reject(new Error("Invalid Credentials"));
    };
});

async function testLogin() {
    try {
        let result = await loginPromise;
        console.log(result);
    } catch (error) {
        console.log(error.message);
    } finally{
        console.log("Test execution completed");
    }
};

testLogin();
