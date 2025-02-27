// Before:

let speakOld = function () {
    console.log("I am speaking!");
    console.log("I am saying things!");
    console.log("I should probably stop it now.");
};

// After

let speakArrow = () => {
    console.log("I am speaking!");
    console.log("I am saying things!");
    console.log("I should probably stop it now.");
};

speakArrow();

// Before:

function isEvenOld(num) {
    return num % 2 === 0;
}

// After:

let isEven = (num) => {
    return num % 2 === 0;
};

// Or:

isEvenShort = (num) => num % 2 === 0;

// And most succintly, if only one parameter, leave off the parantheses:

isEvenShorter = num => num % 2 === 0;

