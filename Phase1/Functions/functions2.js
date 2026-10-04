//  first class functions --> functions ko values ki trh treat kr skte hai

function abcd(val) {
    val();
}
abcd(function() {
    console.log("hello world");
});



// Higher order functions --> functions ko arguments ki trh pass kr skte hai or return kr skte hai

function abcd2(val) {
    return function() {
        console.log("hello world, siddharth");
    }
}
abcd2()();



// ********************************Pure vs Impure functions**********************

// Pure function --> jo same input pr same output de or koi side effect na ho
function pureFunction(a, b) {
    return a + b;
}
console.log(pureFunction(2, 3)); // 5
console.log(pureFunction(2, 3)); // 5


// Impure function --> jo same input pr different output de or side effect ho
let c = 0;

function impureFunction(a, b) {
    c++;
    return a + b + c;
}
console.log(impureFunction(2, 3)); // 6
console.log(impureFunction(2, 3)); // 7




// **************Closures**********************

// closures --> ek function jo return kare ek aur function aur us function ko access kr skta hai jo uske parent function me defined hai
function abcd3() {
    let a = 12;
    return function() {
        console.log(a);
    }
}
console.log(abcd3()()); // 12



// ***************Lexical scoping**********************

// lexical scoping --> ek function ko access kr skta hai jo uske parent function me defined hai
function abcd4() {
    let a = 12;

    function defg() {
        let b = 13;

        function hijk() {
            let c = 14;
            console.log(a, b, c);
        }
        hijk();
    }
    defg();
}
abcd4(); // 12 13 14





// IIFE --> Immediately Invoked Function Expression --> ek function jo turant hi call ho jata hai
(function() {
    console.log("hello world, siddharth yadav");
})(); // hello world, siddharth





// ********Hoisting difference between function declaration and function expression********

// Hoisting --> variables and functions are moved to the top of their scope before code execution
// In JavaScript, hoisting is the behavior of moving variable and function declarations to the top of their scope before code execution.




// function declaration --> function ko declare krne se pehle hi call kr skte hai
function abcd5() {
    console.log("hello world, siddharth yadav");
}
abcd5(); // hello world, siddharth yadav

// function expression --> function ko declare krne ke baad hi call kr skte hai
let abcd6 = function() {
    console.log("hello world, siddharth yadav");
}
abcd6(); // hello world, siddharth yadav