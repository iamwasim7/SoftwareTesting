/*Exercise 2 – Find the Largest Number
Requirements:
1. Create three parameters:
   - num1 = 25
   - num2 = 45
   - num3 = 30
2. Create a function named findLargest.
3. Accept all three numbers as parameters.
4. Use conditional statements to find the largest number.
5. Return the largest number.
6. Call the function and print the result. */


function findLargest(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return `Largest number: ${num1}`;
    }if(num2 > num1 && num2 > num3){
        return `Largest number: ${num2}`;
    }else{
        return `Largest number: ${num3}`;
    };
};

console.log(findLargest(40, 35, 99));