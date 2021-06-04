'use strict';
console.log('-- begin --');

let a = 'y';
let b = 'w';
let c = 'z';
let d = 'x';
let temp;

// write some code, be sure to use temp!
temp=b;//w
b=d;//x
d=c;//z
c=a//y
a=temp//w
temp='w';//w

// fill in the final _ to pass the assertions

const isTrue1 = a === 'w';
console.assert(isTrue1, 'Test 1');

const isTrue2 = b === 'x';
console.assert(isTrue2, 'Test 2');

const isTrue3 = c === 'y';
console.assert(isTrue3, 'Test 3');

const isTrue4 = d === 'z';
console.assert(isTrue4, 'Test 4');

const isTrue5 = temp === 'w';
console.assert(isTrue5, 'Test 5');


console.log('-- end --');