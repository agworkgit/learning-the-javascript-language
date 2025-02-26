// for loop

for (let i = 0; i < 10; i++)
{
    console.log(i);
}

console.log('\n');

// while loop

let i = 0;
while (i < 10)
{
    console.log(i); // 0-9
    i += 1; // we add 1 to i for each iteration
}

console.log('\n');
console.log(i); // i is 10

// example - while loop

console.log('\n');

let myList = [true, true, true, false, true, true];

let myItem = null; // empty - falsey

while (myItem !== false)
{
    console.log(
        'My list has ' + myList.length + ' items now. This will keep looping until we pop a false from the array'
    );
    myItem = myList.pop();
}

// the danger with these kinds of loops is that it's easy to create an 'infinite loop'

// example - do/while loop

console.log('\n');

let myList2 = [true, true, true, false, true, true];

let myItem2 = false;

// looks like a loop that's been structured bottom up

do {
    console.log(
        'My list has ' + myList2.length + ' items. This will loop until we pop a false'
    );
    myItem2 = myList2.pop();
} while (myItem2 !== false);