// Ask the user for a nummber and print whether each number from 1 to that number is even or odd

let number = prompt("Enter a number: ");
for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
        console.log(i, "is even");
    } else {
        console.log(i, "is odd");
    }
}