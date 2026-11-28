//Exercise 5 – Calculate Total Price
/*Requirements
1. Create a function named calculateTotal.
2. Accept the prices array as a parameter.
3. Create a variable total initialized to 0.
4. Use a for loop to access each price.
5. Add every price to total.
6. Return the final total.
7. Call the function and print the result. */

let prices = [100, 250, 150, 300, 200];

const calculateTotal = (prices) =>{
    let total = 0;
    for (let i = 0; i < prices.length; i++) {
        total += prices[i];
    }
    return total;
};

console.log(calculateTotal(prices));