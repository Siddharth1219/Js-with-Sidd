"use strict";

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
  var _blockScopedVariable = "I am only accessible within this block";
  console.log(_blockScopedVariable); // This will work
}

console.log(blockScopedVariable); // This will throw an error because the variable is not accessible outside the block  
// ******************EXECUTION CONTEXT*********************
// Execution context is the environment in which JavaScript code is executed. 
// It consists of two phases: memory creation phase and execution phase.
// js sabse pehle jaise hi apka function dekkhta hai sabse pahle js bananata hai execution context, ye ek process hai.
//1. Memory Creation Phase: In this phase, JavaScript allocates memory for variables and functions.
// During this phase, the JavaScript engine creates a memory space for each variable and function in the code.
//2. Execution Phase: In this phase, JavaScript executes the code line by line and assigns values to the variables.
// During this phase, the JavaScript engine executes the code and assigns values to the variables that were created in the memory creation phase.
// ******************LEXICAL SCOPE*********************
// Lexical scope means that the scope of a variable is determined by its position in the source code. 
// In other words, a variable defined in a certain scope can only be accessed from that scope and any nested scopes.
// app kaha  pe phsically available ho ye depend krta hai ki app kya acces kar skte h 
// Example of lexical scope:

function abcd() {
  var a = 12;

  function defg() {
    console.log(a); // This will work because defg is nested inside abcd and has access to its variables
  }

  defg();
}

abcd(); //In js we always follow lexical scope, we never follow dynamic scope. In dynamic scope, the scope of a variable is determined by the call stack at runtime, rather than its position in the source code.
// *******************DYNAMIC SCOPE*********************
// Dynamic scope means that the scope of a variable is determined by the call stack at runtime, rather than its position in the source code. 
// In other words, a variable defined in a certain scope can be accessed from any function that is called after it, regardless of where it is defined in the source code.
// Example of dynamic scope:

var x = 10;

function xyz() {
  console.log(x); // This will work because x is defined in the global scope and is accessible from any function
}

function pqr() {
  var x = 20;
  xyz(); // This will still log 10 because xyz is defined in the global scope and has access to the global variable x
}

pqr(); // *******************CLOSURE*********************
// Closure is a feature in JavaScript where an inner function has access to the variables and parameters of its outer function, 
// even after the outer function has returned. In other words, a closure allows a function to "remember" the environment in which it was created.
// Example of closure:

function ijkl() {
  var outer = 34;
  return function () {
    console.log(outer); // This inner function has access to the variable outer, even after ijkl has returned
  };
} // how variables are preserved in closure


var myClosure = ijkl();
myClosure(); // ye sach hai jab function ke khtm hone pe apka function and uske variables khtm hojate hau, par jab bhi  
// closure bnta hai to apka function aur uske variables ka ek backlink bnaya jata hai aur uska nam hota h [[ENVIRONMENT]] ye backlink closure ke andar hota hai, aur closure ke andar function ke andar variables hote hai, aur closure ke andar [[ENVIRONMENT]] hota hai, aur [[ENVIRONMENT]] ke andar outer function ke variables hote hai, aur ye backlink closure ke andar hota hai, aur closure ke andar function ke andar variables hote hai, aur closure ke andar [[ENVIRONMENT]] hota hai, aur [[ENVIRONMENT]] ke andar outer function ke variables hote hai, aur ye backlink closure ke andar hota hai, aur closure ke andar function ke andar variables hote hai, aur closure ke andar [[ENVIRONMENT]] hota hai, aur [[ENVIRONMENT]] ke andar outer function ke variables hote hai, aur ye backlink closure ke andar hota hai, aur closure ke andar function ke andar variables hote hai, aur closure ke andar [[ENVIRONMENT]] hota hai, aur [[ENVIRONMENT]] ke andar outer function_ke_variables_hote_hai, aur ye backlink closure_ke_ander_hota_hai, aur closure_ke_ander_function_ke_ander_variables_hote_hai, aur closure_ke_ander_[[ENVIRONMENT]]_hotा_hai, aur [[ENVIRONMENT]]_ke_ander_outer_function_ke_variables_hote_hai, aur ye backlink_closure_ke_ander_hota_hai, aur_closure_ke_ander_function_ke_ander_variables_hote_hai, Aur_closure_ke_ander_[[ENVIRONMENT]]_hotा_hai, Aur [[ENVIRONMENT]]_ke_ander_outer_function_ke_variables_hote_hai, Aur ye backlink_closure_ke_ander_hota_hai, Aur_closure_ke_ander_function_ke_ander_variables_hote_hai, Aur_closure_ke_ander_[[ENVIRONMENT]]_hotा_hai, Aur [[ENVIRONMENT]]_ke_ander_outer_function_ke_variables_hote_hai, Aur ye backlink_closure_ke_ander_hota_hai, Aur_closure_ke_ander_function_ke_ander_variables_hote_hai, Aur_closure_ke_ander_[[ENVIRONMENT]]_hotा_hai, Aur [[ENVIRONMENT]]_ke_ander_outer_function_ke_variables_hote_hai, Aur ye backlink_closure_ke_ander_hota_hai,
// *******************USES CASES OF CLOSURE*********************
// 1. Private Counters: Closures can be used to create private counters that can only be accessed and modified by specific functions.
// 2. Encapsulation: Closures can be used to encapsulate data and functionality, allowing for better organization and modularity in code.
// 3. Callback Functions: Closures are often used in callback functions, allowing for the preservation of state and access to variables from the outer function.
// 4. Event Handlers: Closures can be used in event handlers to maintain access to variables and state even after the event has occurred.
// *********Click Limiter Example programs(Encapulation use it)**********

function clickLimiter() {
  var click = 0;
  return function () {
    if (click < 5) {
      click++;
      console.log("Button clicked ".concat(click, " times"));
    } else {
      console.log("Click limit reached");
    }
  };
}

var fnc = clickLimiter();
fnc();
fnc();
fnc();
fnc();
fnc();
fnc(); // *********************Toaster(notification) Example programs(using closure)*********************
// ----------------this is only use for sing notification program-------

function createToasters(config) {
  return function (notification) {
    var div = document.createElement("div");
    div.className = "fixed bg-grey-800 text-white px-6 py-3 rounded shadow-lg pointer-events-none ".concat(config.positionX === "right" ? "right-10" : "left-10", " ").concat(config.positionY === "top" ? "top-10" : "bottom-10", " ").concat(config.theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black");
    div.textContent = notification;
    document.body.appendChild(div);
    setTimeout(function () {
      div.remove();
    }, config.duration * 1000);
  };
}

var toasters = createToasters({
  positionX: "right",
  positionY: "top",
  duration: 3,
  theme: "dark"
});
toasters("This is a toast notification!"); // ----------------this is only use for multiple notification program-------

function createToaster(config) {
  var container = document.createElement("div");
  container.className = "fixed z-50 flex w-[calc(100%-5rem)] max-w-sm flex-col gap-3 ".concat(config.positionX === "right" ? "right-10" : "left-10", " ").concat(config.positionY === "top" ? "top-10" : "bottom-10");
  container.setAttribute("aria-live", "polite");
  container.setAttribute("aria-atomic", "false");
  document.body.appendChild(container);
  return function (notification) {
    var div = document.createElement("div");
    div.className = "translate-x-6 rounded-xl px-6 py-3 shadow-lg opacity-0 transition-all duration-300 pointer-events-none ".concat(config.theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black");
    div.textContent = notification;
    container.appendChild(div);
    requestAnimationFrame(function () {
      div.classList.remove("translate-x-6", "opacity-0");
    });
    setTimeout(function () {
      div.classList.add("translate-x-6", "opacity-0");
      setTimeout(function () {
        return div.remove();
      }, 300);
    }, config.duration * 1000);
  };
}

var toaster = createToaster({
  positionX: "right",
  positionY: "top",
  duration: 3,
  theme: "dark"
});
toaster("This is a toast notification!");
setTimeout(function () {
  toaster("This is another toast notification!");
}, 1000);