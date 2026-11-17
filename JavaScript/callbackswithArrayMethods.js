/*Exercise 1 – forEach()
Use forEach() to print every test case name. */

let testCases = [
    { name: "Login", status: "Passed" },
    { name: "Register", status: "Failed" },
    { name: "Logout", status: "Passed" },
    { name: "Search", status: "Failed" }
];

testCases.forEach(function(testcase){
    console.log(testcase.name);
});

/*Exercise 2 – map()
Create a new array containing only the test case names. */

let testcaseName = testCases.map((testCase) =>{
    return testCase.name;
});

console.log(testcaseName);

/*Exercise 3 – filter()
Create a new array containing only test cases with status "Passed". */

let testcasesStatus = testCases.filter((statusofTC)=>{
    return statusofTC.status === "Passed";
});
console.log(testcasesStatus);

/*Exercise 4 – find()
Find the test case whose name is "Search". */

let findSearch = testCases.find((testCases)=>{
    return testCases.name === "Search";
});
console.log(findSearch);
 