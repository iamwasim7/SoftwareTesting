import testData from "./testData.json" with { type: "json" };

console.log(testData);

console.log(testData.validUser.username);
console.log(testData.validUser.password);

console.log(testData.invalidUser.username);
console.log(testData.invalidUser.password);