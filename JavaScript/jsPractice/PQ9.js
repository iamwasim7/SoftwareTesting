//Q9. Array Methods
/*Perform these tasks:
1. Use forEach() to print every price.
2. Use map() to increase every price by 10%.
3. Use filter() to get prices greater than 500.
4. Use find() to find the first price greater than 700. */

let prices = [100, 250, 500, 750, 1000, 1500];
/*
prices.forEach(function (price) {
    console.log(price);
}); */

/*prices.map(function (price){
    console.log(price * 10);
}); */
/*
prices.filter(function (price){
    console.log(price > 500);
});
*/
prices.find(function (price){
    console.log(price > 700);
});