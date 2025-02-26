let newObj = 
{
    name: "Frank",
    age: 20,
    canWalk: function()
    {
        console.log('I can walk!');
    }
};

console.log(newObj.name); // Frank
console.log(newObj.age); // 20
console.log(newObj.canWalk()); // 'I can walk!'