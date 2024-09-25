# Asynchronicity Challenges

## Challenge 1

**Thinking point**: Inspect the code given to you. In what order should the console logs come out? "Howdy" first or "Partnah" first?

## Challenge 2

**Task**: Create a function `delayedGreet` that console logs "welcome" after 3 seconds.

## Challenge 3

**Task**: Create a function `helloGoodbye` that console logs "hello" right away, and "good bye" after 2 seconds.

## Challenge 4

**Task**: Create a function `brokenRecord` that console logs "hi again" every second. Use the End Code button to stop the console logs when you are satisfied that it is working.

## Challenge 5

**Task**: Create a function `limitedRepeat` that console logs "hi for now" every second, but only for 5 seconds. Research how to use `clearInterval` if you are not sure how to do this.

## Challenge 6

**Task**: Write a function called `everyXsecsForYsecs` that will accept three arguments: a function `func`, a number `interval`, and another number `duration`.

`everyXsecsForYsecs` will execute the given function every `interval` number of milliseconds, but then automatically stop after `duration` milliseconds.

Then pass the below `sayHi` function into an invocation of `everyXsecsForYsecs` with `1000` interval time and `5000` duration time. What do you expect to happen?

## Challenge 7

**Task**: Write a function `delayCounter` that accepts a number (called 'target') as the first argument and a number of milliseconds (called 'wait') as the second argument, and returns a function.

When the returned function is invoked, it should log to the console all of the numbers between 1 and the target number, spaced apart by 'wait' milliseconds.

## Challenge 8

**Task**: Write a function `promised` that takes in a value. This function will return a promise that will resolve after 2 seconds.

**Hint**: Take a look at the Promise object docs on MDN.

## Challenge 9

**Task**: Write a `SecondClock` class, with two methods: `start` and `reset`.

- `start`: Upon invocation, invokes a callback (this.cb, defined in the constructor) on an argument every second, with the argument to the callback being the current seconds "value".

  - The first "tick" with value 1 occurs 1 second after the initial "secondClock" invocation.
  - The second "tick" with value 2 occurs 2 seconds after the initial "secondClock" invocation.
  - The sixtieth "tick" with value 60 occurs 60 seconds after the initial "secondClock" invocation.
  - The sixty-first "tick" with value 1 occurs 61 seconds after the initial "secondClock" invocation.

- `reset`: Upon invocation, completely stops the "clock". Also resets the time back to the beginning.

**Hint**: Look up `setInterval` and `clearInterval`.

## Challenge 10

**Task**: Write a function called `debounce` that accepts a function and returns a new function that only allows invocation of the given function after `interval` milliseconds have passed since the last time the returned function ran.

Additional calls to the returned function within the interval time should not be invoked or queued, but the timer should still get reset.

**Examples of debouncing**: Check out [CSS-Tricks: Debouncing and Throttling](https://css-tricks.com/debouncing-throttling-explained-examples/).
