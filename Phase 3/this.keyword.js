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