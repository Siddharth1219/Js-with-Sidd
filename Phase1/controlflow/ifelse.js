// if else else-if
// switch case
// early return pattern





// if else else-if

// if (12 > 3) {

// } else if (12 > 9) {

// } else {

// }






// Switch Case
// switch (12) {
//     case 1:
//         break;
//     case 2:
//         break;
//     case 3:
//         break;
//     default:
//         break;
// }





// early return pattern

// function getVal(val) {
//     if (val <100) return "A";
//     if (val < 200) return "B";
//     if (val < 300) return "C";
//     return "D";
// }

// console.log(getVal (348));








// Question 1: write a funcyion getGrade(score) that takes
//  * students marks (0 to 100) and returns the grade based on the following criteria
//  * 90 - 100: A
//  * 80 - 89: B
//  * 70 - 79: C
//  * 60 - 69: D
//  * below 60: F
// anything else          Invalid marks

function getGrade(score) {
    if (score >= 90) { return "A"; }
    if (score >= 80) { return "B"; }
    if (score >= 70) { return "C"; }
    if (score >= 60) { return "D"; }
    if (score < 60) { return "F"; }
    return "Invalid marks";
}

console.log(getGrade(47));



// Question 2 Rock-paper-scissors game logic
// Rock beats scissors
// Scissors beats paper
// Paper beats rock


function rps(user, computer) {
    if (user === "rock" && computer === "scissors") { return "User wins"; }
    if (user === "scissors" && computer === "paper") { return "User wins"; }
    if (user === "paper" && computer === "rock") { return "User wins"; }
    if (user === computer) { return "Draw"; }

    return "Computer wins"; //jab computers wins hogi baki ke conditions ke liye
}

console.log(rps("rock", "scissors"));