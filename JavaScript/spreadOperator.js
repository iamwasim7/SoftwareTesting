//The spread operator (...) expands elements of an array or properties of an object.

//1 – Copying an array

const fruits = ["apple", "mango", "banana"];
const copied = [...fruits];

console.log(copied);

//2 – Combining arrays

const iplteams = ["KKR", "MI", "CSK"];
const footballclubs = ["Real Madrid", "Barca", "ManUnited"];

const iplteamsXfootballclubs = [...iplteams, ...footballclubs];
console.log(iplteamsXfootballclubs);

//3 – Adding elements while copying

const newfruits = [...fruits, "Cherry"];
console.log(newfruits);

//Spread Operator with Objects
//We can also use spread to copy and combine objects.

const user ={
    username: "admin",
    role: "Tester"
};

const updateUser ={
    ...user,
    experience: 1
};

console.log(updateUser);
