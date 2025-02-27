# Key takeaways from the video "Objects, references, and functions":

**- Objects and References:** Objects in JavaScript are passed by *reference*, meaning when you pass an object to a function, you are passing a *reference* to the original object, **not a copy**.

**- Function Behavior:** Modifying an object within a function will change the original object because the function operates on the reference to the object.

**- Creating Copies:** If you need to avoid modifying the original object, you can create a **copy** of the object within the function and `return` the new object instead of altering the original.

When working with functions and objects, beware of what you are doing and if you're trying to get a simple return or a copy of the modified object.

These points highlight the importance of understanding how objects and references work when using functions in JavaScript.
