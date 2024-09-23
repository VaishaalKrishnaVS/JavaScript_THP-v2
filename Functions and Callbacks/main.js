/**
 * Takes an array and a function as arguments.
 * Returns a new array with the same length, where each element is the result of the instruction function called on the corresponding element of the original array.
 * The instruction function should take one argument and return a value.
 */
function copyAndManupulate(arr, instruction){
    const output = [];
    for(let i=0; i<arr.length; i++){
        output[i] = instruction(arr[i]);
    }
    return output;
}

/**
 * Takes a number and returns it multiplied by 2
 * @param {number} num
 * @returns {number}
 */
function multiplyBy2(num){
    return num*2;
}

const multiplyBy3 = num => num*3;

const result = copyAndManupulate([1,2,3,4,5], multiplyBy2);
const result2 = copyAndManupulate([1,2,3,4,5], multiplyBy3);
const result3 = copyAndManupulate([1,2,3,4,5], num => num*4);

console.log(result)
console.log(result2)
console.log(result3)