/*
Q7. Function – Even or Odd

Create a function named checkEvenOdd().
- Accept a number as a parameter.
- Check whether the number is even or odd.
- Return the appropriate message.
- Print the returned result. */

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log("Even")
    }else{
        console.log("Odd")
    }
};

checkEvenOdd(3);