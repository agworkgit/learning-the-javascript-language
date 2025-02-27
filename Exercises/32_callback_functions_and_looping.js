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

console.log(myNums);
console.log(myDoubles);

// Declaration

myNums.forEach(function(num) {
    console.log("my array contains", num);
});

// Arrow

myNums.forEach((num) => {
    console.log("my array contains", num);
});

// Run the html to see it in action

const myTextField = document.getElementById('myTextField');
myTextField.addEventListener('keyup', () => {
    console.log('someone is typing...');
});

