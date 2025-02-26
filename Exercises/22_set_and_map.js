// newly introduced into JS

let myList = [1, 1, 2, 3, 5, 8, 13, "fibonacci"];

// Set() behaves like a set in discrete mathematics, it removes any duplicates

let mySet = new Set();
mySet.add(1);
mySet.add(1);
mySet.add(2);
mySet.add(3);

// If you want to quickly remove duplicates from an array, this is a great tool

let mySet2 = new Set(myList);
console.log(mySet2); // { 1, 2, 3, 5, 8, 13, 'fibonacci' }

console.log(mySet2.has(12)); // false

// To iterate easily over a Set we can use a 'for of loop'

for (item of mySet2) {
    console.log("My set contains", item);
}

/* 
    My set contains 1
    My set contains 2
    My set contains 3
    My set contains 5
    My set contains 8
    My set contains 13
    My set contains fibonacci 
*/

// Map() behaves like an object with properties (key/value pairs)
// Map() preserves the order of keys, for loops are predictable

console.log('\n');

let bird = {
    genus: 'corvus',
    species: 'corvax',
    commonName: 'raven',
};

console.log(bird);
console.log('\n');

// This is clearly more verboose than an object literal, use Map () if you want to preserve the order in which items were inserted

let birdMap = new Map();
birdMap.set('genus','corvus');
//              ^       ^
//              key     value
birdMap.set('species','corvax');
birdMap.set('commonName', 'raven');

console.log(birdMap);
console.log('\n');
console.log(birdMap.has('genus')); // true, the 'has' method can only access keys
console.log('\n');
console.log(birdMap.entries());
console.log('\n');

/* 
[Map Entries] {
[ 'genus', 'corvus' ],
[ 'species', 'corvax' ],
[ 'commonName', 'raven' ] 
 */

for (let value of birdMap)
{
    console.log(value);
}

/* This is called an 'entry list'
[ 'genus', 'corvus' ]
[ 'species', 'corvax' ]
[ 'commonName', 'raven' ] 
*/

console.log('\n');

// Coverting object literal to entry list
console.log(Object.entries(bird)); // looks like a nested array

console.log('\n');

// Creating a new Map() by using the regular object literal 'bird'
let birdMap2 = new Map(Object.entries(bird));
console.log(birdMap2);
