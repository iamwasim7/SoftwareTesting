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



/*Explanation:
- new Promise() creates a Promise.
- resolve() indicates successful completion.
- reject() indicates failure.
- success determines which outcome occurs in this example.
#resolve and reject are functions provided by JavaScript. */



