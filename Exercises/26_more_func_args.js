function saySomething(string, number)
{
    for (let i = 0; i < number; i++)
    {
        console.log(string, i);
    }
};

console.log(saySomething('Midnight', 5));

function addingMachine()
{
    let total = 0;

    for (let i = 0; i < arguments.length; i++) // arguments is an object holding all the arguments passed in
    {
        let number = arguments[i];

        if (typeof number === 'number')
        {
            total += number;
        }
    }

    return total;
};

console.log(addingMachine(2, 3, 4, 5, 6, 7)); // 27
