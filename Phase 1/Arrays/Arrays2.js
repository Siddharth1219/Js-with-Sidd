// ******************Destructuring Arrays******************

let numbers = [1, 2, 3, 4, 5];

// Destructuring assignment
let [first, second, ...rest] = numbers;

console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

// You can also skip elements
let [, , third] = numbers;
console.log(third); // 3

// Default values can be assigned during destructuring
let [a = 10, b = 20] = [undefined, 30];
console.log(a); // 10 (default value used)
console.log(b); // 30 (value from array used)






// *********************Spread Operator*********************

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// Using spread operator to combine arrays
let combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Using spread operator to copy an array
let copy = [...arr1];
console.log(copy); // [1, 2, 3]

// Using spread operator to pass elements of an array as arguments to a function
function sum(x, y, z) {
    return x + y + z;
}

let numbersToSum = [1, 2, 3];
console.log(sum(...numbersToSum)); // 6