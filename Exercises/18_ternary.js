// Terse, one-line if statement

let cherub = 'Dan'; // If Cupid, 'Ouch!...'

if (cherub === 'Cupid') console.log('Ouch! An arrow..., Ooo, I\'m in love');
else console.log('I feel nothing...');

// Terse, one-line if statement with variables

let errorMsg = 'error';

// if anything in the string, then truthy
if (errorMsg) {
    console.log('There was an error -> ', errorMsg);
}

if (!errorMsg) {
    console.log('Yay no errors!');
}

// Ternary operator
// Format -> condition ? action (if true do this): action (if false do this)

let animal = 'cat';

animal === 'cat' ? console.log('You will be a cat herder!') : console.log('You will be a dog cather!');
// 'You will be a dog cather!'

// The ternary operator is often used to set a variable based on certain conditions.
let animal_type = 'bird';

let breeding_type = animal_type === 'mammal' ? 'gives birth' : 'lays eggs';
//                                           ^               ^
//                                 condition before ?      if/else
console.log(breeding_type); // lays eggs

