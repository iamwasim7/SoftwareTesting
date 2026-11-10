//An object is a data structure that stores information in key-value pairs.

//--------------------------------------------------Practice Questions--------------------------------------------------------------------
/*
1. Create a Student Object

Create an object named student containing:
- name
- age
- college
- course
- city
Print all five properties using dot notation. */

let student = {
    name: "Rahul",
    age: 25,
    college: "DTSS College",
    course: "BSC.IT",
    city: "Mumbai"
}

console.log(student.name);
console.log(student.age);
console.log(student.college);
console.log(student.course);
console.log(student.city);

/*2. Update Object Properties
Tasks:
1. Change age from 25 to 26.
2. Change department to "Automation Testing".
3. Print the updated object. */

let employee = {
    name: "Rahul",
    age: 25,
    department: "Testing"
};

employee.age = 26;
employee.department = "Automation Testing";
console.log(employee);

/*3. Add and Delete Properties
Tasks:
1. Add a new property storage with value "512GB".
2. Delete the ram property.
3. Print the final object. */

let laptop = {
    brand: "Dell",
    ram: "8GB",
    processor: "Intel i5"
};

laptop.storage = "512GB";
delete laptop.ram;
console.log(laptop);

/*4. Nested Object

Create an object named user:
- username: "testuser"
- password: "test123"
- address:
  - city: "Mumbai"
  - country: "India"
Print the username and city. */

let user = {
    username: "testuser",
    password: "test123",
    address : {
        city: "Mumbai",
        country: "India"
    }
};
console.log(user.username);
console.log(user.address.city);

/* 5. Login Test Data

Create an object named loginData containing:
- username: "admin"
- password: "admin123"
- expectedResult: "Login Successful"
Create a function named validateLogin that accepts this object as a parameter.

Check whether the username and password are correct and return the appropriate result. */

let loginData = {
    username: "admin",
    password: "admin123",
    expectedResult: "Login Successful",

    validateLogin: function(username, password){
        if (username === "admin" && password === "admin123") {
            console.log("Login Succeaful")  
        } else {
            console.log("Invalid Username and Password")
        }
    }
};
loginData.validateLogin("admin", "admin123");