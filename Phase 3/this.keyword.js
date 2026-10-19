// this in global scope, function, method, event handler, class 
// arrow functions and lexical this 
// manual binding: bind, call, apply



//  this  is a special keyword in JavaScript that refers to the context in which a function is called. Its value can change depending on how and where the function is invoked.
//  this can refer to different objects depending on the context, such as the global object, an object instance, or a specific element in the DOM. Understanding how this works is crucial for writing effective JavaScript code.




// ------------------this in global scope-----------------
// In the global scope, the value of this refers to the global object. In a browser environment, this is typically the window object. However, in strict mode, this will be undefined.

console.log(this); // In a browser, this will log the window object (or undefined in strict mode)






// ------------------this in function-----------------
// In a regular function, the value of this depends on how the function is called. If the function is called as a method of an object, this refers to that object. If the function is called in the global context, this refers to the global object (or undefined in strict mode).

function abcd() {
    console.log(this);
}

abcd(); // In non-strict mode, this will log the global object (window in browsers). In strict mode, it will log undefined.






// ------------------this in method-----------------
// When a function is called as a method of an object, this refers to the object that the method is called on.

const obj = {
    name: 'John',
    greet: function() {
        console.log(this.name);
    }
};

obj.greet(); // Logs 'John' because this refers to obj, so it will log the obj object.







// ------------------this in event handler-----------------
// In an event handler, this refers to the element that received the event.

const button = document.querySelector('button');

button.addEventListener('click', function() {
    console.log(this); // Logs the button element
});





// ------------------this in class-----------------
// In a class, this refers to the instance of the class.

class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const person1 = new Person('Alice');
person1.greet(); // Logs 'Hello, my name is Alice' because this refers to person1 instance. 









// global - window
// function - window
// method with es5 fnc - object
// method with es6 arrow fnc - window
//  es5 function inside es5 method - window
// arrow function inside es5 method = object
// event handler - element
// class - blank object





// arrow functions and lexical this
// Arrow functions do not have their own this context. Instead, they inherit this from the surrounding lexical scope. This means that the value of this inside an arrow function is determined by where the function is defined, not how it is called.

const obj2 = {
    name: 'Jane',
    greet: () => {
        console.log(this.name);
    }
};

obj2.greet(); // Logs undefined because this refers to the global object (window in browsers), not obj2.    




// lexical is the this of the surrounding scope, which is obj2 in this case. However, since greet is an arrow function, it does not have its own this and instead inherits it from the surrounding scope, which is the global object (window in browsers).
//  Therefore, this.name is undefined because there is no name property on the global object.

// lexical this example
const obj3 = {
    name: 'Mike',
    greet: function() {
        const innerFunction = () => {
            console.log(this.name);
        };
        innerFunction();
    }
};

obj3.greet(); // Logs 'Mike' because the arrow function inherits this from the greet method, which refers to obj3.



// ------------Manual binding: bind, call, apply-----------------
// JavaScript provides methods like bind, call, and apply to manually set the value of this for a function. These methods allow you to control the context in which a function is executed.

let obj = {
    name:"Siddharth",
    age:22,

};

function abcd (a,b,c,d){
    console.log(this,a,b,c,d);
}


abcd.call(obj,1,2,3,4); // Logs obj and the arguments 1, 2, 3, 4. The call method invokes the function with a specified this value and arguments provided individually.

abcd.apply(obj,[1,2,3,4]); // Logs obj and the arguments 1, 2, 3, 4. The apply method is similar to call but takes an array of arguments instead of individual arguments.

let boundFunction = abcd.bind(obj);
boundFunction(1,2,3,4); // Logs obj and the arguments 1, 2, 3, 4. The bind method creates a new function that, when called, has its this keyword set to the provided value (obj in this case).