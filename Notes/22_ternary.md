# Key takeaways from "One-liner Conditionals":

**- One-line If Statements:** These allow you to write if statements in a single line without curly braces, useful for quick checks. However, they are **limited to executing only one line of code**.

**- Truthiness and Falsiness:** In JavaScript, values can be "truthy" or "falsey." This means you can use variables directly in conditions without explicit comparisons.

**- Caution with One-liners:** While one-liners can make code shorter, they can reduce *readability* and *flexibility*. It's often better to use curly braces for *clarity* and *future modifications*.

This video explains how to use one-line if statements and the concept of truthiness in JavaScript, along with the potential pitfalls of using **terse** syntax.

# Key takeaways from "Ternaries":

**- Ternary Operator Structure:** The ternary operator is a concise way to perform conditional checks. It follows the format: `condition ? actionIfTrue : actionIfFalse`.

**- Usage:** It is often used to set a variable based on a condition. For example, `let job = (animal === 'cat') ? 'cat herder' : 'dog catcher';`.

**- Readability vs. Terseness:** While the ternary operator can make code shorter, it can also affect readability. Using parentheses can help clarify the expression.

The ternary operator is often used to set a variable based on certain conditions.

# Truthy VS Falsy

Generally speaking, if the variable has something in it, it's probably **truthy** and empty values are **falsey**.
More details about this on **Mozilla MDN**.