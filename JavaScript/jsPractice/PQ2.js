//Simple Calculator
/* Perform and print:
1. Addition
2. Subtraction
3. Multiplication
4. Division
5. Modulus */

//let num1 = 25;
//let num2 = 5;

function Calculator(num1, num2){
    console.log(`Addition of ${num1} + ${num2} = ${num1 + num2}`);
    console.log(`Subtraction of ${num1} - ${num2} = ${num1 - num2}`);
    console.log(`Multiplication of ${num1} * ${num2} = ${num1 * num2}`);
    console.log(`Division of ${num1} / ${num2} = ${num1 / num2}`);
    console.log(`Modulus of ${num1} % ${num2} = ${num1 % num2}`);
};

Calculator(25, 5);