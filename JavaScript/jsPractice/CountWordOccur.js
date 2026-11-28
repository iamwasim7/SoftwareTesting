//Exercise 7 – Count Word Occurrences
/*Requirements:
1. Create a function named countFruits.
2. Accept the array as a parameter.
3. Create an empty object named fruitCount.
4. Use a loop to visit every fruit.
5. Count how many times each fruit appears.
6. Return the fruitCount object. */

let fruits = ["Apple", "Banana", "Apple", "Orange", "Banana", "Apple"];

const countFruits = (fruits) =>{
    let fruitCount = {}
    for (let i = 0; i < fruits.length; i++) {
        if (fruitCount[fruits[i]]) {
           fruitCount[fruits[i]]++;
        } else {
           fruitCount[fruits[i]] = 1;
    } 
    }
    return fruitCount
};

console.log(countFruits(fruits))