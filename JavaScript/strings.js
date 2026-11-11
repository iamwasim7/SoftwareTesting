//A string is a sequence of characters enclosed in quotes.
//Strings are used to store and manipulate text.

//1. String Length
//Print the total number of characters.
let msg = "Hello JavaScript";
console.log(msg.length);

//2. Uppercase and Lowercase
//Print it in uppercase and lowercase.
let firstName = "Wasim";
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());

//3. Remove Extra Spaces
// Remove the extra spaces and print the cleaned email.
let email = "       test123@gmail.com            ";
cleanedEmail = email.trim();
console.log(cleanedEmail);

//4. Check Website Name
// Check whether the website contains "opencart".
let website = "Welcome to Opencart";
console.log(website.includes("Opencart"));

//5. Extract Text
// Use slice() to extract and print "Script".
let programming = "JavaScript";
sliced = programming.slice(4, 10);
console.log(sliced);

//6. Split a String
// Convert it into an array using split() and print the array.
let browsers = "Chorme,FireFox,Edge,Brave";
let browsersArray = browsers.split(",");
console.log(browsersArray);

//7. Template literal
// Using a template literal, print: My name is Wasim and age is 21
let userName = "Wasim";
let age = "21";
console.log(`My name is ${userName} and age is ${age}`);