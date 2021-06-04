'use strict';
console.log('-- begin --');

// write code to pass asserts a and b
// fill in the blanks for c and temp

// leave this code as it is
let a = 'y';
let b = 'x';
let temp;

temp = a;
const c = temp;//'y' this is declared with 'const' and it could never be reassigned again. it remains with the value 'y' forever

// write some code, be sure to use temp!
temp=a;//y
a=b;//x
b=temp;//y

// replace the _ with a value to pass the assertions

const isTrue1 = a === 'x';
console.assert(isTrue1, 'Test 1');

const isTrue2 = b === 'y';
console.assert(isTrue2, 'Test 2');

const isTrue3 = c === temp;
console.assert(isTrue3, 'Test 3');

const isTrue4 = temp === 'y';
console.assert(isTrue4, 'Test 4');


console.log('-- end --');