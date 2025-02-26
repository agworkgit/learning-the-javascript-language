// && - and
// || - or
// ! - not

let animal1 = 'monkey', animal2 = 'bear', animal3 = 'tiger'; 

animal1;
// 'monkey'

animal1 === 'monkey'
// true

animal1 === 'monkey' && animal2 === 'bear' // true if animal1 is monkey and animal2 is bear otherwise false
// true

animal1 === 'monkey' && animal2 === 'fish'
// false

animal1 === 'monkey' || animal2 === 'bear' // with OR, only one condition is required to be true to evaluate to true
// true

animal1 === 'monkey' || animal2 === 'fish'
// true

// If parantheses are not present, AND (&&) is always evaluated before OR (||)
// If you want OR to evaluate first, group in parantheses

// Negations

!true
// false

!false
// true

!(animal1 === 'monkey' || animal2 === 'fish')
// false