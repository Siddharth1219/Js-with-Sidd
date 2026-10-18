//  study
// variable scope: global, block, functional
// Execution context: memory creation and execution phase
// Lexiical scope and dynamic scope
// Closure definition and how variables are preseved
// Uses cases: private counters, encapsulation


// *****************SCOPE*********************
// Scope --->>  The range of visibility of a variable in the code.
// scope hai ki app apne creted variables and functions kaha tak use kar skte ho 






// *****FUNCTIONAL SCOPE*****
// Functional scope means that the variables defined inside a function are not accessible from outside the function. 
// They are only accessible within the function in which they are defined.


// Example of functional scope:
function myFunction() {
    var functionScopedVariable = "I am only accessible within this function";
    console.log(functionScopedVariable); // This will work
}

myFunction();
console.log(functionScopedVariable); // This will throw an error because the variable is not accessible outside the function






// *****GLOBAL SCOPE*****
// Global scope means that the variables defined outside of any function are accessible from anywhere in the code, 
// including inside functions. These variables are available throughout the entire program.

// Example of global scope:
var globalVariable = "I am accessible from anywhere in the code";

function anotherFunction() {
    console.log(globalVariable); // This will work because globalVariable is in the global scope
}

anotherFunction();
console.log(globalVariable); // This will also work because globalVariable is in the global scope






// *****BLOCK SCOPE*****
// Block scope means that the variables defined inside a block (e.g., inside curly braces {}) are only accessible within that block. 
// This is typically seen with variables declared using let and const keywords in JavaScript.

// Example of block scope:
if (true) {
    let blockScopedVariable = "I am only accessible within this block";
    console.log(blockScopedVariable); // This will work
}

console.log(blockScopedVariable); // This will throw an error because the variable is not accessible outside the block  







// ******************EXECUTION CONTEXT*********************
// Execution context is the environment in which JavaScript code is executed. 
// It consists of two phases: memory creation phase and execution phase.

// js sabse pehle jaise hi apka function dekkhta hai sabse pahle js bananata hai execution context, ye ek process hai.



// Memory Creation Phase: In this phase, JavaScript allocates memory for variables and functions.
// During this phase, the JavaScript engine creates a memory space for each variable and function in the code.






// Exicution Phase: In this phase, JavaScript executes the code line by line and assigns values to the variables.
// During this phase, the JavaScript engine executes the code and assigns values to the variables that were created in the memory creation phase.