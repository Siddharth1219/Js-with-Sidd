// objects are defined in this file, and are used to create the game world.
//  Each object has a unique ID, a name, and a set of properties that define its behavior and appearance.
//  The objects can be static or dynamic, and can interact with the player and other objects in the game.


// jab hamm ek bande ki bat krte  hai tb objects banate hai and jab hmm ek group ki baat krte hai tb array banate hai.




let obj = {
    name: "Player",
    health: 100,
    position: {
        x: 3,
        y: 8
    }
};
console.log(obj.name, obj.position.x); // Player
console.log(obj.health); // 100
console.log(obj.position); // { x: 3, y: 8 }
console.log(obj.age); // undefined



// Adding a new property to the object using dot notation
obj.age = 25;
console.log(obj.age); // 25



// Adding a new property to the object using bracket notation
let aa = "Sirname";

obj[aa] = "Kumar"; // Adding a new property to the object using bracket notation
console.log(obj.Sirname); // Kumar



// nesting objects is a way to create complex data structures in JavaScript. 
// It allows you to create objects within objects, which can be useful for organizing data and 
// creating more complex game worlds.

// Deep objects is a nested object, which means that it contains another object as a property.

const deepObj = {
    name: "Deep Player",
    health: 100,
    position: {
        x: 3,
        y: 8,
        z: {
            a: 1,
            b: 2
        }
    }
};

console.log(deepObj.position.z.a); // 1
console.log(deepObj.position.z.b); // 2




// Object Destructing is a feature in JavaScript that allows you to extract values from objects and
//  assign them to variables in a more concise way. It can be useful for working with complex objects and making your code more readable.

const { name, health, position } = deepObj;
console.log(name); // Deep Player
console.log(health); // 100
console.log(position); // { x: 3, y: 8, z: { a: 1, b: 2 } }





// ******************Looping through objects is a way to iterate over the properties of an object and perform actions on them.
//  It can be useful for working with dynamic objects and performing operations on their properties.*************************



// ************for-in***************** 

let player = {
    name: "Player",
    health: 100,
    position: {
        x: 3,
        y: 8
    }
};

for (let key in player) {
    console.log(key, player[key]);
}

// Output:
// name Player
// health 100
// position { x: 3, y: 8 }




// *************object.keys()***************

let player2 = {
    name: "Player2",
    health: 100,
    position: {
        x: 3,
        y: 8
    }
};

let keys = Object.keys(player2);
console.log(keys); // [ 'name', 'health', 'position' ]

for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    console.log(key, player2[key]);
}

// Output:
// name Player2
// health 100
// position { x: 3, y: 8 }







// ***************object.entries()*****************

let player3 = {
    name: "Player3",
    health: 100,
    position: {
        x: 3,
        y: 8
    }
};

let entries = Object.entries(player3);
console.log(entries); // [ [ 'name', 'Player3' ], [ 'health', 100 ], [ 'position', { x: 3, y: 8 } ] ]

for (let i = 0; i < entries.length; i++) {
    let [key, value] = entries[i];
    console.log(key, value);
}

// Output:
// name Player3
// health 100
// position { x: 3, y: 8 }



// ***********************Copying objectPosition:************************

// Copying objects is a way to create a new object that has the same properties and values as an existing object.
//  It can be useful for creating new objects based on existing ones, or for creating backups of objects.

let player4 = {
    name: "Player4",
    health: 100,
    position: {
        x: 3,
        y: 8
    }
};

// Shallow copy using Object.assign()
let playerCopy1 = Object.assign({}, player4);
console.log(playerCopy1); // { name: 'Player4', health: 100, position: { x: 3, y: 8 } }

// Shallow copy using spread operator
let playerCopy2 = {...player4 };
console.log(playerCopy2); // { name: 'Player4', health: 100, position: { x: 3, y: 8 } }

// Deep copy using JSON methods
let playerCopy3 = JSON.parse(JSON.stringify(player4));
console.log(playerCopy3); // { name: 'Player4', health: 100, position: { x: 3, y: 8 } }







//****************************Optional Chaining:************************
// Optional chaining is a feature in JavaScript that allows you to safely access nested properties of an object without having to check if each level of the property chain exists. It uses the ? operator to check if a property exists before trying to access it.

let player6 = {
    name: "Player6",
    health: 100,
    position: {
        x: 3,
        y: 8
    }
};

console.log(player6.position ? .x); // 3
console.log(player6.position ? .z); // undefined
console.log(player6.inventory ? .items); // undefined




// ****************************Computed Operators:************************

// computed operators is a feature in JavaScript that allows you to use expressions as property names when defining or accessing object properties. It uses square brackets [] to evaluate the expression and use its result as the property name.

let player5 = {
    name: "Player5",
    health: 100,
    position: {
        x: 3,
        y: 8
    }
};

let propertyName = "health";
console.log(player5[propertyName]); // 100