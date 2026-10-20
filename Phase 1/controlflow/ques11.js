//  Questions from Break and Continue Statements


// skip multiples of 3

// write a loop from 1 to 20 that 
//  skips numbers divisible by 3
//   print all others 

// use continue statement to skip the numbers divisible by 3

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}