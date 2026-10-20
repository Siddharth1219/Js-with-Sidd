// Q1. Create an arrray with 3 fruits and print the second fruit.

let fruits = ["Apple", "Mango", "Bannana"];
console.log(fruits[1]); // Mango




// Q2. add cherry at the end and "Pinespple" at the begginning of the array and print the array.

fruits.push("Cherry"); // Add Cherry at the end
fruits.unshift("Pineapple"); // Add Pineapple at the beginning
console.log(fruits); // ["Pineapple", "Apple", "Mango", "Bannana", "Cherry"]





// Q3. Replace "Bannnnana" with "Kiwii" and print the array.

fruits[3] = "Kiwi"; // Replace Bannana with Kiwi
console.log(fruits); // ["Pineapple", "Apple", "Mango", "Kiwi", "Cherry"]





// Q4. what's the difference between .push() and .unshift() methods in arrays?

// .push() method adds one or more elements to the end of an array and returns the new length of the array.
// .unshift() method adds one or more elements to the beginning of an array and also returns the new length of the array.



// Q5. Remove the last item from this array using method:

fruits.pop(); // Removes the last item (Cherry)
console.log(fruits); // ["Pineapple", "Apple", "Mango", "Kiwi"]



// Q6. Insert "red" and "blue" at the index 1 in this array and print the array.

fruits.splice(1, 0, "Red", "Blue"); // Insert Red and Blue at index 1
// the use of 1 and 0 in splice means we are starting at index 1 and removing 0 elements, then adding "Red" and "Blue"
console.log(fruits); // ["Pineapple", "Red", "Blue", "Apple", "Mango", "Kiwi"]



// Q7. Extract only the middle 3 elements from this arrray and print them.

let middleFruits = fruits.slice(1, 5); // Extract elements from index 2 to 4 (5 is not included)
console.log(middleFruits); // ["Blue", "Apple", "Mango"]




// Q8. Sort this aaray alphabetically and then reverse the order and print the array.
let names = ["John", "Alice", "Bob", "Charlie"];

names.sort(); // Sort the array alphabetically
console.log(names); // ["Alice", "Bob", "Charlie", "John"]

names.reverse(); // Reverse the order of the array
console.log(names); // ["John", "Charlie", "Bob", "Alice"]




// Q9. use .map() to square each number in this array and print the new array.
let numbers = [1, 2, 3, 4, 5];

let squaredNumbers = numbers.map(function(num) {
    return num * num;
}); // Square each number

console.log(squaredNumbers); // [1, 4, 9, 16, 25]





// Q10.   use .filter to keep numbers greater than 10:

let aary = [5, 10, 15, 20, 25];

let filteredNumbers = aary.filter(function(num) {
    return num > 10;
}); // Keep numbers greater than 10

console.log(filteredNumbers); // [15, 20, 25]





// Q11. use .reduce to get the sum of all numbers in this array:
let numArray = [1, 2, 3, 4, 5];

let sum = numArray.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0); // Sum all numbers

console.log(sum); // 15





// Q12.use .find() to get first number less than 10:
let arrry = [12, 5, 8, 130, 44];

let firstLessThanTen = arrry.find(function(num) {
    return num < 10;
}); // Find first number less than 10

console.log(firstLessThanTen); // 5






// Q13. use .some() to check if any number in this aaray has scored below 35:
let arrrrrry = [45, 67, 89, 34, 56];

let hasScoredBelow35 = arrrrrry.some(function(num) {
    return num < 35;
}); // Check if any number is below 35

console.log(hasScoredBelow35); // true (34 is below 35)




// Q14. use .every() to check if all numbers in this array are even

let arr = [2, 4, 6, 8, 10];

let allEven = arr.every(function(num) {
    return num % 2 === 0;
}); // Check if all numbers are even

console.log(allEven); // true (all numbers are even)





// Q15. Destructure this array to get first name and the last name and print them.
let fullName = ["John", "Doe"];

let [firstName, lastName] = fullName; // Destructure the array
console.log(firstName); // John
console.log(lastName); // Doe




// Q16. Use the spread operator to combine these two arrays and print the new array.
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combinedArray = [...arr1, ...arr2]; // Combine the two arrays using spread operator
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]




// Q17. clone this array properly (not by refrence) and print the new array.
let originalArray = [1, 2, 3, 4, 5];
let clonedArray = [...originalArray]; // Clone the array using spread operator
console.log(clonedArray); // [1, 2, 3, 4, 5]