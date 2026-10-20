// count how many numbers between 1 to 100 are divisible by both 3 and5

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}