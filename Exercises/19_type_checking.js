let thing = 32; // number

console.log(typeof thing); // number

thing = 'thirtytwo'; // string

console.log(typeof thing); // type is string, not number

let array = [];

console.log(Array.isArray(array)); // true

let notNum = 3 / 'not a number';

console.log(Number.isNaN(notNum)); // true
if (Number.isNaN(notNum))
{
    console.log('This is NaN');
}

let theThing = {
    name: 'Thing',
    body: 'Hand',
    limbs: 5
};

console.log(typeof theThing); // object
console.log(typeof theThing === 'object' && theThing.hasOwnProperty('length')); // false
console.log(typeof theThing === 'object' && theThing.hasOwnProperty('limbs')); // true

console.log(typeof null); // object???

let somethingLater;

console.log(typeof somethingLater); // undefined
