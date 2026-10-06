// ************************DOM**************************
// DOM is a Document Object Model. it is a programming interface for web documents.
// it represents the page so that programs can change the document structure, style and content.
//  the DOM represents the document as nodes and objects. that way, programming languages can connect to the page.


// Dom manupulation best example in boy-coy website

// dom Manupulation ke liye jana hoga -
// html se elements ko select karna
// text badlm=b=na
// html bdlna
// css bdlna
// attributes bdlna


// dom manupulation ye hota hai jo ki hum html ke elements ko select karke unke text, html, css aur attributes ko change karte hai.






// ******************Selecting Elements in Dom*************************


// 1. getElementById() - ye method ek element ko select karta hai jiska id attribute diya gaya ho.

let abcd = document.getElementById("abcd");
console.log(abcd);





// 2. getElementsByClassName() - ye method ek element ko select karta hai jiska class attribute diya gaya ho.
//  isme class ek se jaada ho skta hai same class ke sare elements ko select karne ke liye ye method use hota hai.
//  ye method ek array return karta hai jisme sare elements hote hai jinka class attribute diya gaya ho.

let para = document.getElementsByClassName("para");
console.log(para);




// 3. querySelector() - ye method ek element ko select karta hai jiska css selector diya gaya ho.
//**************** */ mainly yehi use hota hai jada company me ************************

let discrip = document.querySelector(".discrip");
console.log(discrip);
// agr kabhi console.log se open na ho ye to console.dir use krna ho jyega





// 4. querySelectorAll() - ye method ek element ko select karta hai jiska css selector diya gaya ho.
let All = document.querySelectorAll(".All");
console.log(All);






// *******************Changing Text in Dom*************************



// 1. innerText property- ek element ke text ko change karta hai. ye property ek string return karti hai jisme element ke text hota hai.

let abcd1 = document.querySelector("#abcd1"); //# use for id 
abcd1.innerText = "Hey  siddharth ! How are you ?";

// 2. textContent - ek element ke text ko change karta hai. ye property ek string return karti hai jisme element ke text hota hai. ye property innerText se thoda alag hota hai. ye property element ke text ke sath sath uske child elements ke text ko bhi return karta hai.

let abcd2 = document.querySelector(".abcd2"); //. use for class
abcd2.textContent = "you are fine siddharth ?";

// 3. innerHTML - ek element ke html ko change karta hai. ye property ek string return karti hai jisme element ke html hota hai.

let abcd3 = document.querySelector(".abcd3");
abcd3.innerHTML = "THe third heading is changed by innerHTML property";







// use the innerHTML property to change the content of an element with the id "abcd1" to a new heading with a different text and style.

let abcd4 = document.querySelector("#abcd1");
abcd4.innerHTML = "<i>hey</i><b> siddharth</b>";
// abcd4.hidden = "true";
console.log(abcd4);














// ********************Attribute Manipulation in Dom*************************


// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
//  <a href="">Download now</a>



{ /* in this upper htmls tag the lang, charset, name and href etc are the attributes */ }
// attribute manupulated is used to change the value of an attribute of an element.
//  we can use the setAttribute() method to change the value of an attribute of an element.


// set Attribute() method is used to set the value of an attribute of an element. it takes two parameters, first is the name of the attribute and second is the value of the attribute.
let a = document.querySelector("a");
a.setAttribute("href", "https://www.google.com");



// getAttribute() method is used to get the value of an attribute of an element. it takes one parameter, which is the name of the attribute.
let b = document.querySelector("a");
let hrefValue = b.getAttribute("href");
console.log(hrefValue);


// removeAttribute() method is used to remove an attribute of an element. it takes one parameter, which is the name of the attribute.
let c = document.querySelector("a");
c.removeAttribute("href");





let ab = document.querySelector("img");
ab.setAttribute("src", "https://plus.unsplash.com/premium_photo-1764028979247-58d20965c7cf?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8");






// ****************************Dynamic DOM Manipulation**************************

// step1.  createElement() method is used to create an element. it takes one parameter, which is the name of the element.
// step2.  create element
// step3.  append/prepend jaha bhi element chahiye waha add kr skte hai
// step4.  remove element
// step5.  replace element


let newElement = document.createElement("h1");
newElement.textContent = "This is a new heading created by createElement() method";
document.querySelector("body").append(newElement); //append() method is used to add an element at the end of the parent element.
document.querySelector("body").prepend(newElement); //prepend() method is used to add an element at the beginning of the parent element.
document.querySelector("body").removeChild(newElement); //removeChild() method is used to remove an element from the parent element.



// use a example to add a new heading to the top of the page using the prepend() method.
// in the h4 tag

let h4 = document.createElement("h4");
h4.textContent = "Mai bahar se aya hu siddharth !";

document.querySelector("div").append(h4);









// *******************Style Updates in DOM*************************

// style property is used to change the style of an element. it takes one parameter, which is the name of the style property and second is the value of the style property.