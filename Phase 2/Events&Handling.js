// // browser mein page par koi bhi harkat kro event raise ho jyega.
// // kuch bhi  screen par ho aur apko reaction dena ho to us waqt apko event handle karna ana chahhiye
// // event mtlb kuch action hua
// // event listner ka mtlb koi action ka reqation dena


// // syntax for adding event listener---->>>

// // Element.addEventListener("event name", function() {
// //     // code to be executed when the event occurs
// // });


// // 2. click event: This event is triggered when the user clicks on an element,
// //  such as a button, link, or any other clickable element. You can use the click
// //  event to perform actions like submitting a form, opening a modal, or navigating to another page.


// let h1 = document.querySelector("h1"); //use h1 when niche wala coomment laga ho 
// h1.addEventListener("click", function() {
//     h1.style.color = "red";

// })





// // let p = document.querySelector("p");
// // p.addEventListener("click", function() {
// //     p.style.color = "green";

// // })







// // for addding and removing event listener we can use function

// let p = document.querySelector("p");

// function dblclick() {
//     p.style.color = "blue";

// }
// // for adding event listener we can use addEventListener method
// p.addEventListener("dblclick", dblclick);

// // for removing the event listener we can use removeEventListener method
// p.removeEventListener("dblclick", dblclick);









// // **********************Commmmon Events in JavaScript**********************




// // 1. Input Events: These events are triggered when the user interacts with input elements, such as text fields, checkboxes, radio buttons, etc. Common input events include:

// //let inputField = document.querySelector("input");
// // inputField.addEventListener("input", function(data) {
// //     console.log("Input event triggered. Current value: ",data);
// // });


// let inputField = document.querySelector("input");
// inputField.addEventListener("input", function(details) {
//     if (details.data !== null) { //this used to check if the input is not empty or null
//         console.log(details.data); //this will print the current value of the input field
//     }
//     // console.log("Input event triggered. Current value: ", details.data);
// });









// // 2. click event already done in upper section








// // 3. change event: This event is triggered when the value of an input element changes and loses focus.
// //  It is commonly used for form validation or updating data based on user input.


// let selectElement = document.querySelector("select");
// let device = document.querySelector("#device");


// selectElement.addEventListener("change", function(details) {
//     device.textContent = `You have selected ${details.target.value}`;

//     //this will print the selected value of the select element

// });






// // approach 1st for change event (isme maine apne screen pe keyboard ke key press karne par uska name show karne ka code likha hai and space dabane se space likhega control dbane se ctrl likhega, etc)

// let h11 = document.querySelector("h1"); //use h1  h11 ke jagah par

// window.addEventListener("keyup", function(dets) {
//     if (dets.key === " ") {
//         h1.textContent = "SPACE";
//     } else {
//         h1.textContent = dets.key;
//     }
//     // console.log(dets);
// });






// // approach 2nd for buttun click event

// let btn = document.querySelector("#btn");
// let fileinput = document.querySelector("#fileinput");

// btn.addEventListener("click", function() {
//     fileinput.click(); //this will trigger the click event on the file input element
// });

// fileinput.addEventListener("change", function(details) {
//     const file = details.target.files[0]; //this will get the first selected file
//     if (file) {
//         btn.textContent = file.name; //this will print the name of the selected file
//     }
// });






// submit ko use krke form ko re submit karne se rokna hai jiska code niche hai.

// 4. Submit event: This event is triggered when a form is submitted.
// It is commonly used to validate form data before sending it to the server or to perform custom actions upon form submission.


// let form = document.querySelector("form");
// let inputs = document.querySelectorAll("input");

// form.addEventListener("submit", function(details) {
//     details.preventDefault(); //this will prevent the default form submission behavior
//     console.log(inputs[0].value,
//         inputs[1].value,
//         inputs[2].value,
//         inputs[3].value
//     ); //this will print the value of the first input field
// });



// //  for making a card

// let form = document.querySelector("form");
// let inputs = document.querySelectorAll("input");
// let main = document.querySelector("#main");

// form.addEventListener("submit", function(details) {
//     details.preventDefault();

//     let card = document.createElement("div");
//     card.classList.add("card");

//     let profile = document.createElement("div");
//     profile.classList.add("profile");

//     let img = document.createElement("img");
//     img.setAttribute("src", inputs[0].value);

//     let h3 = document.createElement("h3");
//     h3.textContent = inputs[1].value;

//     let h5 = document.createElement("h5");
//     h5.textContent = inputs[2].value;

//     let p = document.createElement("p");
//     p.textContent = inputs[3].value;

//     profile.appendChild(img);
//     card.appendChild(profile);

//     card.appendChild(h3);
//     card.appendChild(h5);
//     card.appendChild(p);

//     main.appendChild(card);

//     inputs.forEach(function(input) {
//         if (input.type !== "submit") {
//             input.value = ""; //this will clear the value of the input field
//         }

//     });
// });





// // **************************Mouse Over, mouseout and Mouse Move****************************



// // Mouse move event: This event is triggered when the user moves the mouse pointer over an element. It can be used to create interactive effects, such as highlighting elements, displaying tooltips, or tracking mouse movements.
// let abc = document.querySelector("#abc");
// abc.addEventListener("mouseover", function() {
//     abc.style.backgroundColor = "red";
// });



// // Mouse out event: This event is triggered when the user moves the mouse pointer out of an element. It can be used to revert changes made during a mouseover event or to perform cleanup actions.
// abc.addEventListener("mouseout", function() {
//     abc.style.backgroundColor = "#222";
// });



// // Mouse move event: This event is triggered when the user moves the mouse pointer over an element. It can be used to create interactive effects, such as highlighting elements, displaying tooltips, or tracking mouse movements.
// window.addEventListener("mousemove", function(details) {
//     console.log(`Mouse X: ${details.clientX}, Mouse Y: ${details.clientY}`); //this will print the current mouse position in the console

// });




// //  using mousemove event to change the background color of the page based on the mouse position
// let abc = document.querySelector("#abc");
// window.addEventListener("mousemove", function(details) {
//     abc.style.top = details.clientY + "px"; //this will set the top position of the div to the current mouse Y position
//     abc.style.left = details.clientX + "px"; //this will set the left position of the div to the current mouse X position
// });





// // *******************key up*******************

// // it is a keyboard event that is triggered when a key is released after being pressed.
// //  It can be used to capture user input, perform actions based on specific key combinations, or implement keyboard shortcuts.









// ***************************Event Objects***********************

// target: The target property of the event object refers to the element that triggered the event. It allows you to access and manipulate the specific element that the event occurred on.

// preventdefault(): The preventDefault() method is used to prevent the default behavior of an event. For example, in a form submission event, calling preventDefault() will prevent the form from being submitted and allow you to handle the submission manually.

// type : The type property of the event object indicates the type of event that occurred, such as "click", "keydown", "submit", etc. It allows you to identify the specific event that triggered the event handler.








// ********************************Event Bubbling and Capturing***********************


// event bubling: Event bubbling is a concept in JavaScript where an event starts from the innermost element (the target) and propagates up through its parent elements in the DOM hierarchy. This means that when an event occurs on a child element, it will also trigger the same event on its parent elements unless explicitly stopped. Event bubbling allows for event delegation, where you can attach a single event listener to a parent element and handle events for its child elements.
// jispe event ayega agr uspe listner nhi hua to humara event uspe bhi trigger hoga


// document.querySelector("#nav").addEventListener("click", function() {
//     alert("nav clicked");
// });



// let ul = document.querySelector("ul");
// ul.addEventListener("click", function(details) {
//     details.target.style.textDecoration = "line-through"; //this will add a line-through style to the clicked list item
//     console.log(details.target); //this will print the clicked list item in the console
// });




// let ul = document.querySelector("ul");
// ul.addEventListener("click", function(details) {
//     details.target.classList.toggle("lt"); //this will toggle the line-through style on the clicked list item

// });





// ***************************Capturing Phase***********************

// event capturing: Event capturing is the opposite of event bubbling. In event capturing, the event starts from the outermost element and propagates down to the target element. This means that when an event occurs on a child element, it will first trigger the event on its parent elements before reaching the target element. Event capturing allows for more control over event handling and can be useful in certain scenarios where you want to intercept events before they reach their intended target.





// event bublling me event ander se bahar ki trf jata hai
// event capturing me event bahar se ander ki trf jata hai


// jab bhi app click krte ho ya koii bhi event raise krte ho to
// apka jo event flow do phases mein chalta hai:

// 1. Phase -- event top level element se neeche ki trf aayega
// 2. Phase -- event bottom level element se upar ki trf aayega

// aur pehle phase 1 hoti hai.

// capturing phase ek bar phirse padh lena 




// event delegation: Event delegation is a technique in JavaScript where you attach a single event listener to a parent element instead of attaching individual event listeners to each child element.
//  This allows you to handle events for multiple child elements efficiently, especially when the child elements are dynamically added or removed from the DOM. Event delegation takes advantage of event bubbling, 
// where events propagate up the DOM tree, allowing the parent element to capture and handle events triggered by its child elements.