---
title: "An Introduction to Generators"
date: "06-07-2019"
---

![An Introduction to Generators Cover](./../../images/an-introduction-to-generators.png)

Generators are function that are introduced in ES6 and have ability to pause and play i.e you can return multiple values from the different context of the execution of the function.
You can pause them where ever you want maybe in the middle of the express. They have this super cool ability on execution. 

## Let's write a Generator 

```js
function *generator() {
  yield 1;
  yield 2;
  return 3;
}

const it = generator();
```
So, when a `generator` is called is good to store that a variable. Wait!! Oh crap it looks me different from a normal function. 🧐 <br/>
Yes, you can say that it's different.

## Hmm 🤔, But how is it works?
So, how we find the a function starts execution 🤨? From the line where we called the function and when a normal function starts execution it's going be executed till the end of the function or where function finds the `return` statement. Unlike normal function return `undefined` when nothing returned from a that function.

Instead when we called generator function i.e `const it = generator();`. So, it returns an [`iterator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator). <br>
I assume that you already have knowledge about iterator if not checkout this [link](http://javascript.info/iterable).

Now, `it` contains that `iterator` and iterator have a method called `next` that calls and return an object like this `{ value: something, done: false }`.<br/>
Here, `value` is the current value that returned from the function and `done` is the boolean value that show if the execution of the function got finished or not. And in case of generator the value after `yield` becomes the `value` of the object when `next` method called. So, further it's going to be executed like this.

```js
it.next(); { value: 1, done: false };

// If called it again then
it.next(); { value: 2, done: false };

// Once More
it.next(); { value: 3, done: false };

// Let's try one more time
it.next(); { value: undefined, done: true };
```

At last, when the generator execution finished it returns `value` of `undefined` because there's no value to be returned. 

#### What happens If we put return statement in the middle of the generator function?
