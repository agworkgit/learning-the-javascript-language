# Here are the key takeaways from the "Jargon: References" video:

**- References in JavaScript:** When you assign an object to a new variable, you're not creating a copy; *both variables reference the same memory location*.

**- Impact on Object Manipulation:** Changes made to one variable will affect the other since they point to the same object.

**- Creating Copies:** To create a true copy of an object, you can use methods like `Object.assign()` or the spread operator `(...)`, or convert the object to `JSON` and back.

**- Examples of Correct Copies:**

```
animal2 = Object.assign({}, animal);
animal2 = { ...animal };
animal2 = JSON.parse(JSON.stringify(animal));
```

These points should help you understand how references work with objects in JavaScript.