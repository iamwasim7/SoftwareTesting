/*Exercise 3 – Count Even and Odd Numbers
Let's practise arrays, loops, conditions, and counters together.
Requirements:
1. Create a function named countEvenOdd.
2. Accept the array as a parameter.
3. Use a loop to check every number.
4. Count how many numbers are even and how many are odd.
5. Return both counts. */

let numbers = [10, 15, 20, 25, 30, 35, 40];

const countEvenOdd = (numbers) =>{
    let evenCount = 0;
    let oddCount = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenCount ++;
        }else{
            oddCount ++;
        }    
    }
    return{
        even: evenCount,
        odd: oddCount
    }
};

console.log(countEvenOdd(numbers));