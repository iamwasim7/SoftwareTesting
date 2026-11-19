//The async keyword is used before a function to make it an asynchronous function.
/*Practice exercise
Create a Promise using setTimeout:
1. Create a Promise named loginPromise.
2. Use setTimeout() to resolve it with "Login Successful" after 2 seconds.
3. Create an async function named checkLogin().
4. Inside it, use await to receive the Promise result.
5. Print the result using console.log(). */

let loginPromise = new Promise((resolve, reject) =>{
    console.log("Loading...");
    setTimeout(() =>{
        resolve("Login Successful");
    }, 2000);})

async function checkLogin() {
    let result = await loginPromise;
    console.log(result);
}

checkLogin();