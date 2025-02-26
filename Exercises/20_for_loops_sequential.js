// For Loops

let listErrors = ["TypeError", "SyntaxError", "Undefined"];

for (let i = 0; i < listErrors.length; i++) {
  let printErrors = listErrors[i];
  console.log(printErrors);
}

console.log('\n');

let counter = 0;

for (let i = 1; i <= 10; i++) {
    counter++;
    console.log(counter);
}

console.log('\n');

let countdown = 10;

for (let countdown = 10; countdown >= 1; countdown--) {
  console.log(countdown);
}

console.log('\n');

for (let i = 0; i < 10; i++) {
  console.log(`I looped ${i} number of times.`);
}
