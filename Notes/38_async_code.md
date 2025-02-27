# Here are the key takeaways from the video on "Asynchronous code: Waiting is the hardest part":

**- Asynchronous Code:** This allows certain steps to run without blocking others, improving efficiency and responsiveness.

*"I'll finish this later."*

**- Real-World Analogy:** Like baking a cake and making frosting simultaneously, asynchronous code runs tasks in parallel when possible.

**- Common Use Cases:** Loading data from the internet or files, where waiting for data can slow down the entire process.

This video highlights the importance of asynchronous operations in making code more efficient and responsive.

## Syncronous Steps
1. Find the cow.
2. Milk the cow.
3. Take the milk to the market. *(this won't run until step 2 finishes)*

## Asyncronous Steps
1. Make cake batter.
2. Set oven to right temperature and put cake in.
3. Make frosting. *(async step)*
4. When cake has cooled, frost it.

The main situation where we need to work asynchronously is when our code needs to load data from somewhere, usually somewhere on the internet. 

This could be loading some inventory data from a store's back office, a photo from a catalog, anything where our code needs to make a request. 

If you're using node, loading files from disk is an asynchronous operation by default because disks can be relatively slow. We always assume that the network or other sources of data can be slow sometimes, and if all the code on a page had to wait for that data to load, everything would feel slow and unresponsive, which is bad. 

As you start writing intermediate to advanced JavaScript code, you will almost certainly need to deal with various ways of writing asynchronous code.