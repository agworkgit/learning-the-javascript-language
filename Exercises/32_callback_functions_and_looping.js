/* "Callback function is a piece of jargon, meaning a function that's passed as an argument, into another function and executed in that function." */

function doubleIt (num) {
    return (num *= 2);
}

let myNums = [1, 2, 3, 4, 5];

let myDoubles = myNums.map(doubleIt);
//                     ^^^
//                    method
//                           ^^^^^
//                         callback
// We are passing myNums into 'map', which maps to each item in the array the function we gave it as argument 'doubleIt'
// This is used a lot in React to render a list of items in the UI

console.log(myNums); // [1, 2, 3, 4, 5]
console.log(myDoubles); // [2, 4, 6, 8, 10]

// Declaration

myNums.forEach(function(num) {
    console.log("my array contains", num);
});

// Bear in mind that this method does not have a 'break' statement as with regular loops

// Arrow

myNums.forEach((num) => {
    console.log("my array contains", num);
});

// Run the html to see the event handler in action

const myTextField = document.getElementById('myTextField');
myTextField.addEventListener('keyup', () => {
    console.log('someone is typing...');
});

