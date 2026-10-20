//  Q1. what's the diffence between function declaration and function expression in terms of hoisting?

// Function declaration is hoisted to the top of the scope, so it can be called before it is defined.
// Function expression is not hoisted, so it cannot be called before it is defined.






// Q2.
greet();

function greet() {
    console.log("Hello, World!");
} // Hello, World!





// Q3. convert this function into a arrow function.
// function multiply(a, b) {
//     return a * b;
// }


let multiply = (a, b) => {
    return a * b;
};
console.log(multiply(2, 3)); // 6
console.log(multiply(4, 5)); // 20    //not works because its not a function call, we need to console.log it to see the result.



// Q4 Identify parameters and arguments in the following function call.
function welcome(name) {
    console.log(name);
}
welcome("Siddharth"); // name is a parameter, "Siddharth" is an argument




// Q4. how many parameter this questions have and how many arguments are passed in the function call?
function demo(a, b, c) {}
demo(1, 2); // This function has 3 parameters (a, b, c) and 2 arguments (1, 2) are passed in the function call.






// Q5. Predict the output of the following code
function sayHi(name = "Guest") {
    console.log("hi", name);
}
sayHi(); // hi Guest






// Q7. What does the ... parameter syntax do in a function definition?

// The ... parameter syntax (rest parameter) allows a function to accept an indefinite number of arguments as an array. It collects all remaining arguments into a single array parameter.

function sum(...numbers) {
    console.log(numbers);
};
sum(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]

// another one isolation: 
function multiplyAll(multiplier, ...numbers) {
    console.log(multiplier, numbers);
}
multiplyAll(2, 1, 2, 3); // 2 [1, 2, 3]  where multiplier is 2 and numbers is [1, 2, 3]






// Q8. use rest parameters to accept any numbers of scores and returns the total.

function getScores(...scores) {
    let total = 0;
    scores.forEach(function(val) {
        total += val;
    });
    return total;
}

console.log(getScores(10, 20, 30)); // 60







// Q9. fixed the function using early return statement to avoid unnecessary computation.

function checkAge(age) {
    if (age < 18) {
        console.log("You are not allowed to enter.");
    } else {
        console.log("Welcome!");
    }
}


// solution Q9.

function checkAge(age) {
    if (age < 18) return "You are not allowed to enter.";
    return "Welcome!";
}
console.log(checkAge(15)); // You are not allowed to enter.
console.log(checkAge(25)); // Welcome!







// Q10.  there was a function what it returns.
function f() {
    return;
}
console.log(f()); // undefined  because the function does not return anything, so it returns undefined by default.






// Q11. What does it mean when we say "functions are first-class citizens in JavaScript"?

// In JavaScript, functions are first-class citizens, which means they can be treated like any other value. 
// They can be assigned to variables, passed as arguments to other functions, and returned from other functions. 
// This allows for higher-order functions and functional programming techniques.


let ab = function() {

}
ab();






// Q12. Pass a function into another function and exicutes inside the function.

function abcde(fn) {
    fn(); // Calling the passed function
}

abcde(function() {
    console.log("This is a function passed as an argument.");
});






// Q13. What is higher order function in JavaScript?

// A higher-order function is a function that can take other functions as arguments or return a function as its result. 
// Higher-order functions allow for more abstract and flexible code, enabling functional programming techniques.

function higherOrderFunction(fn) {
    fn(); // Calling the passed function
}

higherOrderFunction(function() {
    console.log("This is a higher-order function.");
});







// Q14. identify high order function in the code.
[1, 2, 3].map(function(num) {
    return num * 2;
}); // map is a higher-order function because it takes a function as an argument.






// Q15. which function is pure or not.

let total = 0; // external variable

function addToTotal(num) {
    total += num; // modifies external variable
    return total;
}

console.log(addToTotal(5)); // 5
console.log(addToTotal(10)); // 15

// The function addToTotal is not pure because it modifies an external variable (total) and its output depends on the external state. A pure function should not have side effects and should always return the same output for the same input.







// 16. Convert the above function into a pure function.

function add(num1, num2) {
    return num1 + num2; // returns the sum of two numbers without modifying any external state
}

console.log(add(5, 10)); // 15
console.log(add(5, 10)); // 15  // now it is a pure function because it always returns the same output for the same input and does not modify any external state.






// Q17. What is closure? when it is created?

// A closure is a function that has access to its own scope, the outer function's scope, and the global scope. 
// It is created when a function is defined inside another function, allowing the inner function to "close over" the variables of the outer function.

function abc() {
    let val = 0;
    return function() {
        console.log(val, "This is a closure.");
    };
}





// 18. convert this normal function into an IIFE
function init() {
    console.log("This is an IIFE.");
}

// solution Q18.
(function() {
    console.log("This is an IIFE.");
})(); // Immediately Invoked Function Expression (IIFE)




//Q19. What is the use of IIFE? Name one real - world use case.

// IIFE (Immediately Invoked Function Expression) is used to create a new scope and avoid polluting the global namespace.
//  It allows you to execute code immediately while keeping variables and functions private to that scope.

(function() {
    let username = 0;
    console.log("This is an IIFE.");
})(); // username is not accessible outside this IIFE, preventing global namespace pollution.






// Q20.
// what will be the output here and why?

greet();
var greet: () => void
var greet = function() {
    console.log("Hello!");
};

greet(); // Output: TypeError: greet is not a function

// Explanation: The first call to greet() will throw a TypeError because the variable greet is hoisted but not initialized at the time of the call. 
// The function expression assigned to greet is not hoisted, so it is undefined when the first call is made. 
// The second call to greet() will work correctly and output "Hello!" because by that time, greet has been assigned the function.