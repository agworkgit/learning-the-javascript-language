function fuddify(speech)
{
    // if it's not a string return an error message
    if (typeof speech !== 'string')
    {
        console.log('Nice twy, wabbit!');
        return;
    }

    // otherwise, make it sound like Elmer Fudd
    speech = speech.replace(/r/g, 'w');
    speech = speech.replace(/R/g, 'W');

    return speech;
};

console.log(fuddify("Be very quiet, I'm hunting rabbits!"));
console.log(fuddify("Rabbit tracks!"));
console.log(fuddify("Come out you silly rabbit, I have a smoking surprise for you..."));
console.log(fuddify(33));

// split words
// iterate characters
// replace 'r' with 'w'
// join back into result

function isEven(number)
{
    if (number % 2 === 0)
    {
        return true;
    } else {
        return false;
    }
};

console.log(isEven(3)); // false
