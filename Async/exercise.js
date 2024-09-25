/* CHALLENGE 1 */

function sayHowdy() {
    console.log('Howdy');
}

function testMe() {
    setTimeout(sayHowdy, 0);
    console.log('Partnah');
}
// After thinking it through, uncomment the following line to check your guess!
// testMe(); // what order should these log out? Howdy or Partnah first?


/* CHALLENGE 2 */

function delayedGreet() {
    // ADD CODE HEREf
    setTimeout(() => console.log('welcome'), 3000);
}
// Uncomment the following line to check your work!
// delayedGreet(); // should log (after 3 seconds): welcome


/* CHALLENGE 3 */

function helloGoodbye() {
    setTimeout(() => console.log('good bye'), 2000)
    console.log("hello");
    // ADD CODE HERE
}
// Uncomment the following line to check your work!
// helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye


/* CHALLENGE 4 */

function brokenRecord() {
    const print = () => console.log('hi again');

    setInterval(print, 1000);
    // ADD CODE HERE
}
// Uncomment the following line to check your work!
// brokenRecord(); // should log (every second): hi again


/* CHALLENGE 5 */

function limitedRepeat() {
    // Start a repeating interval
    const intervalId = setInterval(() => {
        console.log('hi for now');
    }, 1000);

    // Stop the interval after 5 seconds
    setTimeout(() => {
        clearInterval(intervalId); // Clear the interval after 5 seconds
    }, 5000);
}
// Uncomment the following line to check your work!
// limitedRepeat(); // should log (every second, for 5 seconds): hi for now


/* CHALLENGE 6 */

function everyXsecsForYsecs(func, interval, times) {
    const x = setInterval(() => {
        func();
    }, interval * 1000);
    setTimeout(() => {
        clearInterval(x);
    }, times * 1000);
    // ADD CODE HERE
}
// Uncomment the following lines to check your work!
// function theEnd() {
//   console.log('This is the end!');
// }
// everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!


/* CHALLENGE 7 */

function delayCounter(target, wait) {
    function inner() {
        let count = 1;
        const x = setInterval(() => {
            console.log(count);
            count++;
            if (count == target + 1) clearInterval(x);
        }, wait)
    }
    return inner;

}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const countLogger = delayCounter(3, 1000)
// countLogger();
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3

/* CHALLENGE 8 */

function promised(val) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(val); // Resolves the promise with the provided value after 2 seconds
        }, 2000);
    });
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const createPromise = promised('wait for it...');
// createPromise.then((val) => console.log(val)); 
// will log "wait for it..." to the console after 2 seconds

/* CHALLENGE 9 */

class SecondClock {
    constructor(cb) {
        // ADD CODE HERE
    }
    // ADD METHODS HERE
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const clock = new SecondClock((val) => { console.log(val) });
// console.log("Started Clock.");
// clock.start();
// setTimeout(() => {
//     clock.reset();
//     console.log("Stopped Clock after 6 seconds.");
// }, 6000);

/* CHALLENGE 10 */

function debounce(func, interval) {
    let timeoutId; // Stores the timeout reference

    return function (...args) {
        // Clear the previous timer if the function is called again before the interval ends
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        // Set a new timer that will invoke `func` after `interval` milliseconds
        timeoutId = setTimeout(() => {
            func.apply(this, args); // Apply the function with the correct context and arguments
        }, interval);
    };
}


// UNCOMMENT THESE TO TEST YOUR WORK!
// function giveHi() { return 'hi'; }
// const giveHiSometimes = debounce(giveHi, 3000);
// console.log(giveHiSometimes()); // -> 'hi'
// setTimeout(function() { console.log(giveHiSometimes()); }, 2000); // -> undefined
// setTimeout(function() { console.log(giveHiSometimes()); }, 4000); // -> undefined
// setTimeout(function() { console.log(giveHiSometimes()); }, 8000); // -> 'hi'