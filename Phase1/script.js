//--------------var, let, const  -- line-by-line comparision------------------

// var is part of ES5 and is function scoped. It can be re-declared and updated. It is hoisted to the top of its scope and initialized with undefined.
// let is part of ES6 and is block scoped. It can be updated but not re-declared. It is not hoisted to the top of its scope.
// const is part of ES6 and is block scoped. It cannot be updated or re-declared. It must be initialized when declared.


var a = 10; // can be re-declared and updated
var a; // can be re-declared and updated
let a = 20; // can be updated but not re-declared
let a; // can be updated but not re-declared
const a = 30; // cannot be updated or re-declared








//------------------Declaration and Initialization------------------

var a; //declare krna
var a = 12; //declare and initialize krna mtlb a ko value dena

let a;
let a = 12; //declare and initialize krna mtlb a ko value dena

const a = 12; //declare and initialize krna mtlb a ko value dena permanent value hoga a ki value change nhi ho skti

// window mein add hota hai var (variable) but let and const are not added to window object. They are block scoped and cannot be accessed outside the block they are defined in.








//------------------Scope(global, block, functional)------------------

// global scope usee kehte hai jab variable ko hum kahi bhi access kr skte hai. (var, let, const) ye teeno global scope mein use ho skte hai.

// block scope usee kehte hai jab variable ko hum sirf usi block mein access kr skte hai jaha pe variable define hua hai. (let, const) ye dono block scope mein use ho skte hai. var block scope mein use nhi hota hai.{kewal is braces ke ander use kar skte hai}

// functional scope usee kehte hai jab variable ko hum sirf usi function mein access kr skte hai jaha pe variable define hua hai. (var, let, const) ye teeno functional scope mein use ho skte hai.









//------------------Reassignment and Redeclaration------------------

// Reassignment means changing the value of a variable after it has been declared. 
// Reassignment is allowed for var and let, but not for const.

// Redeclaration means declaring a variable with the same name in the same scope.
// redeclaration is allowed for var, but not for let and const.








// -------------------Temporal Dead Zone (TDZ)------------------

// Temporal Dead Zone (TDZ) is the time between the entering of a scope and the point where a variable is declared. 
// During this time, the variable cannot be accessed and will throw a ReferenceError if you try to access it. 
// TDZ applies to let and const, but not to var.

//  tdz - utna area jitne mein js ko pata to hai ki variables exist karta hai par wo apko value nhi de skta








// ------------------Hoisting impact per type------------------

// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase. 
// This means that you can use variables and functions before they are declared in the code. 
// var is hoisted and initialized with undefined, while let and const are hoisted but not initialized, leading to a ReferenceError if accessed before declaration.