/*
Four important methods:
1. forEach()
2. map()
3. filter()
4. find() */

//(Exercise 1 – forEach())
//Use forEach() to print every student name.
let students = ["Wasim", "Cam Green", "Finn Allen", "Angki", "Harshit"];

students.forEach(function(student){
    console.log(student);
});

//(Exercise 2 – map())
//Use map() to multiply every number by 3.

let numbers = [2, 4, 6, 8, 10];

let reslut = numbers.map((num)=>{
    return num * 3;

});
console.log(reslut);

//(Exercise 3 – filter())
//Use filter() to find all ages greater than or equal to 18.

let ages = [15, 17, 18, 25, 29, 35, 16, 12];

let filteredAges = ages.filter((age)=>{
    return age >= 18;
});
console.log(filteredAges);

//(Exercise 4 – find())
//Use find() to find the first number greater than 25.

let numArray = [10, 15, 20, 25, 30, 22, 45];

let reslut1 = numArray.find((num1)=>{
    return num1 >25;
});
console.log(reslut1);

//Exercise 5 
/*
Perform these tasks:
1. Use forEach() to print all test case names.
2. Use map() to create a new array containing only test case names.
3. Use filter() to find all failed test cases.
4. Use find() to find the first test case with status "Passed". */

let testCases = [
    { name: "Login", status: "Passed" },
    { name: "Register", status: "Failed" },
    { name: "Logout", status: "Passed" },
    { name: "Search", status: "Failed" },
    { name: "Forgot Password", status: "Passed" }
];

//1. Use forEach() to print all test case names.
testCases.forEach((tc)=>{
    console.log(tc);
});

//2. Use map() to create a new array containing only test case names.
testcasename = testCases.map((test)=>{
    return test.name;
});
console.log(testcasename);

//3. Use filter() to find all failed test cases.
failedTC = testCases.filter((ftc)=>{
    return ftc.status === "Failed";
});
console.log(failedTC);

//4. Use find() to find the first test case with status "Passed".
passedTC = testCases.find((ptc)=>{
    return ptc.status === "Passed";
});

/*
1. Use map() to create an array containing only test statuses.
2. Use filter() to get all test cases whose status is "Passed".
3. Use find() to find the test case named "Search". */

//1. Use map() to create an array containing only test statuses.
statusTC = testCases.map((checkStatus)=>{
    return checkStatus.status;
});
console.log(statusTC);

//2. Use filter() to get all test cases whose status is "Passed".
passedtc = testCases.filter((passedTestcases)=>{
    return passedTestcases.status === "Passed";
});
console.log(passedtc);

//3. Use find() to find the test case named "Search".

searchTest = testCases.find((searchtc)=>{
    return searchtc.name === "Search";
});
console.log(searchTest);