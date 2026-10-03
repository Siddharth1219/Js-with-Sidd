//  Questions from Break and Continue Statements

// Q1. Stop at first multiple of 7

// write a loop from 1 to 100 that
//     prints each number
//     stops completely when it finds the first number divisible by 7

for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        break;
    }
    console.log(i);
}