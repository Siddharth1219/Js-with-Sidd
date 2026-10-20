//--------------var, let, const  -- line-by-line comparision------------------

// var is part of ES5 and is function scoped. It can be re-declared and updated. It is hoisted to the top of its scope and initialized with undefined.
// let is part of ES6 and is block scoped. It can be updated but not re-declared. It is not hoisted to the top of its scope.
// const is part of ES6 and is block scoped. It cannot be updated or re-declared. It must be initialized when declared.


// var a = 10; // can be re-declared and updated
// var a; // can be re-declared and updated
// let a = 20; // can be updated but not re-declared
// let a; // can be updated but not re-declared
// const a = 30; // cannot be updated or re-declared








//------------------Declaration and Initialization------------------

// var a; //declare krna
// var a = 12; //declare and initialize krna mtlb a ko value dena

// let a;
// let a = 12; //declare and initialize krna mtlb a ko value dena

// const a = 12; //declare and initialize krna mtlb a ko value dena permanent value hoga a ki value change nhi ho skti

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















//------------------------------DATA TYPES------------------

//there are mainly two types of data types in javascript are - primitive and non-primitive data types.


// Primitive --> data types are immutable and include Number, String, Boolean, Null, Undefined, Symbol, and BigInt.
// aisi saari values jinko copy karne par tumhe ek real copymil jaye


//  reference --> data types are mutable and include Objects, Arrays, Functions, and Dates.
// inko copy karne par tumhe ek reference milega jo original value ko point karega.




// arrys - [1, 2, 3, 4, 5] - reference data type
// objects - {name: "John", age: 30} - reference data type
// functions - function() { return "Hello"; } - reference data type




// 1.  Strings can be defined using single quotes, double quotes, or backticks (template literals).
// ' '  -- single quotes:
// " "  -- double quotes:
// ` `  -- backticks (template literals):


// 2.  Numbers can be integers or floating-point numbers.
// 12 -- integer(numbers)
// 12.34 -- floating-point number(numbers)


// 3. Booleans can be either true or false.
// true -- boolean
// false -- boolean


// 4. Null represents the intentional absence of any object value. It is a primitive data type.
// null -- null


// 5. Undefined represents a variable that has been declared but has not yet been assigned a value. It is a primitive data type.
// undefined -- undefined


// 6. Symbols are unique and immutable data types that can be used as identifiers for object properties. They are a primitive data type.
//  immutable means change nhi hone wala


// 7. BigInt is a numeric data type that can represent integers with arbitrary precision. It is a primitive data type.
//  hm koi bhi large number le skte hai aur uske last me n laga skte hai to indicate that it is a BigInt. For example, 1234567890123456789012345678901234567890n is a BigInt.





// 1. Arrays are ordered collections of values, which can be of any data type. They are a reference data type.

// 2. Objects are collections of key-value pairs, where keys are strings (or Symbols) and values can be of any data type. They are a reference data type.

// 3. Functions are blocks of code that can be defined and invoked. They are a reference data type.

// 4. Dates represent a single moment in time in a platform-independent format. They are a reference data type.





// Dynamic typing -->> means that the type of a variable can change at runtime.
//  In JavaScript, you can assign a value of one data type to a variable and later assign a value of a different data type to the same variable.
//  This flexibility allows for more dynamic and adaptable code, but it also requires careful handling to avoid unexpected behavior.
// js me static typing nhi hai dynamic typing hai jiska mtlb app data ko change kar skte hangingPunctuation: 

// example- let a=12;
// a="hello";
// a=true;
// a= {name: "John", age: 30};
// a= [1, 2, 3, 4, 5];
// a= function() { return "Hello"; };



// typeof quirks are the unexpected behaviors or inconsistencies that can arise when using the typeof operator in JavaScript.
// in this case, the typeof operator returns "object" for null, which can be misleading since null is not actually an object.



// Type coercion is the automatic or implicit conversion of values from one data type to another in JavaScript.
//  This can happen in various situations, such as when using operators or comparing values of different types.
//  Type coercion can lead to unexpected results if not properly understood and handled, so it's important to be aware of how it works in JavaScript.
//  "5" + 1 // "51" (string concatenation)
//  "5" - 1 // 4 (number subtraction)



// truthy vs falsy values -->> In JavaScript, truthy and falsy values are used to determine the boolean value of a variable or expression in a boolean context.
//  A truthy value is a value that evaluates to true when used in a boolean context, while a falsy value is a value that evaluates to false.
//  Falsy values include false, 0, -0, 0n, "", null, undefined, and NaN. All other values are considered truthy.
//  For example, the following values are falsy: false, 0, -0, 0n, "", null, undefined, and NaN. All other values are considered truthy.



// undefined vs null -->> In JavaScript, undefined and null are both used to represent the absence of a value, but they have different meanings and use cases.
//  undefined is a primitive value that indicates that a variable has been declared but has not yet been assigned a value. It is the default value of uninitialized variables and function parameters.
//  null, on the other hand, is an object that represents the intentional absence of any object value. It is often used to indicate that a variable should have no value or that an object property does not exist.
//  In summary, undefined means "no value assigned" while null means "no value exists".








// ----------------------------------OPERATORS-----------------------------------




//1.  Arithmatic operators -->> are used to perform mathematical operations on numbers. They include addition (+), subtraction (-), multiplication (*), division (/), modulus (%), increment (++), and decrement (--).

// + -->> addition operator is used to add two numbers or concatenate two strings.
// - -->> subtraction operator is used to subtract one number from another.
// * -->> multiplication operator is used to multiply two numbers.
// / -->> division operator is used to divide one number by another.
// % -->> modulus operator is used to find the remainder of a division operation.
// ++ -->> increment operator is used to increase the value of a variable by 1.
// -- -->> decrement operator is used to decrease the value of a variable by 1.




// 2. Assignment operators -->> are used to assign values to variables. They include the basic assignment operator (=) and compound assignment operators (+=, -=, *=, /=, %=).

// = -->> basic assignment operator is used to assign a value to a variable.
// += -->> addition assignment operator is used to add a value to a variable and assign the result back to the variable.
// -= -->> subtraction assignment operator is used to subtract a value from a variable and assign the result back to the variable.
// *= -->> multiplication assignment operator is used to multiply a variable by a value and assign the result back to the variable.
// /= -->> division assignment operator is used to divide a variable by a value and assign the result back to the variable.
// %= -->> modulus assignment operator is used to find the remainder of a division operation and assign it back to the variable.





// 3. Comparison operators -->> are used to compare two values and return a boolean result (true or false). They include equality (==, ===), inequality (!=, !==), greater than (>), less than (<), greater than or equal to (>=), and less than or equal to (<=).

// == -->> equality operator is used to compare two values for equality, ignoring their data types.
// === -->> strict equality operator is used to compare two values for equality, considering their data types.
// != -->> inequality operator is used to compare two values for inequality, ignoring their data types.
// !== -->> strict inequality operator is used to compare two values for inequality, considering their data types.
// > -->> greater than operator is used to check if the left value is greater than the right value.
// < -->> less than operator is used to check if the left value is less than the right value.
// >= -->> greater than or equal to operator is used to check if the left value is greater than or equal to the right value.
// <= -->> less than or equal to operator is used to check if the left value is less than or equal to the right value. 



// 4. Logical operators -->> are used to combine or invert boolean values. They include AND (&&), OR (||), and NOT (!).

// && -->> logical AND operator is used to check if both operands are true. It returns true if both operands are true, otherwise it returns false.
// || -->> logical OR operator is used to check if at least one of the operands is true. It returns true if at least one operand is true, otherwise it returns false.
// ! -->> logical NOT operator is used to invert the boolean value of an operand. It returns true if the operand is false, and false if the operand is true.



// 5. Ternary operator -->> is a shorthand way of writing an if-else statement. It takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false. The syntax is: condition ? valueIfTrue : valueIfFalse.

// example - let age = 18;
// let canVote = (age >= 18) ? "Yes" : "No"; // canVote will be "Yes" because age is greater than or equal to 18.



// 6. Type operators -->> are used to check the data type of a value. They include typeof and instanceof.

// typeof -->> operator is used to check the data type of a value. It returns a string indicating the type of the operand.
// example - let num = 42;
// console.log(typeof num); // "number"

// instanceof -->> operator is used to check if an object is an instance of a particular class or constructor function. It returns true if the object is an instance of the specified class, otherwise it returns false.
// example - let date = new Date();
// console.log(date instanceof Date); // true




// use !! for true or false nature pta karne ke liye use krte hangingPunctuation: