// Q1. Create an object for a student with name, age, and isEnrolled

let student = {
    name: "John Doe",
    age: 20,
    isEnrolled: true
};

// Copy the student object using Object.assign()
let copiedStudent = Object.assign({}, student);

// Modify the copied object
copiedStudent.name = "Jane Smith";
copiedStudent.age = 22;

// Log both objects to see the difference
console.log("Original Student:", student);
console.log("Copied Student:", copiedStudent);

// Output:
// Original Student: { name: 'John Doe', age: 20, isEnrolled: true }
// Copied Student: { name: 'Jane Smith', age: 22, isEnrolled: true }





// Q2. Can an object key be a number or boolean?try this:

const obj = {
    1: "one",
    true: "yes",
    false: "no"
};

console.log(obj[1]); // Output: "one"
console.log(obj[true]); // Output: "yes"
console.log(obj[false]); // Output: "no"

// Note: In JavaScript, object keys are always converted to strings. 
// So, the keys 1, true, and false are actually stored as "1", "true", and "false" respectively.




// Q3. Access the value of "First-name" key using bracket notation
const person = {
    "First-name": "Alice",
    "Last-name": "Smith"
};

console.log(person["First-name"]); // Output: "Alice"




// Q4. Give a dynamic key let key ="age", how will you access user[key]?

let key = "age";
const user = {
    name: "Bob",
    age: 30
};

console.log(user[key]); // Output: 30


// Q5. From the objects below, print the latitude and longitude of the user using object destructuring.

const userLocation = {
    name: "Charlie",
    location: {
        latitude: 40.7128,
        longitude: -74.0060
    }
};

const { location: { latitude, longitude } } = userLocation;

console.log("Latitude:", latitude); // Output: Latitude: 40.7128
console.log("Longitude:", longitude); // Output: Longitude: -74.0060



// Q6. What happen if coordinates is missing? how can you prevent errors?

// solution is the optional chaining operator (?.) which allows you to safely access nested properties without causing an error if a property is undefined or null.