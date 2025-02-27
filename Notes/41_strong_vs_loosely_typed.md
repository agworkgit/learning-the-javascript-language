# Strong VS Loosely Typed Languages

Programming languages are categorized in lots of ways, one of which is whether they're considered strongly or loosely typed. 

This thankfully does not refer to how hard you hammer on the keyboard when writing your code. 

JavaScript is loosely typed and I want to give you a little information on what that means and why at some point you might care. 

I'm bringing up loose versus strong typing because it comes up with variables. In JavaScript, you've seen that we can create a variable, assign it a number, and then turn right around and assign it a word, a string later. 

Being able to reuse variables however you want makes JavaScript very flexible. Very experienced programmers can have strong and different opinions on whether this is good, but either way, JavaScript is a loosely typed language. 

In contrast with a strongly typed language, broadly speaking, your variables know about and enforce what kind of data they can store. The language will trigger some sort of error if you try to say put a number where you originally had a string. This can feel constraining, but it does help avoid bugs, especially in larger programs and applications. 

Let's say you have a variable called author name that will be used later in some way that makes sense for a person's name. If you later assign a number, your program might do something weird later because you fed it a number instead of a name. 

A strongly typed language would flag this for you and note that it could be a problem. One of the most popular solutions to this issue is **TypeScript**, which is JavaScript but with some extra features added on, like stronger typing. 

Many large JavaScript projects and frameworks write their original code in **TypeScript**, and transform it into JavaScript for running on the web. So you may see this discussed or become curious about it at some point, and I wanted you to know about it.