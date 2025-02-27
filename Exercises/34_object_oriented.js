class Cake {
    constructor (cakeName, cakeFlavour){
        this.name = cakeName;
        this.flavour = cakeFlavour;
    }

    bake = function () {
        console.log('baking');
    }

    cool = function () {
        console.log('cooling');
    }
}

let chocolate_cake = new Cake('awesome choc', 'chocolate cake');

console.log(chocolate_cake);
