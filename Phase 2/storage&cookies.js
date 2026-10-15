// study
// 1. Local Storage api - setltem, getItem, removeItem, clear, update
// 2. Session Storage api
// 3. storing/retrieving strings vs JSON
// 4. Cookies -  manual key = value; path=/format


// local storage - apke browser ke ander data store krna jo ki browser band hone ke bad bhi delete nhi hoga

// store data
localStorage.setItem("name", "Siddharth Yadav");

// Get item
let vala = localStorage.getItem("name");

// remove Item
localStorage.removeItem("name");

// update item
localStorage.setItem("name", "Siddharth ji");
localStorage.setItem("name", "Siddharth Yadav Updated");

// clear all items
localStorage.clear();








// Session storage - apke browser ke ander data store krna jo ki browser band hone ke bad delete ho jayega, temporary store 

sessionStorage.setItem("name", "Siddharth Yadav");

// add functions use like local storage
sessionStorage.getItem("name");
sessionStorage.removeItem("name");
sessionStorage.clear();








// cookies - apke browser ke ander data store krna jo ki browser band hone ke bad bhi delete nhi hoga, but cookies ka size limit hota hai 4kb,
//  aur cookies ko server ke sath bheja jata hai har request me, so it can slow down your application.


document.cookie = "name=Siddharth Yadav; path=/; expires=Fri, 31 Dec 2024 23:59:59 GMT";











// JSON.stringify() - convert object to string
// it is used to convert a JavaScript object into a JSON string. This is useful for storing complex data structures in local storage or sending data to a server.

localStorage.setItem("user", JSON.stringify({ name: "Siddharth Yadav", age: 25 }));

// JSON.parse() - convert string to object
JSON.parse(localStorage.getItem("user"));

// it is used to convert a JSON string back into a JavaScript object. This is useful for retrieving complex data structures from local storage or receiving data from a server.