function speakSomething1(what = "Speaking!") { // function declaration
    for (let i = 0; i < 10; i++) {
        console.log(what);
    }
};

let speakSomething2 = function(what = "Speaking!") { // function expression, annonymous function type (lambda)
    for (let i = 0; i < 10; i++) {
        console.log(what);
    }
};

setTimeout(speakSomething2, 5000); // async call
//                 ^         ^
//          execute later; set timer (ms)

let obj = {
    sayHello: function() { // method
        console.log('Hello');
    }
};

obj.sayHello();