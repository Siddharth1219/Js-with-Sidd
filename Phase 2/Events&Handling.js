// browser mein page par koi bhi harkat kro event raise ho jyega.
// kuch bhi  screen par ho aur apko reaction dena ho to us waqt apko event handle karna ana chahhiye
// event mtlb kuch action hua
// event listner ka mtlb koi action ka reqation dena


// syntax for adding event listener---->>>

// Element.addEventListener("event name", function() {
//     // code to be executed when the event occurs
// });


// 2. click event: This event is triggered when the user clicks on an element,
//  such as a button, link, or any other clickable element. You can use the click
//  event to perform actions like submitting a form, opening a modal, or navigating to another page.


let h1 = document.querySelector("h1"); //use h1 when niche wala coomment laga ho 
h1.addEventListener("click", function() {
    h1.style.color = "red";

})





// let p = document.querySelector("p");
// p.addEventListener("click", function() {
//     p.style.color = "green";

// })







// for addding and removing event listener we can use function

let p = document.querySelector("p");

function dblclick() {
    p.style.color = "blue";

}
// for adding event listener we can use addEventListener method
p.addEventListener("dblclick", dblclick);

// for removing the event listener we can use removeEventListener method
p.removeEventListener("dblclick", dblclick);









// **********************Commmmon Events in JavaScript**********************




// 1. Input Events: These events are triggered when the user interacts with input elements, such as text fields, checkboxes, radio buttons, etc. Common input events include:

//let inputField = document.querySelector("input");
// inputField.addEventListener("input", function(data) {
//     console.log("Input event triggered. Current value: ",data);
// });


let inputField = document.querySelector("input");
inputField.addEventListener("input", function(details) {
    if (details.data !== null) { //this used to check if the input is not empty or null
        console.log(details.data); //this will print the current value of the input field
    }
    // console.log("Input event triggered. Current value: ", details.data);
});









// 2. click event already done in upper section








// 3. change event: This event is triggered when the value of an input element changes and loses focus.
//  It is commonly used for form validation or updating data based on user input.


let selectElement = document.querySelector("select");
let device = document.querySelector("#device");


selectElement.addEventListener("change", function(details) {
    device.textContent = `You have selected ${details.target.value}`;

    //this will print the selected value of the select element

});






// approach 1st for change event (isme maine apne screen pe keyboard ke key press karne par uska name show karne ka code likha hai and space dabane se space likhega control dbane se ctrl likhega, etc)

let h11 = document.querySelector("h1"); //use h1  h11 ke jagah par

window.addEventListener("keyup", function(dets) {
    if (dets.key === " ") {
        h1.textContent = "SPACE";
    } else {
        h1.textContent = dets.key;
    }
    // console.log(dets);
});






// approach 2nd for buttun click event

let btn = document.querySelector("#btn");
let fileinput = document.querySelector("#fileinput");

btn.addEventListener("click", function() {
    fileinput.click(); //this will trigger the click event on the file input element
});

fileinput.addEventListener("change", function(details) {
    const file = details.target.files[0]; //this will get the first selected file
    if (file) {
        btn.textContent = file.name; //this will print the name of the selected file
    }
});








// 4. Submit event: This event is triggered when a form is submitted.
// It is commonly used to validate form data before sending it to the server or to perform custom actions upon form submission.