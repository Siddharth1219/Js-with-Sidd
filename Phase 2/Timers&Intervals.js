// // teach (setTimeout, clearTimeout, setInterval, clearInterval) to use timers and intervals in JavaScript
// // teach real uses (delaying UI actions, auto-refreshing content, etc.)

// // 1000 miliseconds = 1 second





// // setTimeout ---->> is a function that allows you to execute a piece of code after a specified delay. 
// // It takes two arguments: the function to execute and the delay in milliseconds.

// let tm = setTimeout(function() { //ye function sirf ek bar chlta hai
//     console.log("This message is displayed after 2 seconds, It's a setTimeout");
// }, 2000);



// // setInterval ---->> is a function that allows you to execute a piece of code repeatedly at specified intervals.


// let st = setInterval(function() { //ye function baar baar chlta hai
//     console.log("This message is displayed every 5 seconds, It's a setInterval");
// }, 5000);






// // clearTimeout ---->> is a function that allows you to cancel a timeout that was previously set with setTimeout.

// clearTimeout(tm); // This will cancel the timeout set by setTimeout, so the message will not be displayed.


// // clearInterval ---->> is a function that allows you to cancel an interval that was previously set with setInterval.

// clearInterval(st); // This will cancel the interval set by setInterval, so the message will not be displayed repeatedly.









// Example problem: Create a countdown timer that counts down from 10 to 0 and stops when it reaches 0.


// make a counter jab 10 se 0 tak jayega to bnd ho jyega

// let count = 10;

// let stt = setInterval(function() {
//     console.log(count);
//     count--;
//     if (count < 0) {
//         clearInterval(stt); // This will stop the interval when the count reaches 0.
//     }
// }, 1000); // This will display the count every second, and it will stop when the count reaches 0.








// Example for  downloading progress bar

// work on( overall progess =3 sec, 100% = 3 sec, 1% = 0.03 sec, 1% = 30 miliseconds, 100% = 3000 miliseconds)

let countt = 0;
let progress = document.querySelector(".progress-bar");
let percentText = document.querySelector(".percent");

let interval = setInterval(function() {
        if (countt < 100) {
            countt++;
            progress.style.width = `${countt}%`;
            percentText.textContent = `${countt}%`;
        } else {
            clearInterval(interval); // This will stop the interval when the count reaches 100.
            percentText.textContent = "Download Complete!";
        }
    }, 10 * 1000 // 100 = 10000 miliseconds = 10 sec, but we want 3 sec so we will divide it by 3, so it will be 10 * 1000 / 3 = 3333.33 miliseconds = 3.33 sec
    /
    100); // This will update the progress bar and percentage text every 30 milliseconds, and it will stop when the count reaches 100.