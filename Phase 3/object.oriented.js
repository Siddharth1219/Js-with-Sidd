// Construction functions and prototypes
// new keyword behviour
// es6 classes : constructor, methods, extends, super
// prototype inheritance vs classical inheritance
// encapsulation (private feilds using #)


// humein seekhna h factories bananaa , mtlb ki app ek barr blueprint bna do ki har object kaisa dikhega and hum
// log naye nayeobjects with different values bna payenge, yehi upar upar se poora kam hai oops ka concept








//--------------CONSTRUCTOR FUNCTION------------------


function CreatePencil(name, price, color, company) {
    this.name = name;
    this.price = price;
    this.color = color;
    this.company = company;
    this.write = function (text) {
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = color;
        document.body.append(h1);
    };
}

let pencil1 = new CreatePencil("Nataraj", 10, "Black", "Nataraj");
let pencil2 = new CreatePencil("Apsara", 15, "Blue", "Apsara");
let pencil3 = new CreatePencil("Camlin", 20, "Red", "Camlin");
let pencil4 = new CreatePencil("Faber Castell", 25, "Green", "Faber Castell");
let pencil5 = new CreatePencil("Reynolds", 30, "Yellow", "Reynolds");
let pencil6 = new CreatePencil("Luxor", 35, "Orange", "Luxor");
let pencil7 = new CreatePencil("Cello", 40, "Purple", "Cello");
let pencil8 = new CreatePencil("Pentel", 45, "Pink", "Pentel");
let pencil9 = new CreatePencil("Staedtler", 50, "Brown", "Staedtler");



// for calling this function in console use- pencil1.write("Hello World")








//-----------------PROTOTYPE ------------------

function CreatePencil(name, price, color) {
    this.name = name;
    this.price = price;
    this.color = color;

    };

    CreatePencil.prototype.write = function (text) {
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        console.log(h1);
        document.body.append(h1);
    }


CreatePencil.prototype.company = "Siddharth";  // ye company property har object ke liye same hai, isliye humne ise prototype me daal diya, taki memory bache

let pencil11 = new CreatePencil("Nataraj", 10, "Black");
let pencil22 = new CreatePencil("Apsara", 15, "Blue");
let pencil33 = new CreatePencil("Camlin", 20, "Red");
let pencil44 = new CreatePencil("Faber Castell", 25, "Green");

// for calling this function in console use- pencil1.write("Hello World")








// -----------------------ES6 CLASSES---------------------


class CreatePencil {
    constructor(name, price, color) {
        this.name = name;
        this.price = price;
        this.color = color;
    }


    erase() {
    document.body.querySelectorAll("h1").forEach((elem) => {
        if (elem.style.color === this.color) {
            elem.remove();
        }
    });
}
 // console use -  p1.erase()  // ye function call karne ke liye

    write(text) {
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        console.log(h1);
        document.body.append(h1);
    }
}

let p1 = new CreatePencil("Nataraj", 10, "Black");
let p2 = new CreatePencil("Apsara", 15, "Blue");
let p3 = new CreatePencil("Camlin", 20, "Red");
let p4 = new CreatePencil("Faber Castell", 25, "Green");

// console use -  p1.write("Hello World")  // ye function call karne ke liye







// -----------------------CLASS EXTENDS AND SUPER---------------------

class User {
    constructor(name, email, username, address, role) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.address = address;
        this.role = role;
    }

    write(text) {
        let h1 = document.createElement("h1");
        h1.textContent = `${this.name}  : ${text}`;
        document.body.append(h1);
    }
}

class Admin extends User {
    constructor(name, email, username, address, role, permissions) {
        super(name, email, username, address, role);
        this.role="admin";
        this.permissions = permissions;
    }
remove(){
    document.body.querySelectorAll("h1").forEach((elem) => {
        if (elem.textContent.startsWith(this.name)) {
            elem.remove();
        }
    });
}


}

window.u1 = new User("Siddharth", "siddharth@example.com", "siddharth123", "123 Main St", "User");
window.u2 = new User("Shivangi", "shivangi@example.com", "shivangi123", "456 Oak Ave", "User");
window.a1 = new Admin("AdminUser", "admin@example.com", "admin123", "789 Pine Rd", "Admin", ["read", "write", "delete"]);









// -----------------------Classical Inheritance---------------------    
// it is a way of creating a new class based on an existing class, allowing the new class to inherit properties and methods from the existing class.
//  In classical inheritance, we define a base class (also known as a parent class or superclass) and then create derived classes (also known as child classes or subclasses) that inherit from the base class.


// ---------------------Protype inheritance---------------------
// In prototype inheritance, objects can inherit properties and methods directly from other objects. 
// Each object has an internal link to another object called its prototype. When you try to access a property or method on an object, JavaScript first looks for it on the object itself. If it doesn't find it there, it follows the prototype chain to look for it on the object's prototype, and so on, until it reaches the end of the chain (usually Object.prototype).






// -----------------------Encapsulation---------------------
// Encapsulation is a fundamental concept in object-oriented programming (OOP) that refers to the bundling of data (attributes) and methods (functions) that operate on that data into a single unit, typically a class. 
// It restricts direct access to some of an object's components, which can prevent the accidental modification of data and promote a clear interface for interacting with the object.

// private fields using # in js classes
