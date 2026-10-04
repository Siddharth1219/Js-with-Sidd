// arrays are a type of data structure that can hold multiple values in a single variable.
//  They are useful for storing collections of data, such as lists of numbers, strings, or objects.
//  In JavaScript, arrays are created using square brackets [] and can hold elements of any data type.



// Creation of arrays
let marks = [90, 85, 78, 92, 88]; // an array of numbers
console.log(marks[3]); // accessing the fourth element of the array, which is 92
console.log(marks[9]); // accessing the tenth element of the array, which is undefined since it doesn't exist



// Modification of arrays
console.log(marks[2] = 34); // changing the value of the third element of the array to 34
console.log(marks); // printing the updated array


// Arrays Methods are-

let arr = [1, 2, 3, 4, 5];

// 1. push() - adds one or more elements to the end of an array and returns the new length of the array.
arr.push(6);
console.log(arr); // [1, 2, 3, 4, 5, 6]

// 2. pop() - removes the last element from an array and returns that element.
arr.pop();
console.log(arr); // [1, 2, 3, 4, 5]

// 3. shift() - removes the first element from an array and returns that element.
arr.shift();
console.log(arr); // [2, 3, 4, 5]

// 4. unshift() - adds one or more elements to the beginning of an array and returns the new length of the array.
arr.unshift(0);
console.log(arr); // [0, 2, 3, 4, 5]

// 5. splice() - adds or removes elements from an array at a specified index.
arr.splice(2, 1, 99); // removes 1 element at index 2 and adds 99
console.log(arr); // [0, 2, 99, 4, 5]

// 6. slice() - returns a shallow copy of a portion of an array into a new array object.
let newArr = arr.slice(1, 4); // creates a new array from index 1 to index 3
console.log(newArr); // [2, 99, 4]

// 7. reverse() - reverses the order of the elements in an array.
arr.reverse();
console.log(arr); // [5, 4, 99, 2, 0]

// 8. sort() - sorts the elements of an array in place and returns the sorted array.
arr.sort();
console.log(arr); // [0, 2, 4, 5, 99]

// 9. indexOf() - returns the first index at which a given element can be found in the array, or -1 if it is not present.
let index = arr.indexOf(4);
console.log(index); // 2

// 10. includes() - determines whether an array includes a certain value among its entries, returning true or false as appropriate.
let hasValue = arr.includes(99);
console.log(hasValue); // true






// **********************For each loop in arrays********

// for each har ek element ke liye ek function ko call karta hai. Ye function har element ke liye ek baar execute hota hai.

let array = [34, 67, 345, 2, 4, 78655];

array.forEach(function(value) {
    console.log(value);
    console.log(value * 2); // multiplying each element by 2 and printing the result
})




// **********************Map ************************

// map sirf tab use krna hai jab apko ek naya array banana hai pichle array ke data ke basis pe.
//  Ye har element ke liye ek function ko call karta hai aur uske return value se ek naya array banata hai.

// map dikhte sath man me ek blank array bna lo

let newArray = [1, 2, 3, 4, 5];

// 1st
let newMappedArray = newArray.map(function(value) {
    return 12;
});
console.log(newMappedArray); // [12, 12, 12, 12, 12] - new array with all elements as 12



// 2nd
let newMappedArray2 = newArray.map(function(value) {
    if (value > 3) return value;
});
console.log(newMappedArray2); // [4, 5] - new array with elements greater than 


// jab bhi apko koi ayesa case dikh jaye ek array se naya array banega and wo array koi naye values ko rakhega








// ***********************Filter ************************

// filter sirf tab use krna hai jab apko ek naya array banana hai pichle array ke data ke basis pe.
//  Ye har element ke liye ek function ko call karta hai aur uske return value se ek naya array banata hai.
//  Filter me return value true ya false hoti hai. Agar return value true hoti hai to wo element naya array me add ho jata hai, otherwise nahi.

let newArray3 = [1, 2, 3, 4, 5];

let newFilteredArray = newArray3.filter(function(value) {
    if (value > 3) return true; // all elements will be added to the new array
});
console.log(newFilteredArray); // [5] - new array with elements greater than 4








// ***********************Reduce ************************

// reduce sirf tab use krna hai jab apko ek single value chahiye pichle array ke data ke basis pe.
//  Ye har element ke liye ek function ko call karta hai aur uske return value se ek single value banata hai.
//  Reduce me return value kisi bhi data type ki ho sakti hai, jaise number, string, object, etc.

let newArray4 = [1, 2, 3, 4, 5];

let newReducedValue = newArray4.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue; // adding all elements of the array
}, 0); // initial value of accumulator is 0
console.log(newReducedValue); // 15 - sum of all elements of the array

// accumulator is the value that is returned by the function after each iteration, and currentValue is the current element of the array that is being processed. The initial value of accumulator is 0, which is passed as the second argument to the reduce function.





// // ***********************Find ************************

// find sirf tab use krna hai jab apko ek single value chahiye pichle array ke data ke basis pe.
//  Ye har element ke liye ek function ko call karta hai aur uske return value se ek single value banata hai.
//  Find me return value true ya false hoti hai. Agar return value true hoti hai to wo element naya array me add ho jata hai, otherwise nahi.

let newArray5 = [1, 2, 3, 4, 5];

let newFoundValue = newArray5.find(function(value) {
    if (value > 3) return true; // all elements will be added to the new array
});
console.log(newFoundValue); // 4 - first element greater than 3






// *****************************Some******************************

// some sirf tab use krna hai jab apko ek boolean value chahiye pichle array ke data ke basis pe.
//  Ye har element ke liye ek function ko call karta hai aur uske return value se ek boolean value banata hai.
//  Some me return value true ya false hoti hai. Agar return value true hoti hai to wo element naya array me add ho jata hai, otherwise nahi.

let newArray6 = [1, 2, 3, 4, 5];

let newSomeValue = newArray6.some(function(value) {
    if (value > 3) return true; // all elements will be added to the new array
});
console.log(newSomeValue); // true - at least one element is greater than 3





// ******************************Every******************************

// every sirf tab use krna hai jab apko ek boolean value chahiye pichle array ke data ke basis pe.
//  Ye har element ke liye ek function ko call karta hai aur uske return value se ek boolean value banata hai.
//  Every me return value true ya false hoti hai. Agar return value true hoti hai to wo element naya array me add ho jata hai, otherwise nahi.

let newArray7 = [1, 2, 3, 4, 5];

let newEveryValue = newArray7.every(function(value) {
    if (value > 3) return true; // all elements will be added to the new array
});
console.log(newEveryValue); // false - not all elements are greater than 3