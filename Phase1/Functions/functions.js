// what why how (this is a brief explanation of the concept)

// what function

//  function is a type of procedure or routine that performs a specific task. 
// It is a block of code that can be defined once and executed whenever needed.
//  Functions help in organizing code, making it reusable, and improving readability.





//***************************Function declaration, expressions, and fat arrow functions */




// 1st
function siddharth() { // function declaration (named function)
    console.log("Hello, I am Siddharth!");
}

siddharth(); // Calling the function to execute its code





// 2nd
let fnc = function() { //function expression (anonymous function assigned to a variable)
    console.log("This is an anonymous function assigned to a variable.");
};

fnc(); // Calling the anonymous function




// 3rd
let arrowFnc = () => { // fat arrow function (ES6 syntax)
    console.log("This is an arrow function.");
};

arrowFnc(); // Calling the arrow function








// ***************************Parameters and Arguments***************************


// 1st
function dance(v1) { // v1 is a parameter of the function   
    console.log(`${v1} is dancing!`);
};

dance("Alice"); // Calling the function with an argument        alice is an argument passed to the function
dance("Bob"); // Calling the function with an argument          Bob is an argument passed to the function
dance("Charlie"); // Calling the function with an argument




// 2nd
function subtract(a, b) { //a and b are parameters of the function
    console.log(`${a - b} is the result of subtraction.`);
};

subtract(10, 5); // Calling the function with arguments          10,5 is an argument passed to the function
subtract(20, 80); // Calling the function with arguments
subtract(15, 3); // Calling the function with arguments







// ***********************Default, Rest, and Spread Parameters***************************



//******************* Default Parameters **************************

//1st.
function add(v1 = 0, v2 = 0) { // v1 and v2 are parameters with default values is undefined, but maine use default value 0 di hai, hm kuch bhi number de skte hai 0 ke jagah 2,3,4,6,7,8,
    console.log(v1 + v2);
};

add();


//2nd.
function add(v1 = 1, v2 = 1) { // v1 and v2 are parameters with default values is undefined, but maine use default value 1 di hai, hm kuch bhi number de skte hai 1 ke jagah 2,3,4,6,7,8,
    console.log(v1 + v2);
};

add(2, 4); //hm isme jo number denge wo v1 aur v2 ke jagah aa jaayega, agar hm kuch bhi number nhi denge to default value 1 aa jaayegi, aur dono ka sum 2 aa jaayega





// **********************************  Rest Parameters **********************************************

//1st.   jab arguments kai sare ho to humein utne hi parameters define karne padte hai, isliye rest parameter ka use kiya jata hai, jo ki ek array ke form me arguments ko collect karta hai.

function sum(...num) { // ...numbers is a rest parameter that collects all arguments into an array
    console.log(num); // Output: [1, 2, 3, 4, 5]
};
sum(1, 2, 3, 4, 5); // Calling the function with multiple arguments



// agr ... function ke parameter space mein lage to wo rest operator hai and agr wo arrays and objects mein lage to wo spead operator hai, dono ka kaam alag hai, 
// rest operator ka kaam hai ki wo function ke andar jitne bhi arguments pass kiye gaye hai unko ek array ke form me collect kar leta hai, aur spread operator ka kaam hai ki wo array ya object ke elements ko alag alag kar deta hai,
//  jaise ki agar humare paas ek array hai [1,2,3] aur hum usko spread operator ke saath use karte hai to wo 1,2,3 alag alag ho jaayenge.



// 2nd 

function abcd(a, b, c, ...val) { // a,b,c are regular parameters, and ...val is a rest parameter that collects the remaining arguments into an array
    console.log(a, b, c, val);
}

abcd(1, 3, 5, 7, 9, 11, 13); // a=1, b=3, c=5, val=[7,9,11,13]  // Calling the function with multiple arguments






// **************************Returns and early return values***************************

// return statement is used to return a value from a function. It can also be used to exit a function early, before it reaches the end of its code block.


function ert() {
    return 12;
};
let vall = ert();
console.log(vall); // Output: 12  // Calling the function and storing the returned value in a variable