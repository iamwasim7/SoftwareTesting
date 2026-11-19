/*A Promise is an object that represents the eventual success or failure of an asynchronous operation.

For example, imagine you're ordering food:
1. You place an order.
2. The restaurant accepts your order.
3. The food is prepared.
4. Your order is delivered — or cancelled.
A JavaScript Promise works similarly: it represents an operation whose result will be available later. */

//Three states of a Promise
/*
1. Pending
The operation hasn't completed yet.

2. Fulfilled
The operation completed successfully.

3. Rejected
The operation failed.

A Promise starts as pending and eventually becomes fulfilled or rejected. */

//Creating a Promise

let myPromise = new Promise((resolve, reject) =>{
    let success = true;

    if(success){
        resolve("Operational Successful");
    } else{
        reject("Operation Failed");
    }

});

myPromise.then((resolve)=>{
    console.log(resolve);
});
myPromise.catch((reject)=>{
    console.log(reject);
});

/*Explanation:
- new Promise() creates a Promise.
- resolve() indicates successful completion.
- reject() indicates failure.
- success determines which outcome occurs in this example.
#resolve and reject are functions provided by JavaScript. */

/*Exercise 1 – Create a Promise
Create a Promise named loginPromise.
Requirements:
1. Create a variable loginSuccess = true.
2. If loginSuccess is true, call resolve("Login Successful").
3. Otherwise, call reject("Invalid Credentials").
4. Use .then() to print the success message.
5. Use .catch() to print the error message. */

let loginPromise = new Promise((resolve, reject) =>{
    const loginSuccess = true;
    if(loginSuccess){
        resolve("Login Successful");
    }else{
        reject("Invalid Credentials");
    };
});

loginPromise.then((resolve)=>{
    console.log(resolve);
});

loginPromise.catch((reject) =>{
    console.log(reject);
});




