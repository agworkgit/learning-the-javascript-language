# Key takeaways from "Basic functions":

**- Function Definition:** Functions are a way to package code into a single unit that can be named, invoked, and maintained separately. You define a function using the `function` keyword, followed by a name, parentheses, and curly braces containing the function body.

**- Function Invocation:** Once defined, you can invoke (call) the `function` by writing its name followed by parentheses.

**- Function Expressions:** Functions can also be defined as expressions, where a function is assigned to a variable. This allows the function to be used similarly to a function declaration but with some differences in behavior.

These concepts are fundamental to using functions effectively in JavaScript.

# Here’s a brief overview of their differences:

**- Function Declaration:** This defines a function with the function keyword followed by the function name. It is **hoisted**, meaning it **can be called before it is defined** in the code.

```
function speak() {
console.log("Hello!");
}
```

**- Function Expression:** This defines a function as part of a larger expression, typically by assigning it to a variable. It is not hoisted, so it can only be **called after it is defined**.

```
const speak = function() {
console.log("Hello!");
};
```