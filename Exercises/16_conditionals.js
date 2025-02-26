// Age verification in Node.js

const readline = require("readline"); // readline module lets us read user input from the terminal.

const createInterface = readline.createInterface( // sets up a way to read input and print messages.
    process.stdin, // process.stdin listens for what the user types.
    process.stdout // process.stdout is used to print text back to the user.
);

createInterface.question("What is your name? ", (name) => {
    createInterface.setPrompt(`${name}, how old are you? `); // set the prompt line
    createInterface.prompt(); // take the prompt above and write it in the terminal
    createInterface.on('line', (age) => { // if 'line' present (meaning the age the user inputs), then take that and execute code inside
        if (age < 18)
        {
            console.log(`We are sorry ${name}, you are ${age} years old and don't meet the age requirements!`);
            createInterface.close(); // if this true, end
        } else {
            console.log(`Hi ${name}, you are logged in!`);
            createInterface.close(); // if this true, end
        }
    });
})