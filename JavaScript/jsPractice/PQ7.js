/*
Q7. Function – Even or Odd

Create a function named checkEvenOdd().
- Accept a number as a parameter.
- Check whether the number is even or odd.
- Return the appropriate message.
- Print the returned result. */

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    }else{
        return "Odd";
    }
};

let result = checkEvenOdd(3);
console.log(result);