const printHello = () => console.log('hello');

const blockForOneSecond = () => {
    for (let i = 0; i < 1000000000; i++) {}
}

setTimeout(() => console.log('hello1'), 100);
setTimeout(printHello, 0);

console.log('...............');
console.log('...............');
console.log('...............');

blockForOneSecond()

console.log('...............');
console.log('...............');
console.log('...............');
console.log('...............');