var canBeChanged = 3;
canBeChanged = 5;
console.log(canBeChanged); // 5

const dozen = 12;
const halfDozen = 6;
const bakersDozen = 13;
console.log(12);
dozen = bakersDozen; // error: TypeError: Assignment to constant variable.

// to create variables that we can later change opt for the keyword let