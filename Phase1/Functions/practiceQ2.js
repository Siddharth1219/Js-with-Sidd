// Create a reusable calculator or(HOF)
// Discount calculator is a higher-order function that takes a discount percentage as an argument and returns a new function. This new function can be used to calculate the discounted price of an item based on the original price and the specified discount percentage.

function calculator(discount) {
    return function(price) {
        return price - (price * discount / 100);
    };
};

let discounter = calculator(10); // Create a calculator with a discount of 10%
console.log(discounter(200)); // Apply the discount to a price of 200, returns 180