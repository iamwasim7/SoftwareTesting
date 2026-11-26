//Convert Object into JSON
/*Requirements:
1. Convert testCase into a JSON string using JSON.stringify().
2. Store the result in a variable named jsonData.
3. Print jsonData.
4. Print typeof jsonData. */

const testCase = {
    testName: "Login Test",
    status: "Passed",
    priority: "High"
};

const jsonData = JSON.stringify(testCase);
console.log(jsonData);
console.log(typeof jsonData);

//JSON.parse()
/*Requirements:
1. Convert jsonData into a JavaScript object using JSON.parse().
2. Store the result in a variable named userData.
3. Print userData.
4. Print userData.username.
5. Print typeof userData. */

const jsonInfo = '{"username":"admin","password":"admin123","role":"Tester"}';
const userData = JSON.parse(jsonInfo);

console.log(userData.username);
console.log(typeof userData);

