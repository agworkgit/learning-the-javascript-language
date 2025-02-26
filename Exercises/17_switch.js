// This technique is beneficial when we have many else if statements

// Age verification in Node.js via if else statements

/* 
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
*/

// Age verification in Node.js via switch statements
const readline = require("readline"); // readline module lets us read user input from the terminal.

const createInterface = readline.createInterface(
  // sets up a way to read input and print messages.
  process.stdin, // process.stdin listens for what the user types.
  process.stdout // process.stdout is used to print text back to the user.
);

createInterface.question("What is your name? ", (name) => {
  createInterface.setPrompt(`${name}, how old are you? `); // set the prompt line
  createInterface.prompt(); // take the prompt above and write it in the terminal
  createInterface.on("line", (age) => {
    // if 'line' present (meaning the age the user inputs), then take that and execute code inside
    switch (
      age < 18 // condition
    ) {
      case true: // case true? if yes execute code
        console.log(
          `We are sorry ${name}, you are ${age} years old and don't meet the age requirements!`
        );
        createInterface.close(); // if this true, end
        break; // end
      case false: // case false? if yes execute code
        console.log(`Hi ${name}, you are logged in!`);
        createInterface.close(); // if this true, end
        break; // end
    }
  });
});

// Age verification with switch statements in DevTools

/* 
let name = window.prompt("What is your name?");
let age;

if (name.length > 1)
{
    age = window.prompt("What is your age?");
};

switch (name.length > 1 && age > 18) {
    case true:
        alert(`Hello ${name}, you're ${age} years old, welcome!`)
        break;
    case false:
        alert(`Hello ${name}, you're not 18 years old, we can't let you in!`)
        break;
};
*/

// In this case switch is not showing it's full value, but it will become very valuable in shortening the syntax of dozens of conditions.
// Also, bear in mind that if break is not included after you condition is met, the switch statement will cascade until a break is found. This can be beneficial if you want to execute multiple blocks of code, one by one, cascading down until the next break.