// iterate over an array

let pages = {
    first: "Home",
    second: "About",
    third: "Contact",
    fourth: "JavaScript Playground",
    fifth: "News",
    sixth: "Blog",
};

// another kind of loop - for ... in ...
for (p in pages) {
    console.log(p, pages[p]); // logs all the page names and their index
    //          ^       ^
    //        key       value
}
// to note: an order is not guaranteed by the JS spec, if order matters you can't trust the 'for in' loop completely
// to note: however, this kind of loop can iterate over object properties

console.log("\n");

let pageNames = [
    "Home",
    "About",
    "Contact",
    "JavaScript Playground",
    "News",
    "Blog",
];

for (page of pageNames) {
    console.log(page);
}

console.log("\n");

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
