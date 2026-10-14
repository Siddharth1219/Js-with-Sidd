// *****************Reading values from input, textarea, select******************************


let nm = document.querySelector("#name");
let form = document.querySelector("form");
let error = document.querySelector("small");

form.addEventListener("submit", function(details) {
    details.preventDefault(); //prevent default use to stop of submit the form early


    if (nm.value.length <= 2) {

        document.querySelector("#hide").style.display = "initial";
    } else {
        document.querySelector("#hide").style.display = "none";
    }
});




// *************JS-based validation***************
//it is a process of checking the user input in the form before it is submitted to the server.
//  It helps to ensure that the data entered by the user is valid and meets the required criteria.
//  JS-based validation can be done using JavaScript code that checks the input values against certain rules or conditions, 
// such as length, format, or range. If the input does not meet the criteria, an error message can be displayed to the user,
//  prompting them to correct their input before submitting the form. This can help to improve the user experience and reduce errors in data collection. 
// which is shown or done in upper part of question.




// ***********Inline validation***************
// Inline validation is a technique used in web development to provide immediate feedback to users as they fill out a form.
//  It involves validating user input in real-time, as the user types or selects options, rather than waiting until the form is submitted. 
// Inline validation can help to improve the user experience by providing instant feedback on errors or missing information, 
// allowing users to correct their input before submitting the form. This can help to reduce errors and improve the accuracy of data collection. 
// Inline validation can be implemented using JavaScript or other client-side scripting languages, and can be customized to meet the specific needs of a form or application.