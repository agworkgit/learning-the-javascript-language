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