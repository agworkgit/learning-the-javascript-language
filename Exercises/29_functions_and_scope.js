var myNum = 32; // global

var myResult = "success!"; // global

function randomizer(limit) {
    var randomNumber = Math.floor(Math.random() * limit); // local
    var myNum = randomNumber; // local,  meaning it exists only inside this function

    console.log("local myNum is", myNum); // local
    console.log("global myNum is", global.myNum); // global

    console.log("our result is", myResult); // global reference

    return myNum; // local
}

console.log(randomizer(10));

// local myNum is 2 --> randomNumber
// global myNum is undefined --> ???
// our result is success!
// 2 --> myNum?
