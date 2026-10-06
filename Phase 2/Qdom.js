//1. What is Dom? How does it represent the HTML structure of a webpage?
//  DOM (Document Object Model) is a programming interface for HTML and XML documents. 
// It represents the structure of a webpage as a tree of objects, where each object represents a part of the document.




//2.  How can we manipulate the DOM using JavaScript?
// We can manipulate the DOM using JavaScript by selecting elements, changing their content, attributes, and styles, and adding or removing elements from the document.



// 3. Name the types of nodes in the DOM tree?
// The types of nodes in the DOM tree include -
// element nodes, text nodes, attribute nodes, comment nodes, and document nodes.



// 4. What's the diference between an element node and a text node in the DOM?
// An element node represents an HTML element, while a text node represents the text content within an element. 
// Element nodes can have attributes and child nodes, while text nodes only contain text.



// 5. Inspect the following HTML in the browser and identify each node type in the DOM tree.
// <div id="container">
//   <h1>Hello World</h1>
//   <p>This is a paragraph.</p>
// </div>

// In the DOM tree, the <div> element is an element node, the <h1> and <p> elements are also element nodes, 
// and the text "Hello World" and "This is a paragraph." are text nodes. The id attribute of the <div> is an attribute node.



// 6. What is the difference between getElementById() and querySelector() methods in JavaScript for selecting elements in the DOM?

// The getElementById() method selects an element by its unique ID, while the querySelector() method selects the first element that matches a specified CSS selector. 

// getElementById() is faster for selecting elements by ID, while querySelector() is more versatile for selecting elements using various selectors.




// 7. What does getElementByClassName returns? is it an array?
// The getElementsByClassName() method returns a live HTMLCollection of elements with the specified class name. It is not an array, but it can be converted to an array if needed.





// 8. Use querySelectorAll to select all buttons with class ".buy-now"
// let buyNowButtons = document.querySelectorAll('.buy-now');
// console.log(buyNowButtons);



// 9. T1: Select the heading of a page by ID and change its text to "Welcome to Siddharth yadav"
// let heading = document.getElementById("heading");
// heading.textContent = 'Welcome to Siddharth yadav';




// 10. select all <li> elements and print their text using a loop
// let items = document.querySelectorAll('li');
// for (let i = 0; i < items.length; i++) {
//     console.log(items[i].textContent);
// }




// 11. What's the difference between innerHTML and textContent properties in JavaScript for manipulating the content of an element?
// The innerHTML property allows you to get or set the HTML content of an element, including any child elements and their attributes. 
// The textContent property, on the other hand, only gets or sets the text content of an element, ignoring any HTML tags or child elements. 
// In summary, innerHTML deals with HTML structure, while textContent deals with plain text.




// 12. When should you use textContent instead of innerText?

// You should use textContent when you want to retrieve or set the text content of an element without any formatting or styling.
// textcontent fast  than the innertext slow
// innerText is a property that is specific to the browser and may not be available in all environments. textContent is a standard property that is available in all modern browsers.




// 13. Select a paragraph and replace its content with - <b>Updated</b> by JavaScript.

// let paragraph = document.querySelector('p');
// paragraph.innerHTML = '<b>Updated</b> by JavaScript.';




// 14. How do you get the src of an image using JavaScript?
// You can get the src of an image using JavaScript by selecting the image element and accessing its src property. 
// For example:
// let image = document.querySelector('img');
// console.log(image.src);




// 15. What does setAttribute() method do in JavaScript for manipulating the attributes of an element in the DOM?
// The setAttribute() method in JavaScript is used to set the value of an attribute on an element in the DOM. 
// It takes two parameters: the name of the attribute and the value to be set. 
// If the attribute already exists, its value will be updated; if it does not exist, a new attribute will be created with the specified name and value. 
// For example:
// let link = document.querySelector('a');
// link.setAttribute('href', 'https://www.example.com');






// 16. Add a tittle attribute to a div dynamically.
// let div = document.querySelector('div');
// div.setAttribute('title', "Hye Siddharth");
// console.log(div);




// 17. Remove the disable attribute from a button using JavaScript.
// let button = document.querySelector('button');
// button.removeAttribute('disabled');




// 18. What does createElement() do? What's returned?
// The createElement() method in JavaScript is used to create a new HTML element dynamically.
// It takes a single parameter, which is the tag name of the element to be created. 
// The method returns a reference to the newly created element, which can then be manipulated and added to the DOM using methods like appendChild() or insertBefore().





// 19. What's the difference between append() and prepend() methods in JavaScript for adding elements to the DOM?
// The append() method adds an element as the last child of a parent element, while the prepend() method adds an element as the first child of a parent element. 
// In other words, append() adds content to the end of the parent, and prepend() adds content to the beginning of the parent. 
// Both methods can take multiple arguments and can be used to add text nodes or elements to the DOM.



// 20. Can you remove an element using removeChild?
// Yes, you can remove an element using the removeChild() method in JavaScript.
// The removeChild() method is called on the parent element and takes the child element to be removed as an argument. 
// For example:
// let parent = document.querySelector('div');
// let child = document.querySelector('p');
// parent.removeChild(child);



// 21. Create a new list items <li> New Task </li> and it to the end of a <ul>
// let ul = document.querySelector('ul');
// let li = document.createElement('li');
// li.textContent = 'New Task'
// ul.appendChild(li);



// 22. Create a new image element with a placeholder source and add it at the top of a div.
// let div = document.querySelector('div');
// let img = document.createElement('img');
// img.setAttribute('src', 'https://via.placeholder.com/150');
// div.prepend(img);



// 23. Select the first item in a list and delete it from the dom
// let ul = document.querySelector('ul');
// let firstItem = ul.querySelector('li');
// ul.removeChild(firstItem);



// 24. How to change background color of an element using JavaScript?
// You can change the background color of an element using JavaScript by selecting the element and modifying its style property. 
// For example:
// let element = document.querySelector('div');
// element.style.backgroundColor = 'blue';



// 25. What the difference betwween .classList.add() and .classList.toggle()
// The .classList.add() method is used to add a specified class to an element's list of classes. If the class already exists, it will not be added again.
// The .classList.toggle() method is used to toggle a specified class on an element's list of classes. 
// If the class exists, it will be removed; if it does not exist, it will be added. 
// In other words, .classList.add() only adds a class, while .classList.toggle() can add or remove a class depending on its current state.




// 26. Add a highlight class to every even item in a list.
// let items = document.querySelectorAll('li');
// for (let i = 0; i < items.length; i++) {
//     if (i % 2 === 0) {
//         items[i].classList.add('highlight');
//     }
// }