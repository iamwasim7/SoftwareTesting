//Loops are used to execute a block of code repeatedly until a specified condition is met.

/* JavaScript has three main loops:
1. for
2. while
3. do...while */

/*1. The for loop
The for loop is used when you know how many times you want to execute a block of code. */

for (i=1; i<=5; i++){
    console.log(i);
}

/*2. The while loop
The while loop executes as long as the specified condition is true.

It is useful when you don't know exactly how many times the loop needs to run. */

let x = 1;

while (x<=5) {
    console.log(x)
    x++;
}

/*3. The do...while loop
The do...while loop is similar to the while loop, but there is one important difference:

It executes the code at least once, even if the condition is false. */

let y = 1;

do {
    console.log(y)
} while (i<=5);

//Important: break and continue keywords. These keywords help control loop execution.
//break – Stop the loop completely

for (let a = 1; a<=5; a++) {
    if (a === 3) {
        break;
    }
    
    console.log(a);
}
//continue – Skip the current iteration

for (let b = 1; b<=5; b++) {
    if (b === 3) {
        continue;
    }
    
    console.log(b);
}

//When i becomes 3, that iteration is skipped, but the loop continues.

// --------------------------------------------------Practice Questions-------------------------------------------------------------

// 1. Even Numbers
//Use a for loop to print all even numbers from 2 to 20.

for (let n = 1; n <= 20; n++) {
    if(n % 2 === 0){
        console.log("Even Number", n)
    }
}
//2. Use a for loop to print numbers from 1 to 10.
 for(let z = 1; z <= 10; z++){
    console.log(z)
 };

//3.Multiplication Table
//Print the multiplication table of 5.

let number = 5;
let w = 1;

while (w<=10) {
    console.log(number, "*", w, "=", number * w)
    w++;
};

//4. While Loop
//Use a while loop to print numbers from 10 down to 1.

let g = 10;
 while (g >= 1) {
    console.log(g);
    g--;
 }

 /*
5. Break and Continue

Create a for loop from 1 to 10.
- Skip number 5 using continue.
- Stop the loop when the number reaches 8 using break. */

for (let j = 1; j <= 10; j++) {
    if (j === 5) {
        continue;
    }
    if (j === 8) {
        break;
    }
    console.log(j)
};