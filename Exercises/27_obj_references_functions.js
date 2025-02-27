let calvin = {
    name: "Calvin",
    bestFriend: "Hobbes",
    form: "human",
};

function transmogrifier(person) {
    if (typeof person !== 'object')
    {
        console.error(`${person} is not an object.`);
        return;
    }

    let randomNumber = Math.floor(Math.random() * 5) + 1; // a random number from 0 (we add a +1 to start from 1) to 5

    let newForm = person.form;

    switch (randomNumber) {
        case 1:
            newForm = 't-rex';
            break;
        case 2:
            newForm = 'grey wolf';
            break;
        case 3:
            newForm = 'bengal tiger';
            break;
        case 4:
            newForm = 'grizzly bear';
            break;
        case 5:
            newForm = 'raven';
            break;
        default:
            // stays human
            newForm = 'human';
            break;
    }

    return {
        name: person.name,
        bestFriend: person.bestFriend,
        form: newForm
    };
}

console.log('original object');
console.log(calvin);
console.log('after function');
console.log(transmogrifier(calvin)); // now the original is not changed in the process, we are creating a copy of it by returning a new object
console.log('original object');
console.log(calvin);


