function addingMachine(...terms) { // ... is the rest parameter
    // init the total
    let total = 0;

    // this used to be 'arguments' instead of 'terms'
    for (let i = 0; i < terms.length; i++) {
        // grab the next number
        let number = terms[i];

        // check if the argument is a number
        // if so, add it to the running total
        if (typeof number === "number") {
            total += number;
        }
    }

    // done - return the total
    return total;
}

console.log(addingMachine(3, 5, 34, 67, 26)); // 135

function bake(temp = 350, time = 35, ...flavours)
{
    console.log(`Let's bake this cake at ${temp} degrees,`);
    console.log(`for ${time} minutes\n`);

    if (flavours.length > 0)
    {
        console.log('And let\'s not forget these flavours', flavours);
    }

    console.log('Arguments contains everything', arguments);
}

bake(425, 30, 'chocolate', 'lemon', 'black forest');
bake(300, 30, 'vanilla');
bake();