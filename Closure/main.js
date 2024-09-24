/**
 * Returns a function that takes a single number as an argument and returns that number multiplied by 2.
 * @returns {function(num: number): number}
 */
function createFunction(){
    function multiplyBy2(num){
        return num*2;
    }
    return multiplyBy2;
}

const generatedFunction = createFunction();
console.log(generatedFunction(5))

/**
 * Returns a function that will increment and log a counter each time it is called.
 * The counter is shared between all functions returned by outer.
 * @returns {function(): undefined}
 */
function outer(){
    let count = 0;
    /**
     * Increments and logs a counter each time it is called.
     * The counter is shared between all functions returned by outer.
     */
    function inner(){
        count++;
        console.log(count);
    }
    return inner;
}

const myFunction = outer();
myFunction();
myFunction();

const myOtherFunction = outer();
myOtherFunction();
myOtherFunction();

myFunction();
myOtherFunction();
