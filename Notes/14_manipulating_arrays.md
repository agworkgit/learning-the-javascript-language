# Here are the key takeaways from the "Manipulating arrays" video:

**- Accessing Elements:** Use square braces `[]` to access elements in an array, remembering that arrays are zero-indexed.

**- Modifying Elements:** You can change the value of an element using its index.

**- Adding Elements:** Use `array.push()` to add elements to the end, or use the length property to dynamically add elements.

**- Removing Elements:** Use `array.pop()` to remove the last element, and `array.splice()` to remove elements from specific positions.

The `array.splice()` method in JavaScript takes two main arguments:

Start Index: The index at which to start changing the array.

Delete Count: The number of elements to remove from the array starting from the start index.

For example:

```
let fruits = ["Apple", "Banana", "Cherry", "Date"];
fruits.splice(1, 2); // Removes "Banana" and "Cherry"
```

**- Creating a Subset:** The `array.slice()` method in JavaScript is used to create a new array by copying a portion of an existing array. Here's how it works:

Syntax: `array.slice(startIndex, endIndex)`

startIndex: The index at which to begin extraction. The element at this index is included in the new array.

endIndex: The index at which to end extraction. The element at this index is not included in the new array. If omitted, extraction continues to the end of the array.

For example:

```
let fruits = ["Apple", "Banana", "Cherry", "Date"];
let slicedFruits = fruits.slice(1, 3); // ["Banana", "Cherry"]
```

This method is useful when you need to create a subset of an array without modifying the original array.

These points should help you effectively manipulate arrays in JavaScript.